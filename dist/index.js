"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonApiSerializerError = exports.whitelist = exports.transform = exports.serialize = exports.deserialize = exports.ContextBuilder = exports.DefaultTransformer = exports.Transformer = void 0;
var transformer_1 = require("./transformer");
Object.defineProperty(exports, "Transformer", { enumerable: true, get: function () { return transformer_1.Transformer; } });
__exportStar(require("./types"), exports);
var default_transformer_1 = require("./default-transformer");
Object.defineProperty(exports, "DefaultTransformer", { enumerable: true, get: function () { return default_transformer_1.DefaultTransformer; } });
var context_1 = require("./context");
Object.defineProperty(exports, "ContextBuilder", { enumerable: true, get: function () { return context_1.ContextBuilder; } });
var deserializer_1 = require("./deserializer");
Object.defineProperty(exports, "deserialize", { enumerable: true, get: function () { return deserializer_1.deserialize; } });
var serializer_1 = require("./serializer");
Object.defineProperty(exports, "serialize", { enumerable: true, get: function () { return serializer_1.serialize; } });
Object.defineProperty(exports, "transform", { enumerable: true, get: function () { return serializer_1.transform; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "whitelist", { enumerable: true, get: function () { return utils_1.whitelist; } });
var errors_1 = require("./errors");
Object.defineProperty(exports, "JsonApiSerializerError", { enumerable: true, get: function () { return errors_1.JsonApiSerializerError; } });
