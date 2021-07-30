[andculturecode-javascript-core](../README.md) › [Do](do.md)

# Class: Do <**TResourceType, TReturnVal**>

Utility class to be able to use strong typing in a catch handler.
the Do.catch method takes a callback where the parameters are:
- result?: Result<TResourceType> -- if it's an error from the server, will not be null
- error?: any -- if it's a Javascript error, will not be null

## Type parameters

▪ **TResourceType**

▪ **TReturnVal**

## Hierarchy

* **Do**

## Index

### Constructors

* [constructor](do.md#private-constructor)

### Properties

* [promise](do.md#private-promise)

### Methods

* [catch](do.md#catch)
* [finally](do.md#finally)
* [getAwaiter](do.md#getawaiter)
* [configure](do.md#static-configure)
* [try](do.md#static-try)

### Object literals

* [config](do.md#static-private-config)

## Constructors

### `Private` constructor

\+ **new Do**(`workload`: [AsyncWorkload](../README.md#asyncworkload)‹TReturnVal›): *[Do](do.md)*

*Defined in [src/utilities/do-try.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`workload` | [AsyncWorkload](../README.md#asyncworkload)‹TReturnVal› |

**Returns:** *[Do](do.md)*

## Properties

### `Private` promise

• **promise**: *Promise‹TReturnVal›*

*Defined in [src/utilities/do-try.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L19)*

## Methods

###  catch

▸ **catch**(`errorHandler`: [CatchResultHandler](../README.md#catchresulthandler)‹TResourceType›): *[Do](do.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L46)*

Handle errors from the workload.
If errors are in the shape of a {ResultRecord},
you will get a typed {ResultRecord} as the first parameter.
Otherwise, if it's an unknown error or Javascript error,
you'll get an {any} as the second parameter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorHandler` | [CatchResultHandler](../README.md#catchresulthandler)‹TResourceType› | handle errors, either as a {ResultRecord} or {any} |

**Returns:** *[Do](do.md)‹TResourceType, TReturnVal›*

this

___

###  finally

▸ **finally**(`finallyHandler`: [FinallyHandler](../README.md#finallyhandler)): *[Do](do.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:75](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L75)*

Run some handler when the function completes, whether the
catch() was hit or not.

**Parameters:**

Name | Type |
------ | ------ |
`finallyHandler` | [FinallyHandler](../README.md#finallyhandler) |

**Returns:** *[Do](do.md)‹TResourceType, TReturnVal›*

this

___

###  getAwaiter

▸ **getAwaiter**(): *Promise‹TReturnVal›*

*Defined in [src/utilities/do-try.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L89)*

Awaits the internal promise being tracked by the Do instance,
and returns the result. This way, you can await a Do.try
chain, if you need to await for the result inside of another scope,
such as tests.

**Returns:** *Promise‹TReturnVal›*

the result of the promise.

___

### `Static` configure

▸ **configure**(`config`: [DoTryConfig](../interfaces/dotryconfig.md)): *void*

*Defined in [src/utilities/do-try.ts:65](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L65)*

Sets the global configuration object for class {Do}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | [DoTryConfig](../interfaces/dotryconfig.md) | the {DoTryConfig} object to set  |

**Returns:** *void*

___

### `Static` try

▸ **try**<**TResourceType**, **TReturnVal**>(`workload`: [AsyncWorkload](../README.md#asyncworkload)‹TReturnVal›): *[Do](do.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:100](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L100)*

Static factory method for Do class.
Start a workload (sync or async) that you can then
call .catch(catchHandler).finally(finallyHandler) on.

**Type parameters:**

▪ **TResourceType**

▪ **TReturnVal**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`workload` | [AsyncWorkload](../README.md#asyncworkload)‹TReturnVal› | a sync or async method to wrap |

**Returns:** *[Do](do.md)‹TResourceType, TReturnVal›*

a new instance of Do

## Object literals

### `Static` `Private` config

### ▪ **config**: *object*

*Defined in [src/utilities/do-try.ts:21](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L21)*

###  defaultErrorHandler

• **defaultErrorHandler**: *undefined* = undefined

*Defined in [src/utilities/do-try.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L22)*
