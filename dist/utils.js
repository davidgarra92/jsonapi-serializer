"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecordFromKeys = exports.whitelist = exports.changeCase = void 0;
const change_case_1 = require("change-case");
const types_1 = require("./types");
/**
 * Used to change the case (e.g. captalization) of the keys of a object
 *
 * @param originalAttributes
 * @param caseType
 * @param deep
 */
function changeCase(originalAttributes, caseType, deep = false) {
    const caseTypes = {
        [types_1.CaseType.camelCase]: change_case_1.camelCase,
        [types_1.CaseType.snakeCase]: change_case_1.snakeCase,
        [types_1.CaseType.kebabCase]: change_case_1.paramCase,
    };
    const caseFunction = caseTypes[caseType];
    if (!caseFunction) {
        throw new Error('Invalid case type: ' + caseType);
    }
    const parsedAttributes = {};
    for (const key of Object.keys(originalAttributes)) {
        let value = originalAttributes[key];
        if (deep && value) {
            if (Array.isArray(value)) {
                value = value.map((value) => (isObject(value) ? changeCase(value, caseType, deep) : value));
            }
            else if (isObject(value)) {
                value = changeCase(value, caseType, deep);
            }
        }
        parsedAttributes[caseFunction(key)] = value;
    }
    return parsedAttributes;
}
exports.changeCase = changeCase;
function isObject(value) {
    return Object.prototype.toString.call(value) == '[object Object]';
}
/**
 * Keep only a set of fields on a given object
 *
 * @param object
 * @param list
 */
function whitelist(object, list) {
    const result = {};
    for (const key of list) {
        result[key] = object[key];
    }
    return result;
}
exports.whitelist = whitelist;
/**
 * Create record from keys and mapped values
 *
 * @param keys
 * @param getValue
 */
function createRecordFromKeys(keys, getValue) {
    const record = {};
    for (const key of keys) {
        record[key] = getValue(key);
    }
    return record;
}
exports.createRecordFromKeys = createRecordFromKeys;
