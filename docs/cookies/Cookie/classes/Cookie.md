[**Browser Core Documentation v0.0.2**](../../../README.md)

***

[Browser Core Documentation](../../../modules.md) / [cookies/Cookie](../README.md) / Cookie

# Class: Cookie

Defined in: cookies/Cookie.ts:7

Class representing a Cookie.

## Constructors

### new Cookie()

> `protected` **new Cookie**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: cookies/Cookie.ts:27

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)

## Properties

### name

> `readonly` **name**: `string`

Defined in: cookies/Cookie.ts:8

***

### options

> `readonly` **options**: [`CookieOptions`](../../../declarations/interfaces/CookieOptions.md)

Defined in: cookies/Cookie.ts:10

***

### value

> `readonly` **value**: `unknown`

Defined in: cookies/Cookie.ts:9

## Methods

### cloneWith()

> **cloneWith**(`value`, `options`): [`Cookie`](Cookie.md)

Defined in: cookies/Cookie.ts:70

Clone the cookie with new name, value, and options.

#### Parameters

##### value

`unknown`

New cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

New cookie options.

#### Returns

[`Cookie`](Cookie.md)

A new cookie instance.

***

### serialize()

> **serialize**(): `string`

Defined in: cookies/Cookie.ts:54

Serialize the cookie value.

#### Returns

`string`

***

### setExpires()

> **setExpires**(`value`): `this`

Defined in: cookies/Cookie.ts:37

Set expiration date for the cookie.

#### Parameters

##### value

`Date`

Expiration date.

#### Returns

`this`

***

### setSecure()

> **setSecure**(`value`): `this`

Defined in: cookies/Cookie.ts:46

Set secure flag for the cookie.

#### Parameters

##### value

`boolean`

Whether the cookie is secure.

#### Returns

`this`

***

### create()

> `static` **create**(`name`, `value`, `options`): [`Cookie`](Cookie.md)

Defined in: cookies/Cookie.ts:18

Create a Cookie.

#### Parameters

##### name

`string`

Cookie name.

##### value

`unknown`

Cookie value.

##### options

[`CookieOptions`](../../../declarations/interfaces/CookieOptions.md) = `{}`

Cookie options.

#### Returns

[`Cookie`](Cookie.md)
