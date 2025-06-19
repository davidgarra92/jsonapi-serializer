"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = void 0;
const utils_1 = require("./utils");
/**
 * Deserialize a JSON:API response
 *
 * @param response
 * @param options
 */
function deserialize(response, options = {}) {
    if (!response.data) {
        return undefined;
    }
    const included = response.included || [];
    return Array.isArray(response.data)
        ? response.data.map((data) => {
            return parseJsonApiSimpleResourceData(data, included, options, false, {});
        })
        : parseJsonApiSimpleResourceData(response.data, included, options, false, {});
}
exports.deserialize = deserialize;
function parseJsonApiSimpleResourceData(data, included, options, useCache, includedCache) {
    if (!(data.type in includedCache)) {
        includedCache[data.type] = {};
    }
    const id = (data && 'id' in data && data.id) || undefined;
    if (useCache && id && id in includedCache[data.type]) {
        return includedCache[data.type][id];
    }
    const lid = (data && 'lid' in data && data.lid) || undefined;
    if (useCache && lid && lid in includedCache[data.type]) {
        return includedCache[data.type][lid];
    }
    let attributes = data.attributes || {};
    if (options.changeCase) {
        attributes = (0, utils_1.changeCase)(attributes, options.changeCase, options.changeCaseDeep);
    }
    const resource = Object.assign(Object.assign(Object.assign({}, (id ? { id } : {})), (lid ? { lid } : {})), attributes);
    if (data.links) {
        resource['links'] = data.links;
    }
    const ensureId = id || lid;
    if (ensureId) {
        includedCache[data.type][ensureId] = resource;
    }
    if (data.relationships) {
        for (const relationName of Object.keys(data.relationships)) {
            const relationReference = data.relationships[relationName];
            if (!relationReference) {
                continue;
            }
            if (Array.isArray(relationReference.data)) {
                resource[relationName] = relationReference.data.map((relationData) => {
                    const id = 'id' in relationData ? { field: 'id', value: relationData.id } : { field: 'lid', value: relationData.lid };
                    return findJsonApiIncluded(included, includedCache, relationData.type, id, options);
                });
            }
            else if (relationReference && relationReference.data) {
                const relationData = relationReference.data;
                const id = 'id' in relationData ? { field: 'id', value: relationData.id } : { field: 'lid', value: relationData.lid };
                const relationResource = findJsonApiIncluded(included, includedCache, relationData.type, id, options);
                if (relationReference.links) {
                    relationResource.links = relationReference.links;
                }
                resource[relationName] = relationResource;
            }
        }
    }
    return resource;
}
/**
 *
 * @param included
 * @param includedCache
 * @param type
 * @param id
 * @param id.value
 * @param options
 * @param id.field
 */
function findJsonApiIncluded(included, includedCache, type, id, options) {
    const foundResource = included.find((item) => {
        if (item.type !== type)
            return false;
        if (id.field === 'id' && 'id' in item)
            return item.id === id.value;
        if (id.field === 'lid' && 'lid' in item)
            return item.lid === id.value;
        return false;
    });
    if (!foundResource) {
        return { [id.field]: id.value };
    }
    return parseJsonApiSimpleResourceData(foundResource, included, options, true, includedCache);
}
