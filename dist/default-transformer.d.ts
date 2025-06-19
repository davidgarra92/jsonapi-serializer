import { RelationshipTransformerInfoFunction, Transformer } from './transformer';
import { AttributesObject } from './types';
export declare class DefaultTransformer<TEntity = unknown, TExtraOptions = void> extends Transformer<TEntity, TExtraOptions> {
    type: string;
    readonly relationships: Record<string, RelationshipTransformerInfoFunction<TEntity, TExtraOptions>>;
    constructor(type: string, relationshipNames?: string[]);
    transform(entity: any): AttributesObject;
}
