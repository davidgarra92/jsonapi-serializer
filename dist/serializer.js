"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.transform = void 0;
const context_1 = require("./context");
const default_transformer_1 = require("./default-transformer");
const utils_1 = require("./utils");
const errors_1 = require("./errors");
/**
 * Create a ContextBuilder, used to configure the transformation
 */
function transform() {
    return new context_1.ContextBuilder(serializeContext);
}
exports.transform = transform;
/**
 * Serialize the entity
 *
 * @param data entity to be serialized
 * @param type type of the entity
 * @param options options used in the serialization
 */
function serialize(data, type, options) {
    if (!options) {
        options = {};
    }
    return transform()
        .withInput(data)
        .withTransformer(new default_transformer_1.DefaultTransformer(type, options.relationships || []))
        .withOptions(options)
        .serialize();
}
exports.serialize = serialize;
function serializeContext(context) {
    if (!context.input) {
        // eslint-disable-next-line unicorn/no-null
        return { data: null };
    }
    const includedByType = {};
    const data = Array.isArray(context.input)
        ? context.input.map((entity) => serializeEntity(entity, context.transformer, context.options, includedByType))
        : serializeEntity(context.input, context.transformer, context.options, includedByType);
    const included = [];
    for (const type of Object.keys(includedByType)) {
        for (const id of Object.keys(includedByType[type])) {
            included.push(includedByType[type][id]);
        }
    }
    return Object.assign({ data }, (included.length > 0 ? { included } : {}));
}
function serializeEntity(entity, transformer, options, includedByType) {
    let attributes = Object.assign({}, transformer.transform(entity, options));
    const idKey = options.idKey || 'id';
    const id = attributes[idKey] || entity[idKey] || undefined;
    const lid = (!id && entity.lid) || undefined;
    delete attributes[idKey];
    delete attributes.lid;
    const relationships = {};
    for (const relation of Object.keys(transformer.relationships)) {
        const context = Object.assign(Object.assign({}, transformer.relationships[relation](entity, options)), { options });
        if (Array.isArray(context.input)) {
            relationships[relation] = {
                data: context.input
                    .map((inputItem) => serializeRelation(Object.assign(Object.assign({}, context), { input: inputItem }), includedByType))
                    .filter((identifier) => !!identifier),
            };
        }
        else if (context.input !== undefined) {
            relationships[relation] = {
                data: serializeRelation(context, includedByType),
            };
        }
    }
    if (options.fields && options.fields[transformer.type]) {
        attributes = (0, utils_1.whitelist)(attributes, options.fields[transformer.type]);
    }
    if (options.changeCase) {
        attributes = (0, utils_1.changeCase)(attributes, options.changeCase, options.changeCaseDeep);
    }
    const data = {
        type: transformer.type,
        attributes,
        relationships,
    };
    if (id) {
        data.id = id;
    }
    else if (lid) {
        data.lid = lid;
    }
    if (data.relationships && Object.keys(data.relationships).length === 0) {
        delete data.relationships;
    }
    return data;
}
function serializeRelation(context, includedByType) {
    const { input: entity, options, transformer, included } = context;
    const idKey = options.idKey || 'id';
    if (entity === null) {
        return null;
    }
    if (!entity) {
        return undefined;
    }
    const id = entity[idKey];
    const lid = entity.lid;
    if (!id && !lid) {
        throw new errors_1.JsonApiSerializerError('Resource without id or lid');
    }
    if (included) {
        if (!(transformer.type in includedByType)) {
            includedByType[transformer.type] = {};
        }
        if (!(id in includedByType[transformer.type])) {
            includedByType[transformer.type][id !== null && id !== void 0 ? id : lid] = serializeEntity(entity, transformer, options, includedByType);
        }
    }
    if (id) {
        return {
            type: transformer.type,
            id,
        };
    }
    return {
        type: transformer.type,
        lid,
    };
}
