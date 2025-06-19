import { Transformer } from './transformer';
import { Options, DocumentObject } from './types';
export type Context<TEntity, TExtraProperties = unknown> = {
    input: TEntity | TEntity[] | undefined;
    transformer: Transformer<TEntity, TExtraProperties>;
    included: boolean;
    options: Options<TExtraProperties>;
};
export declare class ContextBuilder<TEntity, TExtraProperties = unknown> {
    protected renderFunction: (c: Context<TEntity, TExtraProperties>) => DocumentObject;
    input?: TEntity | TEntity[];
    transformer?: Transformer<TEntity, TExtraProperties>;
    included: boolean;
    options?: Options<TExtraProperties>;
    constructor(renderFunction: (c: Context<TEntity, TExtraProperties>) => DocumentObject);
    withInput(input: TEntity | TEntity[]): this;
    withTransformer(transformer: Transformer<TEntity, TExtraProperties>): this;
    withIncluded(included: boolean): this;
    withOptions(options: Options<TExtraProperties>): this;
    toContext(): Context<TEntity, TExtraProperties>;
    serialize(): DocumentObject;
}
