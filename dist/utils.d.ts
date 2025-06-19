import { AttributesObject, CaseType } from './types';
/**
 * Used to change the case (e.g. captalization) of the keys of a object
 *
 * @param originalAttributes
 * @param caseType
 * @param deep
 */
export declare function changeCase(originalAttributes: AttributesObject, caseType: CaseType, deep?: boolean): AttributesObject;
/**
 * Keep only a set of fields on a given object
 *
 * @param object
 * @param list
 */
export declare function whitelist(object: unknown, list: string[]): AttributesObject;
/**
 * Create record from keys and mapped values
 *
 * @param keys
 * @param getValue
 */
export declare function createRecordFromKeys<K extends string | number | symbol, V>(keys: K[], getValue: (key: K) => V): Record<K, V>;
