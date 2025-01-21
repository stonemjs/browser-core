[**Browser Core Documentation v0.0.2**](../../README.md)

***

[Browser Core Documentation](../../modules.md) / [declarations](../README.md) / IRoute

# Interface: IRoute

Defined in: [declarations.ts:9](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/declarations.ts#L9)

Represents a route.

## Properties

### getParam()

> **getParam**: \<`TReturn`\>(`name`, `fallback`?) => `undefined` \| `TReturn`

Defined in: [declarations.ts:11](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/declarations.ts#L11)

#### Type Parameters

• **TReturn** = `unknown`

#### Parameters

##### name

`string`

##### fallback?

`TReturn`

#### Returns

`undefined` \| `TReturn`

***

### params

> **params**: `Record`\<`string`, `unknown`\>

Defined in: [declarations.ts:10](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/declarations.ts#L10)
