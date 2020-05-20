[andculturecode-javascript-core](README.md)

# andculturecode-javascript-core

## Index

### Enumerations

* [ErrorType](enums/errortype.md)

### Classes

* [ResultErrorRecord](classes/resulterrorrecord.md)
* [ResultRecord](classes/resultrecord.md)

### Interfaces

* [PagedResult](interfaces/pagedresult.md)
* [Result](interfaces/result.md)
* [ResultError](interfaces/resulterror.md)

### Type aliases

* [CancellablePromise](README.md#cancellablepromise)

### Functions

* [_equalsBy](README.md#const-_equalsby)
* [_hasValues](README.md#const-_hasvalues)
* [_isEmpty](README.md#const-_isempty)
* [_isNotEmpty](README.md#const-_isnotempty)
* [_length](README.md#const-_length)
* [_numericEnumToPojo](README.md#const-_numericenumtopojo)
* [_objectToArray](README.md#const-_objecttoarray)
* [_replaceElementAt](README.md#const-_replaceelementat)
* [_sleep](README.md#const-_sleep)
* [_timer](README.md#const-_timer)
* [hasValue](README.md#const-hasvalue)
* [isEmpty](README.md#const-isempty)
* [isValidEmail](README.md#const-isvalidemail)
* [truncateRight](README.md#const-truncateright)

### Object literals

* [CollectionUtils](README.md#const-collectionutils)
* [CoreUtils](README.md#const-coreutils)
* [PromiseFactory](README.md#const-promisefactory)
* [StringUtils](README.md#const-stringutils)
* [defaultValues](README.md#const-defaultvalues)

## Type aliases

###  CancellablePromise

Ƭ **CancellablePromise**: *object*

Defined in src/utilities/promise-factory.ts:5

#### Type declaration:

* **cancel**(): *function*

  * (): *void*

* **promise**: *Promise‹T›*

## Functions

### `Const` _equalsBy

▸ **_equalsBy**<**T**, **V**>(`selector`: function, `array1`: Array‹T› | List‹any› | undefined, `array2`: Array‹T› | List‹any› | undefined): *boolean*

Defined in src/utilities/collection-utils.ts:18

Compare two collections by a property of each value,
specified by selector, not considering the order of
elements, as long as all elements of one exist in the
other.

**Type parameters:**

▪ **T**

▪ **V**

**Parameters:**

▪ **selector**: *function*

a function taking the item of the array and returning a property.

▸ (`element`: T): *V*

**Parameters:**

Name | Type |
------ | ------ |
`element` | T |

▪ **array1**: *Array‹T› | List‹any› | undefined*

first array to compare.

▪ **array2**: *Array‹T› | List‹any› | undefined*

second array to compare.

**Returns:** *boolean*

true if both arrays contain all the same elements of the other,
         not considering order, false otherwise.

___

### `Const` _hasValues

▸ **_hasValues**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

Defined in src/utilities/collection-utils.ts:57

Checks for values in a collection/object. Returns false if the collection is undefined, null,
or the respective object type's "empty" state, ie length 0, size 0, or has no keys.

Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
CollectionUtils.hasValues([]) or CollectionUtils.hasValues([], [], [])

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹any[] &#124; List‹any› &#124; undefined› |

**Returns:** *boolean*

False if `collections` is null/undefined, or every element is also null/undefined,
or has no sub-elements. True if any element has sub-elements.

___

### `Const` _isEmpty

▸ **_isEmpty**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

Defined in src/utilities/collection-utils.ts:84

Checks for values in a collection/object. Returns true if the collection is undefined, null,
or the respective object type's "empty" state, ie length 0, size 0, or has no keys.

Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
CollectionUtils.isEmpty([]) or CollectionUtils.isEmpty([], [], [])

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹any[] &#124; List‹any› &#124; undefined› |

**Returns:** *boolean*

True if `collections` is null/undefined, or every element is also null/undefined,
or has no sub-elements. False if any element has sub-elements.

___

### `Const` _isNotEmpty

▸ **_isNotEmpty**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

Defined in src/utilities/collection-utils.ts:124

Checks if there aren't any values in a collection/object. Returns false if the collection is undefined, null,
or the respective object type's "empty" state, ie length 0, size 0, or has no keys.

Uses ... syntax to allow a single collection or multiple collections to be passed in, ie
CollectionUtils.isNotEmpty([]) or CollectionUtils.isNotEmpty([], [], [])

**Parameters:**

Name | Type |
------ | ------ |
`...collections` | Array‹any[] &#124; List‹any› &#124; undefined› |

**Returns:** *boolean*

False if `collections` is null/undefined, or every element is also null/undefined,
or has no sub-elements. True if any element has sub-elements.

___

### `Const` _length

▸ **_length**(`arr`: Array‹any› | List‹any›): *number*

Defined in src/utilities/collection-utils.ts:136

Utility function to get the length of a collection
when the collection might be either a List or an Array

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arr` | Array‹any› &#124; List‹any› | the collection |

**Returns:** *number*

number the length of the collection

___

### `Const` _numericEnumToPojo

▸ **_numericEnumToPojo**(`enumObject`: any): *object*

Defined in src/utilities/core-utils.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`enumObject` | any |

**Returns:** *object*

___

### `Const` _objectToArray

▸ **_objectToArray**(`object`: any): *any[]*

Defined in src/utilities/core-utils.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

___

### `Const` _replaceElementAt

▸ **_replaceElementAt**<**T**>(`source`: Array‹T›, `index`: number, `value`: T): *Array‹T›*

Defined in src/utilities/collection-utils.ts:157

Returns a NEW array with the element at the specified index
replaced with the specified value. Since it returns a new array,
this can be safely used as the value for a React.SetStateAction
i.e. setMyArray(CollectionUtils.replaceElementAt(myArray, index, newValue));

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | Array‹T› | - |
`index` | number | - |
`value` | T |   |

**Returns:** *Array‹T›*

___

### `Const` _sleep

▸ **_sleep**(`milliseconds`: number, `debug`: boolean): *Promise‹unknown›*

Defined in src/utilities/core-utils.ts:39

Wrap timeout in a promise so tests can easily block execution for testing time

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`milliseconds` | number | - |   |
`debug` | boolean | false | - |

**Returns:** *Promise‹unknown›*

___

### `Const` _timer

▸ **_timer**(`name`: string): *object*

Defined in src/utilities/core-utils.ts:60

Creates a timer instance that when stopped will supply elapsed time in milliseconds.
Useful for benchmarking or providing counters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Useful name to identify the timer  |

**Returns:** *object*

* **stop**(`log?`: undefined | false | true): *number*

___

### `Const` hasValue

▸ **hasValue**(`value?`: undefined | string): *boolean*

*Defined in [src/utilities/string-utils.ts:12](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L12)*

Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
(after trimming both ends of the string)

**Parameters:**

Name | Type |
------ | ------ |
`value?` | undefined &#124; string |

**Returns:** *boolean*

___

### `Const` isEmpty

▸ **isEmpty**(`value?`: undefined | string): *boolean*

*Defined in [src/utilities/string-utils.ts:23](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L23)*

Determines whether or not the provided value is `undefined`, `null`, or an empty string
(after trimming both ends of the string)

**Parameters:**

Name | Type |
------ | ------ |
`value?` | undefined &#124; string |

**Returns:** *boolean*

___

### `Const` isValidEmail

▸ **isValidEmail**(`value?`: undefined | string): *boolean*

*Defined in [src/utilities/string-utils.ts:31](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L31)*

Validates a given string matches a valid email format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *boolean*

___

### `Const` truncateRight

▸ **truncateRight**(`value`: string, `truncateAtPos`: number): *string*

*Defined in [src/utilities/string-utils.ts:37](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`truncateAtPos` | number |

**Returns:** *string*

## Object literals

### `Const` CollectionUtils

### ▪ **CollectionUtils**: *object*

Defined in src/utilities/collection-utils.ts:182

###  equalsBy

• **equalsBy**: *[_equalsBy](README.md#const-_equalsby)* = _equalsBy

Defined in src/utilities/collection-utils.ts:183

###  hasValues

• **hasValues**: *[_hasValues](README.md#const-_hasvalues)* = _hasValues

Defined in src/utilities/collection-utils.ts:184

###  isEmpty

• **isEmpty**: *[_isEmpty](README.md#const-_isempty)* = _isEmpty

Defined in src/utilities/collection-utils.ts:185

###  isNotEmpty

• **isNotEmpty**: *[_isNotEmpty](README.md#const-_isnotempty)* = _isNotEmpty

Defined in src/utilities/collection-utils.ts:186

###  length

• **length**: *[_length](README.md#const-_length)* = _length

Defined in src/utilities/collection-utils.ts:187

###  replaceElementAt

• **replaceElementAt**: *[_replaceElementAt](README.md#const-_replaceelementat)* = _replaceElementAt

Defined in src/utilities/collection-utils.ts:188

___

### `Const` CoreUtils

### ▪ **CoreUtils**: *object*

Defined in src/utilities/core-utils.ts:86

###  numericEnumToPojo

• **numericEnumToPojo**: *[_numericEnumToPojo](README.md#const-_numericenumtopojo)* = _numericEnumToPojo

Defined in src/utilities/core-utils.ts:87

###  objectToArray

• **objectToArray**: *[_objectToArray](README.md#const-_objecttoarray)* = _objectToArray

Defined in src/utilities/core-utils.ts:88

###  sleep

• **sleep**: *[_sleep](README.md#const-_sleep)* = _sleep

Defined in src/utilities/core-utils.ts:89

###  timer

• **timer**: *[_timer](README.md#const-_timer)* = _timer

Defined in src/utilities/core-utils.ts:90

___

### `Const` PromiseFactory

### ▪ **PromiseFactory**: *object*

Defined in src/utilities/promise-factory.ts:16

###  cancellable

▸ **cancellable**<**T**>(`promise`: Promise‹T›): *[CancellablePromise](README.md#cancellablepromise)‹T›*

Defined in src/utilities/promise-factory.ts:17

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *[CancellablePromise](README.md#cancellablepromise)‹T›*

###  pending

▸ **pending**(): *Promise‹unknown›*

Defined in src/utilities/promise-factory.ts:41

Creates a new and empty/unfullfilled promise to cancel further
chained promise operations

**Returns:** *Promise‹unknown›*

___

### `Const` StringUtils

### ▪ **StringUtils**: *object*

*Defined in [src/utilities/string-utils.ts:55](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L55)*

###  hasValue

• **hasValue**: *[hasValue](README.md#const-hasvalue)*

*Defined in [src/utilities/string-utils.ts:56](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L56)*

###  isEmpty

• **isEmpty**: *[isEmpty](README.md#const-isempty)*

*Defined in [src/utilities/string-utils.ts:57](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L57)*

###  isValidEmail

• **isValidEmail**: *[isValidEmail](README.md#const-isvalidemail)*

*Defined in [src/utilities/string-utils.ts:58](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L58)*

###  truncateRight

• **truncateRight**: *[truncateRight](README.md#const-truncateright)*

*Defined in [src/utilities/string-utils.ts:59](https://github.com/wintondeshong/AndcultureCode.JavaScript.Core/blob/8ee629b/src/utilities/string-utils.ts#L59)*

___

### `Const` defaultValues

### ▪ **defaultValues**: *object*

Defined in src/view-models/result-error-record.ts:5

Defined in src/view-models/result-record.ts:7

###  errors

• **errors**: *undefined* = undefined

Defined in src/view-models/result-record.ts:8

###  key

• **key**: *undefined* = undefined

Defined in src/view-models/result-error-record.ts:6

###  message

• **message**: *undefined* = undefined

Defined in src/view-models/result-error-record.ts:7

###  resultObject

• **resultObject**: *undefined* = undefined

Defined in src/view-models/result-record.ts:9

###  type

• **type**: *[Error](enums/errortype.md#error)* = ErrorType.Error

Defined in src/view-models/result-error-record.ts:8
