[@jsonapiworld/jsonapi-serializer](../README.md) / DefaultTransformer

# Class: DefaultTransformer<TEntity, TExtraOptions\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `unknown` |
| `TExtraOptions` | `void` |

## Hierarchy

- [`Transformer`](Transformer.md)<`TEntity`, `TExtraOptions`\>

  ↳ **`DefaultTransformer`**

## Table of contents

### Constructors

- [constructor](DefaultTransformer.md#constructor)

### Properties

- [relationships](DefaultTransformer.md#relationships)
- [type](DefaultTransformer.md#type)

### Methods

- [transform](DefaultTransformer.md#transform)

## Constructors

### constructor

• **new DefaultTransformer**<`TEntity`, `TExtraOptions`\>(`type`, `relationshipNames?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `unknown` |
| `TExtraOptions` | `void` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` | `undefined` |
| `relationshipNames` | `string`[] | `[]` |

#### Overrides

[Transformer](Transformer.md).[constructor](Transformer.md#constructor)

#### Defined in

[src/default-transformer.ts:8](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/default-transformer.ts#L8)

## Properties

### relationships

• `Readonly` **relationships**: `Record`<`string`, [`RelationshipTransformerInfoFunction`](../README.md#relationshiptransformerinfofunction)<`TEntity`, `TExtraOptions`\>\>

#### Overrides

[Transformer](Transformer.md).[relationships](Transformer.md#relationships)

#### Defined in

[src/default-transformer.ts:6](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/default-transformer.ts#L6)

___

### type

• **type**: `string`

#### Inherited from

[Transformer](Transformer.md).[type](Transformer.md#type)

#### Defined in

[src/default-transformer.ts:8](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/default-transformer.ts#L8)

## Methods

### transform

▸ **transform**(`entity`): [`JsonObject`](../README.md#jsonobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `any` |

#### Returns

[`JsonObject`](../README.md#jsonobject)

#### Overrides

[Transformer](Transformer.md).[transform](Transformer.md#transform)

#### Defined in

[src/default-transformer.ts:23](https://github.com/jsonapiworld/jsonapi-serializer/blob/23c793d/src/default-transformer.ts#L23)
