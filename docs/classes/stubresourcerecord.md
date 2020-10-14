[andculturecode-javascript-core](../README.md) › [StubResourceRecord](stubresourcerecord.md)

# Class: StubResourceRecord <**TProps**>

## Type parameters

▪ **TProps**: *Object*

## Hierarchy

* [Record](resulterrorrecord.md#static-record)‹object, this› & object

  ↳ **StubResourceRecord**

## Implements

* [StubResource](../interfaces/stubresource.md)

## Index

### Namespaces

* [Factory](stubresourcerecord.md#factory)

### Methods

* [[Symbol.iterator]](stubresourcerecord.md#[symbol.iterator])
* [asImmutable](stubresourcerecord.md#asimmutable)
* [asMutable](stubresourcerecord.md#asmutable)
* [clear](stubresourcerecord.md#clear)
* [delete](stubresourcerecord.md#delete)
* [deleteIn](stubresourcerecord.md#deletein)
* [equals](stubresourcerecord.md#equals)
* [get](stubresourcerecord.md#get)
* [getIn](stubresourcerecord.md#getin)
* [has](stubresourcerecord.md#has)
* [hasIn](stubresourcerecord.md#hasin)
* [hashCode](stubresourcerecord.md#hashcode)
* [merge](stubresourcerecord.md#merge)
* [mergeDeep](stubresourcerecord.md#mergedeep)
* [mergeDeepIn](stubresourcerecord.md#mergedeepin)
* [mergeDeepWith](stubresourcerecord.md#mergedeepwith)
* [mergeIn](stubresourcerecord.md#mergein)
* [mergeWith](stubresourcerecord.md#mergewith)
* [remove](stubresourcerecord.md#remove)
* [removeIn](stubresourcerecord.md#removein)
* [set](stubresourcerecord.md#set)
* [setIn](stubresourcerecord.md#setin)
* [toJS](stubresourcerecord.md#tojs)
* [toJSON](stubresourcerecord.md#tojson)
* [toObject](stubresourcerecord.md#toobject)
* [toSeq](stubresourcerecord.md#toseq)
* [update](stubresourcerecord.md#update)
* [updateIn](stubresourcerecord.md#updatein)
* [wasAltered](stubresourcerecord.md#wasaltered)
* [withMutations](stubresourcerecord.md#withmutations)
* [Factory](stubresourcerecord.md#static-factory)
* [Record](stubresourcerecord.md#static-record)
* [getDescriptiveName](stubresourcerecord.md#static-getdescriptivename)
* [isRecord](stubresourcerecord.md#static-isrecord)

## Namespaces

###  Factory

▸ (`values?`: Partial‹TProps› | Iterable‹[string, any]›): *[Record](resulterrorrecord.md#static-record)‹TProps› & Readonly‹TProps›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2444

A Record.Factory is created by the `Record()` function. Record instances
are created by passing it some of the accepted values for that Record
type:

<!-- runkit:activate
     { "preamble": "const { Record } = require('immutable')" }
-->
```js
// makePerson is a Record Factory function
const makePerson = Record({ name: null, favoriteColor: 'unknown' });

// alan is a Record instance
const alan = makePerson({ name: 'Alan' });
```

Note that Record Factories return `Record<TProps> & Readonly<TProps>`,
this allows use of both the Record instance API, and direct property
access on the resulting instances:

<!-- runkit:activate
     { "preamble": "const { Record } = require('immutable');const makePerson = Record({ name: null, favoriteColor: 'unknown' });const alan = makePerson({ name: 'Alan' });" }
-->
```js
// Use the Record API
console.log('Record API: ' + alan.get('name'))

// Or direct property access (Readonly)
console.log('property access: ' + alan.name)
```

**Flow Typing Records:**

Use the `RecordFactory<TProps>` Flow type to get high quality type checking of
Records:

```js
import type { RecordFactory, RecordOf } from 'immutable';

// Use RecordFactory<TProps> for defining new Record factory functions.
type PersonProps = { name: ?string, favoriteColor: string };
const makePerson: RecordFactory<PersonProps> = Record({ name: null, favoriteColor: 'unknown' });

// Use RecordOf<T> for defining new instances of that Record.
type Person = RecordOf<PersonProps>;
const alan: Person = makePerson({ name: 'Alan' });
```

**Parameters:**

Name | Type |
------ | ------ |
`values?` | Partial‹TProps› &#124; Iterable‹[string, any]› |

**Returns:** *[Record](resulterrorrecord.md#static-record)‹TProps› & Readonly‹TProps›*

###  constructor

\+ **new Factory**(`values?`: Partial‹TProps› | Iterable‹[string, any]›): *[Record](resulterrorrecord.md#static-record)‹TProps› & Readonly‹TProps›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2445

**Parameters:**

Name | Type |
------ | ------ |
`values?` | Partial‹TProps› &#124; Iterable‹[string, any]› |

**Returns:** *[Record](resulterrorrecord.md#static-record)‹TProps› & Readonly‹TProps›*

###  displayName

• **displayName**: *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2452

The name provided to `Record(values, name)` can be accessed with
`displayName`.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[keyof TProps, TProps[keyof TProps]]›*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[[Symbol.iterator]](resulterrorrecord.md#[symbol.iterator])*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2589

**Returns:** *IterableIterator‹[keyof TProps, TProps[keyof TProps]]›*

___

###  asImmutable

▸ **asImmutable**(): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[asImmutable](resulterrorrecord.md#asimmutable)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2583

**`see`** `Map#asImmutable`

**Returns:** *this*

___

###  asMutable

▸ **asMutable**(): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[asMutable](resulterrorrecord.md#asmutable)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2573

**`see`** `Map#asMutable`

**Returns:** *this*

___

###  clear

▸ **clear**(): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[clear](resulterrorrecord.md#clear)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2525

Returns a new instance of this Record type with all values set
to their default values.

**Returns:** *this*

___

###  delete

▸ **delete**<**K**>(`key`: K): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[delete](resulterrorrecord.md#delete)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2518

Returns a new instance of this Record type with the value for the
specific key set to its default value.

**`alias`** remove

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *this*

___

###  deleteIn

▸ **deleteIn**(`keyPath`: Iterable‹any›): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[deleteIn](resulterrorrecord.md#deletein)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2537

**`alias`** removeIn

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹any› |

**Returns:** *this*

___

###  equals

▸ **equals**(`other`: any): *boolean*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[equals](resulterrorrecord.md#equals)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2493

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

###  get

▸ **get**<**K**>(`key`: K, `notSetValue?`: any): *TProps[K]*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[get](resulterrorrecord.md#get)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2483

Returns the value associated with the provided key, which may be the
default value defined when creating the Record factory function.

If the requested key is not defined by this Record type, then
notSetValue will be returned if provided. Note that this scenario would
produce an error when using Flow or TypeScript.

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`notSetValue?` | any |

**Returns:** *TProps[K]*

▸ **get**<**T**>(`key`: string, `notSetValue`: T): *T*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[get](resulterrorrecord.md#get)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2484

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`notSetValue` | T |

**Returns:** *T*

___

###  getIn

▸ **getIn**(`keyPath`: Iterable‹any›): *any*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[getIn](resulterrorrecord.md#getin)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2489

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹any› |

**Returns:** *any*

___

###  has

▸ **has**(`key`: string): *key is keyof TProps & string*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[has](resulterrorrecord.md#has)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2473

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *key is keyof TProps & string*

___

###  hasIn

▸ **hasIn**(`keyPath`: Iterable‹any›): *boolean*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[hasIn](resulterrorrecord.md#hasin)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2488

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹any› |

**Returns:** *boolean*

___

###  hashCode

▸ **hashCode**(): *number*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[hashCode](resulterrorrecord.md#hashcode)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2494

**Returns:** *number*

___

###  merge

▸ **merge**(...`collections`: Array‹Partial‹TProps› | Iterable‹[string, any]››): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[merge](resulterrorrecord.md#merge)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2500

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹Partial‹TProps› &#124; Iterable‹[string, any]›› |

**Returns:** *this*

___

###  mergeDeep

▸ **mergeDeep**(...`collections`: Array‹Partial‹TProps› | Iterable‹[string, any]››): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[mergeDeep](resulterrorrecord.md#mergedeep)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2501

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹Partial‹TProps› &#124; Iterable‹[string, any]›› |

**Returns:** *this*

___

###  mergeDeepIn

▸ **mergeDeepIn**(`keyPath`: Iterable‹any›, ...`collections`: Array‹any›): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[mergeDeepIn](resulterrorrecord.md#mergedeepin)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2532

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹any› |
`...collections` | Array‹any› |

**Returns:** *this*

___

###  mergeDeepWith

▸ **mergeDeepWith**(`merger`: function, ...`collections`: Array‹Partial‹TProps› | Iterable‹[string, any]››): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[mergeDeepWith](resulterrorrecord.md#mergedeepwith)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2507

**Parameters:**

▪ **merger**: *function*

▸ (`oldVal`: any, `newVal`: any, `key`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`oldVal` | any |
`newVal` | any |
`key` | any |

▪... **collections**: *Array‹Partial‹TProps› | Iterable‹[string, any]››*

**Returns:** *this*

___

###  mergeIn

▸ **mergeIn**(`keyPath`: Iterable‹any›, ...`collections`: Array‹any›): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[mergeIn](resulterrorrecord.md#mergein)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2531

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹any› |
`...collections` | Array‹any› |

**Returns:** *this*

___

###  mergeWith

▸ **mergeWith**(`merger`: function, ...`collections`: Array‹Partial‹TProps› | Iterable‹[string, any]››): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[mergeWith](resulterrorrecord.md#mergewith)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2503

**Parameters:**

▪ **merger**: *function*

▸ (`oldVal`: any, `newVal`: any, `key`: keyof TProps): *any*

**Parameters:**

Name | Type |
------ | ------ |
`oldVal` | any |
`newVal` | any |
`key` | keyof TProps |

▪... **collections**: *Array‹Partial‹TProps› | Iterable‹[string, any]››*

**Returns:** *this*

___

###  remove

▸ **remove**<**K**>(`key`: K): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[remove](resulterrorrecord.md#remove)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2519

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *this*

___

###  removeIn

▸ **removeIn**(`keyPath`: Iterable‹any›): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[removeIn](resulterrorrecord.md#removein)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2538

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹any› |

**Returns:** *this*

___

###  set

▸ **set**<**K**>(`key`: K, `value`: TProps[K]): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[set](resulterrorrecord.md#set)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2498

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | TProps[K] |

**Returns:** *this*

___

###  setIn

▸ **setIn**(`keyPath`: Iterable‹any›, `value`: any): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[setIn](resulterrorrecord.md#setin)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2529

**Parameters:**

Name | Type |
------ | ------ |
`keyPath` | Iterable‹any› |
`value` | any |

**Returns:** *this*

___

###  toJS

▸ **toJS**(): *object*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[toJS](resulterrorrecord.md#tojs)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2548

Deeply converts this Record to equivalent native JavaScript Object.

Note: This method may not be overridden. Objects with custom
serialization to plain JS may override toJSON() instead.

**Returns:** *object*

___

###  toJSON

▸ **toJSON**(): *TProps*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[toJSON](resulterrorrecord.md#tojson)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2553

Shallowly converts this Record to equivalent native JavaScript Object.

**Returns:** *TProps*

___

###  toObject

▸ **toObject**(): *TProps*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[toObject](resulterrorrecord.md#toobject)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2558

Shallowly converts this Record to equivalent JavaScript Object.

**Returns:** *TProps*

___

###  toSeq

▸ **toSeq**(): *Keyed‹keyof TProps, TProps[keyof TProps]›*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[toSeq](resulterrorrecord.md#toseq)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2587

**Returns:** *Keyed‹keyof TProps, TProps[keyof TProps]›*

___

###  update

▸ **update**<**K**>(`key`: K, `updater`: function): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[update](resulterrorrecord.md#update)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2499

**Type parameters:**

▪ **K**: *keyof TProps*

**Parameters:**

▪ **key**: *K*

▪ **updater**: *function*

▸ (`value`: TProps[K]): *TProps[K]*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TProps[K] |

**Returns:** *this*

___

###  updateIn

▸ **updateIn**(`keyPath`: Iterable‹any›, `updater`: function): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[updateIn](resulterrorrecord.md#updatein)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2530

**Parameters:**

▪ **keyPath**: *Iterable‹any›*

▪ **updater**: *function*

▸ (`value`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *this*

___

###  wasAltered

▸ **wasAltered**(): *boolean*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[wasAltered](resulterrorrecord.md#wasaltered)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2578

**`see`** `Map#wasAltered`

**Returns:** *boolean*

___

###  withMutations

▸ **withMutations**(`mutator`: function): *this*

*Inherited from [ResultErrorRecord](resulterrorrecord.md).[withMutations](resulterrorrecord.md#withmutations)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2568

Note: Not all methods can be used on a mutable collection or within
`withMutations`! Only `set` may be used mutatively.

**`see`** `Map#withMutations`

**Parameters:**

▪ **mutator**: *function*

▸ (`mutable`: this): *any*

**Parameters:**

Name | Type |
------ | ------ |
`mutable` | this |

**Returns:** *this*

___

### `Static` Factory

▸ **Factory**<**TProps**>(`values?`: Partial‹TProps› | Iterable‹[string, any]›): *[Record](resulterrorrecord.md#static-record)‹TProps› & Readonly‹TProps›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2455

**Type parameters:**

▪ **TProps**: *Object*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | Partial‹TProps› &#124; Iterable‹[string, any]› |

**Returns:** *[Record](resulterrorrecord.md#static-record)‹TProps› & Readonly‹TProps›*

___

### `Static` Record

▸ **Record**<**TProps**>(`defaultValues`: TProps, `name?`: undefined | string): *[Factory](resulterrorrecord.md#factory)‹TProps›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2467

Unlike other types in Immutable.js, the `Record()` function creates a new
Record Factory, which is a function that creates Record instances.

See above for examples of using `Record()`.

Note: `Record` is a factory function and not a class, and does not use the
`new` keyword during construction.

**Type parameters:**

▪ **TProps**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValues` | TProps |
`name?` | undefined &#124; string |

**Returns:** *[Factory](resulterrorrecord.md#factory)‹TProps›*

___

### `Static` getDescriptiveName

▸ **getDescriptiveName**(`record`: [Record](resulterrorrecord.md#static-record)‹any›): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2392

Records allow passing a second parameter to supply a descriptive name
that appears when converting a Record to a string or in any error
messages. A descriptive name for any record can be accessed by using this
method. If one was not provided, the string "Record" is returned.

```js
const { Record } = require('immutable')
const Person = Record({
  name: null
}, 'Person')

var me = Person({ name: 'My Name' })
me.toString() // "Person { "name": "My Name" }"
Record.getDescriptiveName(me) // "Person"
```

**Parameters:**

Name | Type |
------ | ------ |
`record` | [Record](resulterrorrecord.md#static-record)‹any› |

**Returns:** *string*

___

### `Static` isRecord

▸ **isRecord**(`maybeRecord`: any): *maybeRecord is Record<any>*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/node_modules/immutable/dist/immutable-nonambient.d.ts:2373

True if `maybeRecord` is an instance of a Record.

**Parameters:**

Name | Type |
------ | ------ |
`maybeRecord` | any |

**Returns:** *maybeRecord is Record<any>*
