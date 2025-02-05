[**Browser Core Documentation v0.0.2**](../../../README.md)

***

[Browser Core Documentation](../../../modules.md) / [events/OutgoingBrowserResponse](../README.md) / OutgoingBrowserResponse

# Class: OutgoingBrowserResponse

Defined in: [events/OutgoingBrowserResponse.ts:8](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L8)

## Extends

- `OutgoingResponse`

## Constructors

### new OutgoingBrowserResponse()

> **new OutgoingBrowserResponse**(`options`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

Defined in: [events/OutgoingBrowserResponse.ts:27](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L27)

Constructor for OutgoingBrowserResponse.
Initializes headers and cookies based on the provided options.

#### Parameters

##### options

[`OutgoingBrowserResponseOptions`](../interfaces/OutgoingBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

#### Overrides

`OutgoingResponse.constructor`

## Properties

### OUTGOING\_BROWSER\_RESPONSE

> `static` **OUTGOING\_BROWSER\_RESPONSE**: `string` = `'stonejs@outgoing_browser_response'`

Defined in: [events/OutgoingBrowserResponse.ts:9](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L9)

## Methods

### is1xx()

> **is1xx**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:58](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L58)

Check if the status code represents an informational response (1xx).

#### Returns

`boolean`

True if the status code is informational, otherwise false.

***

### is2xx()

> **is2xx**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:67](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L67)

Check if the status code represents a successful response (2xx).

#### Returns

`boolean`

True if the status code is successful, otherwise false.

***

### is3xx()

> **is3xx**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:76](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L76)

Check if the status code represents a redirection response (3xx).

#### Returns

`boolean`

True if the status code is a redirection, otherwise false.

***

### is4xx()

> **is4xx**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:85](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L85)

Check if the status code represents a client error response (4xx).

#### Returns

`boolean`

True if the status code is a client error, otherwise false.

***

### is5xx()

> **is5xx**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:94](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L94)

Check if the status code represents a server error response (5xx).

#### Returns

`boolean`

True if the status code is a server error, otherwise false.

***

### isError()

> **isError**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:112](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L112)

Check if the status code is an error (i.e., 4xx or 5xx).

#### Returns

`boolean`

True if the status code is an error, otherwise false.

***

### isForbidden()

> **isForbidden**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:139](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L139)

Check if the status code is 403 (Forbidden).

#### Returns

`boolean`

True if the status code is 403, otherwise false.

***

### isInStatusRange()

> **isInStatusRange**(`start`, `end`): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:38](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L38)

Check if the status code falls within the specified range.

#### Parameters

##### start

`number`

The starting value of the range (inclusive).

##### end

`number`

The ending value of the range (exclusive).

#### Returns

`boolean`

True if the status code is within the specified range, otherwise false.

***

### isInvalid()

> **isInvalid**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:48](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L48)

Check if the status code is invalid.

#### Returns

`boolean`

True if the status code is invalid, otherwise false.

***

### isNotError()

> **isNotError**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:103](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L103)

Check if the status code is not an error (i.e., not 4xx or 5xx).

#### Returns

`boolean`

True if the status code is not an error, otherwise false.

***

### isNotFound()

> **isNotFound**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:148](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L148)

Check if the status code is 404 (Not Found).

#### Returns

`boolean`

True if the status code is 404, otherwise false.

***

### isOk()

> **isOk**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:121](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L121)

Check if the status code is 200 (OK).

#### Returns

`boolean`

True if the status code is 200, otherwise false.

***

### isUnauthorized()

> **isUnauthorized**(): `boolean`

Defined in: [events/OutgoingBrowserResponse.ts:130](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L130)

Check if the status code is 401 (Unauthorized).

#### Returns

`boolean`

True if the status code is 401, otherwise false.

***

### create()

> `static` **create**(`options`): [`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

Defined in: [events/OutgoingBrowserResponse.ts:17](https://github.com/stonemjs/browser-core/blob/2c2c45da7146109ea5ae39ff81ac0b60630dfeee/src/events/OutgoingBrowserResponse.ts#L17)

Create an instance of OutgoingBrowserResponse.

#### Parameters

##### options

[`OutgoingBrowserResponseOptions`](../interfaces/OutgoingBrowserResponseOptions.md)

Options for the outgoing browser response.

#### Returns

[`OutgoingBrowserResponse`](OutgoingBrowserResponse.md)

A new instance of OutgoingBrowserResponse.

#### Overrides

`OutgoingResponse.create`
