[andculturecode-javascript-core](../README.md) › [DoSync](dosync.md)

# Class: DoSync <**TResourceType, TReturnVal**>

## Type parameters

▪ **TResourceType**

▪ **TReturnVal**

## Hierarchy

* **DoSync**

## Index

### Constructors

* [constructor](dosync.md#private-constructor)

### Properties

* [catchHandler](dosync.md#private-optional-catchhandler)
* [finallyHandler](dosync.md#private-optional-finallyhandler)
* [workload](dosync.md#private-readonly-workload)

### Methods

* [catch](dosync.md#catch)
* [execute](dosync.md#execute)
* [finally](dosync.md#finally)
* [configure](dosync.md#static-configure)
* [try](dosync.md#static-try)

### Object literals

* [config](dosync.md#static-private-config)

## Constructors

### `Private` constructor

\+ **new DoSync**(`workload`: [SyncWorkload](../README.md#syncworkload)‹TReturnVal›): *[DoSync](dosync.md)*

*Defined in [src/utilities/do-try.ts:120](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`workload` | [SyncWorkload](../README.md#syncworkload)‹TReturnVal› |

**Returns:** *[DoSync](dosync.md)*

## Properties

### `Private` `Optional` catchHandler

• **catchHandler**? : *undefined | function*

*Defined in [src/utilities/do-try.ts:115](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L115)*

___

### `Private` `Optional` finallyHandler

• **finallyHandler**? : *[FinallyHandler](../README.md#finallyhandler)*

*Defined in [src/utilities/do-try.ts:116](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L116)*

___

### `Private` `Readonly` workload

• **workload**: *[SyncWorkload](../README.md#syncworkload)‹TReturnVal›*

*Defined in [src/utilities/do-try.ts:114](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L114)*

## Methods

###  catch

▸ **catch**(`errorHandler`: [CatchResultHandler](../README.md#catchresulthandler)‹TResourceType›): *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:134](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L134)*

Add a catch handler to the DoSync call chain.
If errors are in the shape of a {ResultRecord},
you will get a typed {ResultRecord} as the first parameter.
Otherwise, if it's an unknown error or Javascript error,
you'll get an {any} as the second parameter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorHandler` | [CatchResultHandler](../README.md#catchresulthandler)‹TResourceType› | handle errors, either as a {ResultRecord} or {any}  |

**Returns:** *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

___

###  execute

▸ **execute**(): *TReturnVal | undefined*

*Defined in [src/utilities/do-try.ts:162](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L162)*

Execute the entire DoSync call chain. For the synchronous version, i.e. DoSync,
you must manually call .execute() for the call chain to be executed.

**Returns:** *TReturnVal | undefined*

TReturnVal the value returned from the workload, or undefined if an error occurred.

___

###  finally

▸ **finally**(`finallyHandler`: [FinallyHandler](../README.md#finallyhandler)): *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:185](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L185)*

Run some handler when the function completes, whether the
catch() was hit or not.

**Parameters:**

Name | Type |
------ | ------ |
`finallyHandler` | [FinallyHandler](../README.md#finallyhandler) |

**Returns:** *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

this

___

### `Static` configure

▸ **configure**(`config`: [DoTryConfig](../interfaces/dotryconfig.md)): *void*

*Defined in [src/utilities/do-try.ts:153](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L153)*

Sets the global configuration for class {DySync}.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | [DoTryConfig](../interfaces/dotryconfig.md) | the {DoTryConfig} object to set  |

**Returns:** *void*

___

### `Static` try

▸ **try**<**TResourceType**, **TReturnVal**>(`workload`: [SyncWorkload](../README.md#syncworkload)‹TReturnVal›): *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:197](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L197)*

Static factory method for DoSync. Creates a new DoSync
with the given workload.

**Type parameters:**

▪ **TResourceType**

▪ **TReturnVal**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`workload` | [SyncWorkload](../README.md#syncworkload)‹TReturnVal› |   |

**Returns:** *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

## Object literals

### `Static` `Private` config

### ▪ **config**: *object*

*Defined in [src/utilities/do-try.ts:118](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L118)*

###  defaultErrorHandler

• **defaultErrorHandler**: *undefined* = undefined

*Defined in [src/utilities/do-try.ts:119](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/do-try.ts#L119)*
