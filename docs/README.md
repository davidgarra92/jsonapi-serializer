@jsonapiworld/jsonapi-serializer

# @jsonapiworld/jsonapi-serializer

## Table of contents

### Enumerations

- [CaseType](enums/CaseType.md)

### Classes

- [ContextBuilder](classes/ContextBuilder.md)
- [DefaultTransformer](classes/DefaultTransformer.md)
- [JsonApiSerializerError](classes/JsonApiSerializerError.md)
- [Transformer](classes/Transformer.md)

### JSON Type Aliases

- [JsonObject](README.md#jsonobject)

### Other Type Aliases

- [AttributesObject](README.md#attributesobject)
- [Context](README.md#context)
- [DocumentObject](README.md#documentobject)
- [ExistingDocumentObject](README.md#existingdocumentobject)
- [ExistingResourceObject](README.md#existingresourceobject)
- [LinkObject](README.md#linkobject)
- [MetaObject](README.md#metaobject)
- [NewDocumentObject](README.md#newdocumentobject)
- [NewResourceObject](README.md#newresourceobject)
- [Options](README.md#options)
- [RelationshipObject](README.md#relationshipobject)
- [RelationshipTransformerInfo](README.md#relationshiptransformerinfo)
- [RelationshipTransformerInfoFunction](README.md#relationshiptransformerinfofunction)
- [ResourceIdentifierObject](README.md#resourceidentifierobject)
- [ResourceObject](README.md#resourceobject)
- [SerializeOptions](README.md#serializeoptions)
- [TransformerRelationships](README.md#transformerrelationships)

### Functions

- [deserialize](README.md#deserialize)
- [serialize](README.md#serialize)
- [transform](README.md#transform)
- [whitelist](README.md#whitelist)

## JSON Type Aliases

### JsonObject

Ƭ **JsonObject**: { [Key in string]?: JsonValue }

Matches a JSON object.

This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.

#### Defined in

node_modules/type-fest/source/basic.d.ts:22

___

## Other Type Aliases

### AttributesObject

Ƭ **AttributesObject**: [`JsonObject`](README.md#jsonobject)

#### Defined in

[src/types.ts:17](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L17)

___

### Context

Ƭ **Context**<`TEntity`, `TExtraProperties`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `TEntity` |
| `TExtraProperties` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `included` | `boolean` |
| `input` | `TEntity` \| `undefined` |
| `options` | [`Options`](README.md#options)<`TExtraProperties`\> |
| `transformer` | [`Transformer`](classes/Transformer.md)<`TEntity`, `TExtraProperties`\> |

#### Defined in

[src/context.ts:5](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/context.ts#L5)

___

### DocumentObject

Ƭ **DocumentObject**: [`ExistingDocumentObject`](README.md#existingdocumentobject) \| [`NewDocumentObject`](README.md#newdocumentobject)

#### Defined in

[src/types.ts:15](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L15)

___

### ExistingDocumentObject

Ƭ **ExistingDocumentObject**: `BaseDocumentObject`<[`ExistingResourceObject`](README.md#existingresourceobject)\>

#### Defined in

[src/types.ts:11](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L11)

___

### ExistingResourceObject

Ƭ **ExistingResourceObject**: [`ResourceIdentifierObject`](README.md#resourceidentifierobject) & { `attributes`: [`AttributesObject`](README.md#attributesobject) ; `id`: `string` ; `links?`: [`LinkObject`](README.md#linkobject) ; `relationships?`: `Record`<`string`, [`RelationshipObject`](README.md#relationshipobject)\>  }

#### Defined in

[src/types.ts:28](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L28)

___

### LinkObject

Ƭ **LinkObject**: [`JsonObject`](README.md#jsonobject)

#### Defined in

[src/types.ts:21](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L21)

___

### MetaObject

Ƭ **MetaObject**: [`JsonObject`](README.md#jsonobject)

#### Defined in

[src/types.ts:19](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L19)

___

### NewDocumentObject

Ƭ **NewDocumentObject**: `BaseDocumentObject`<[`NewResourceObject`](README.md#newresourceobject)\>

#### Defined in

[src/types.ts:13](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L13)

___

### NewResourceObject

Ƭ **NewResourceObject**: `Omit`<[`ExistingResourceObject`](README.md#existingresourceobject), ``"id"``\>

#### Defined in

[src/types.ts:35](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L35)

___

### Options

Ƭ **Options**<`TExtraOptions`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TExtraOptions` | `void` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `changeCase?` | [`CaseType`](enums/CaseType.md) | change case of the attribute keys |
| `changeCaseDeep?` | `boolean` | if true, also apply the change for sub objects |
| `extra?` | `TExtraOptions` | custom properties, that are available in the transformer |
| `fields?` | `Record`<`string`, `string`[]\> | map of EntityType => Fields Array, e.g. `{"users": ["name", "age"], "images": ["width"]}` |
| `idKey?` | `string` | key that should be used as the id |

#### Defined in

[src/types.ts:50](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L50)

___

### RelationshipObject

Ƭ **RelationshipObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ResourceIdentifierObject`](README.md#resourceidentifierobject) \| [`ResourceIdentifierObject`](README.md#resourceidentifierobject)[] |
| `links?` | [`LinkObject`](README.md#linkobject) |

#### Defined in

[src/types.ts:39](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L39)

___

### RelationshipTransformerInfo

Ƭ **RelationshipTransformerInfo**<`TExtraOptions`, `T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TExtraOptions` | `TExtraOptions` |
| `T` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `included` | `boolean` |
| `input` | `T` |
| `transformer` | [`Transformer`](classes/Transformer.md)<`T`, `TExtraOptions`\> |

#### Defined in

[src/transformer.ts:24](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/transformer.ts#L24)

___

### RelationshipTransformerInfoFunction

Ƭ **RelationshipTransformerInfoFunction**<`TEntity`, `TExtraOptions`\>: (`entity`: `TEntity`, `options`: [`Options`](README.md#options)<`TExtraOptions`\>) => [`RelationshipTransformerInfo`](README.md#relationshiptransformerinfo)<`TExtraOptions`\>

#### Type parameters

| Name |
| :------ |
| `TEntity` |
| `TExtraOptions` |

#### Type declaration

▸ (`entity`, `options`): [`RelationshipTransformerInfo`](README.md#relationshiptransformerinfo)<`TExtraOptions`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`Options`](README.md#options)<`TExtraOptions`\> |

##### Returns

[`RelationshipTransformerInfo`](README.md#relationshiptransformerinfo)<`TExtraOptions`\>

#### Defined in

[src/transformer.ts:19](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/transformer.ts#L19)

___

### ResourceIdentifierObject

Ƭ **ResourceIdentifierObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | `string` |

#### Defined in

[src/types.ts:23](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L23)

___

### ResourceObject

Ƭ **ResourceObject**: [`ExistingResourceObject`](README.md#existingresourceobject) \| [`NewResourceObject`](README.md#newresourceobject)

#### Defined in

[src/types.ts:37](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L37)

___

### SerializeOptions

Ƭ **SerializeOptions**<`TExtraOptions`\>: [`Options`](README.md#options)<`TExtraOptions`\> & { `relationships?`: `string`[]  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TExtraOptions` | `void` |

#### Defined in

[src/types.ts:63](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/types.ts#L63)

___

### TransformerRelationships

Ƭ **TransformerRelationships**<`TEntity`, `TExtraOptions`\>: `Record`<`string`, [`RelationshipTransformerInfoFunction`](README.md#relationshiptransformerinfofunction)<`TEntity`, `TExtraOptions`\>\>

#### Type parameters

| Name |
| :------ |
| `TEntity` |
| `TExtraOptions` |

#### Defined in

[src/transformer.ts:14](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/transformer.ts#L14)

## Functions

### deserialize

▸ **deserialize**<`TEntity`, `TExtraOptions`\>(`response`, `options?`): `TEntity` \| `TEntity`[] \| `undefined`

Deserialize a JSON:API response

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `TEntity` |
| `TExtraOptions` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`DocumentObject`](README.md#documentobject) |
| `options` | [`Options`](README.md#options)<`TExtraOptions`\> |

#### Returns

`TEntity` \| `TEntity`[] \| `undefined`

#### Defined in

[src/deserializer.ts:12](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/deserializer.ts#L12)

___

### serialize

▸ **serialize**<`TEntity`, `TExtraOptions`\>(`data`, `type`, `options?`): [`DocumentObject`](README.md#documentobject)

Serialize the entity

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `TEntity` |
| `TExtraOptions` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `TEntity` | entity to be serialized |
| `type` | `string` | type of the entity |
| `options?` | [`SerializeOptions`](README.md#serializeoptions)<`TExtraOptions`\> | options used in the serialization |

#### Returns

[`DocumentObject`](README.md#documentobject)

#### Defined in

[src/serializer.ts:32](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/serializer.ts#L32)

___

### transform

▸ **transform**<`TEntity`, `TExtraOptions`\>(): [`ContextBuilder`](classes/ContextBuilder.md)<`TEntity`, `TExtraOptions`\>

Create a ContextBuilder, used to configure the transformation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `TEntity` |
| `TExtraOptions` | `unknown` |

#### Returns

[`ContextBuilder`](classes/ContextBuilder.md)<`TEntity`, `TExtraOptions`\>

#### Defined in

[src/serializer.ts:21](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/serializer.ts#L21)

___

### whitelist

▸ **whitelist**(`object`, `list`): [`AttributesObject`](README.md#attributesobject)

Keep only a set of fields on a given object

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `unknown` |
| `list` | `string`[] |

#### Returns

[`AttributesObject`](README.md#attributesobject)

#### Defined in

[src/utils.ts:55](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/utils.ts#L55)
