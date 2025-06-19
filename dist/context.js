"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextBuilder = void 0;
const errors_1 = require("./errors");
class ContextBuilder {
    constructor(renderFunction) {
        this.renderFunction = renderFunction;
        this.included = false;
    }
    withInput(input) {
        this.input = input;
        return this;
    }
    withTransformer(transformer) {
        this.transformer = transformer;
        return this;
    }
    withIncluded(included) {
        this.included = included;
        return this;
    }
    withOptions(options) {
        this.options = options;
        return this;
    }
    toContext() {
        const transformer = this.transformer;
        if (!transformer) {
            throw new errors_1.JsonApiSerializerError('transformer is required');
        }
        const options = this.options || {};
        return {
            input: this.input,
            transformer,
            included: this.included,
            options,
        };
    }
    serialize() {
        return this.renderFunction(this.toContext());
    }
}
exports.ContextBuilder = ContextBuilder;
