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

* [promise](do.md#private-readonly-promise)

### Methods

* [catch](do.md#catch)
* [finally](do.md#finally)
* [getAwaiter](do.md#getawaiter)
* [try](do.md#static-try)

## Constructors

### `Private` constructor

\+ **new Do**(`workload`: [AsyncWorkload](../README.md#asyncworkload)‹TReturnVal›): *[Do](do.md)*

*Defined in [src/utilities/do-try.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`workload` | [AsyncWorkload](../README.md#asyncworkload)‹TReturnVal› |

**Returns:** *[Do](do.md)*

## Properties

### `Private` `Readonly` promise

• **promise**: *Promise‹TReturnVal›*

*Defined in [src/utilities/do-try.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L20)*

## Methods

###  catch

▸ **catch**(`errorHandler`: [CatchHandler](../README.md#catchhandler)‹TResourceType›): *[Do](do.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L35)*

Handle errors from the workload.
If errors are in the shape of a {ResultRecord},
you will get a typed {ResultRecord} as the first parameter.
Otherwise, if it's an unknown error or Javascript error,
you'll get an {any} as the second parameter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorHandler` | [CatchHandler](../README.md#catchhandler)‹TResourceType› | handle errors, either as a {ResultRecord} or {any} |

**Returns:** *[Do](do.md)‹TResourceType, TReturnVal›*

this

___

###  finally

▸ **finally**(`finallyHandler`: [FinallyHandler](../README.md#finallyhandler)): *[Do](do.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:56](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L56)*

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

*Defined in [src/utilities/do-try.ts:70](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L70)*

Awaits the internal promise being tracked by the Do instance,
and returns the result. This way, you can await a Do.try
chain, if you need to await for the result inside of another scope,
such as tests.

**Returns:** *Promise‹TReturnVal›*

the result of the promise.

___

### `Static` try

▸ **try**<**TResourceType**, **TReturnVal**>(`workload`: [AsyncWorkload](../README.md#asyncworkload)‹TReturnVal›): *[Do](do.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:81](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L81)*

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
