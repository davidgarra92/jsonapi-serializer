"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultTransformer = void 0;
const transformer_1 = require("./transformer");
const utils_1 = require("./utils");
class DefaultTransformer extends transformer_1.Transformer {
    constructor(type, relationshipNames = []) {
        super();
        this.type = type;
        this.relationships = (0, utils_1.createRecordFromKeys)(relationshipNames, (relationName) => {
            return (entity) => {
                return {
                    input: entity[relationName],
                    transformer: new DefaultTransformer(relationName, []),
                    included: false,
                };
            };
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform(entity) {
        const attributes = Object.assign({}, entity);
        for (const relationship in this.relationships) {
            delete attributes[relationship];
        }
        return attributes;
    }
}
exports.DefaultTransformer = DefaultTransformer;
