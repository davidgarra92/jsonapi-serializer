"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonApiSerializerError = void 0;
class JsonApiSerializerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'JsonApiSerializerError';
    }
}
exports.JsonApiSerializerError = JsonApiSerializerError;
