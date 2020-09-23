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
* [try](dosync.md#static-try)

## Constructors

### `Private` constructor

\+ **new DoSync**(`workload`: [SyncWorkload](../README.md#syncworkload)‹TReturnVal›): *[DoSync](dosync.md)*

*Defined in [src/utilities/do-try.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`workload` | [SyncWorkload](../README.md#syncworkload)‹TReturnVal› |

**Returns:** *[DoSync](dosync.md)*

## Properties

### `Private` `Optional` catchHandler

• **catchHandler**? : *undefined | function*

*Defined in [src/utilities/do-try.ts:96](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L96)*

___

### `Private` `Optional` finallyHandler

• **finallyHandler**? : *[FinallyHandler](../README.md#finallyhandler)*

*Defined in [src/utilities/do-try.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L97)*

___

### `Private` `Readonly` workload

• **workload**: *[SyncWorkload](../README.md#syncworkload)‹TReturnVal›*

*Defined in [src/utilities/do-try.ts:95](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L95)*

## Methods

###  catch

▸ **catch**(`errorHandler`: [CatchHandler](../README.md#catchhandler)‹TResourceType›): *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:111](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L111)*

Add a catch handler to the DoSync call chain.
If errors are in the shape of a {ResultRecord},
you will get a typed {ResultRecord} as the first parameter.
Otherwise, if it's an unknown error or Javascript error,
you'll get an {any} as the second parameter.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`errorHandler` | [CatchHandler](../README.md#catchhandler)‹TResourceType› | handle errors, either as a {ResultRecord} or {any}  |

**Returns:** *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

___

###  execute

▸ **execute**(): *TReturnVal | undefined*

*Defined in [src/utilities/do-try.ts:131](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L131)*

Execute the entire DoSync call chain. For the synchronous version, i.e. DoSync,
you must manually call .execute() for the call chain to be executed.

**Returns:** *TReturnVal | undefined*

TReturnVal the value returned from the workload, or undefined if an error occurred.

___

###  finally

▸ **finally**(`finallyHandler`: [FinallyHandler](../README.md#finallyhandler)): *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:147](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L147)*

Run some handler when the function completes, whether the
catch() was hit or not.

**Parameters:**

Name | Type |
------ | ------ |
`finallyHandler` | [FinallyHandler](../README.md#finallyhandler) |

**Returns:** *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

this

___

### `Static` try

▸ **try**<**TResourceType**, **TReturnVal**>(`workload`: [SyncWorkload](../README.md#syncworkload)‹TReturnVal›): *[DoSync](dosync.md)‹TResourceType, TReturnVal›*

*Defined in [src/utilities/do-try.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2a85dc3/src/utilities/do-try.ts#L159)*

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
