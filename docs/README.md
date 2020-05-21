[andculturecode-javascript-core](README.md)

# andculturecode-javascript-core

## Index

### Enumerations

* [ContentType](enums/contenttype.md)
* [ErrorType](enums/errortype.md)
* [HttpHeader](enums/httpheader.md)
* [HttpVerb](enums/httpverb.md)

### Classes

* [ResultErrorRecord](classes/resulterrorrecord.md)
* [ResultRecord](classes/resultrecord.md)
* [StubResourceRecord](classes/stubresourcerecord.md)

### Interfaces

* [MockAxios](interfaces/mockaxios.md)
* [PagedResult](interfaces/pagedresult.md)
* [Result](interfaces/result.md)
* [ResultError](interfaces/resulterror.md)
* [ServiceResponse](interfaces/serviceresponse.md)
* [StubResource](interfaces/stubresource.md)

### Type aliases

* [AxiosJestMock](README.md#axiosjestmock)
* [CancellablePromise](README.md#cancellablepromise)

### Variables

* [AxiosResponseFactory](README.md#const-axiosresponsefactory)
* [StubResourceRecordFactory](README.md#const-stubresourcerecordfactory)
* [_routeParamRegEx](README.md#const-_routeparamregex)

### Functions

* [_equalsBy](README.md#const-_equalsby)
* [_hasValues](README.md#const-_hasvalues)
* [_isEmpty](README.md#const-_isempty)
* [_isNotEmpty](README.md#const-_isnotempty)
* [_length](README.md#const-_length)
* [_mapAxiosResponse](README.md#const-_mapaxiosresponse)
* [_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)
* [_mockSuccess](README.md#const-_mocksuccess)
* [_numericEnumToPojo](README.md#const-_numericenumtopojo)
* [_objectToArray](README.md#const-_objecttoarray)
* [_replaceElementAt](README.md#const-_replaceelementat)
* [_resultObjectToJS](README.md#const-_resultobjecttojs)
* [_sleep](README.md#const-_sleep)
* [_timer](README.md#const-_timer)
* [appendQueryParams](README.md#const-appendqueryparams)
* [deleteSuccess](README.md#const-deletesuccess)
* [getSuccess](README.md#const-getsuccess)
* [getUrl](README.md#const-geturl)
* [getUrlFromPath](README.md#const-geturlfrompath)
* [hasValue](README.md#const-hasvalue)
* [isEmpty](README.md#const-isempty)
* [isValidEmail](README.md#const-isvalidemail)
* [listSuccess](README.md#const-listsuccess)
* [postSuccess](README.md#const-postsuccess)
* [putSuccess](README.md#const-putsuccess)
* [replacePathParams](README.md#const-replacepathparams)
* [truncateRight](README.md#const-truncateright)

### Object literals

* [CollectionUtils](README.md#const-collectionutils)
* [CoreUtils](README.md#const-coreutils)
* [FactoryType](README.md#const-factorytype)
* [PromiseFactory](README.md#const-promisefactory)
* [RouteUtils](README.md#const-routeutils)
* [ServiceUtils](README.md#const-serviceutils)
* [StringUtils](README.md#const-stringutils)
* [defaultValues](README.md#const-defaultvalues)
* [mockAxios](README.md#const-mockaxios)

## Type aliases

###  AxiosJestMock

Ƭ **AxiosJestMock**: *Mock‹Promise‹object›, []›*

*Defined in [src/tests/mocks/mock-axios.ts:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L13)*

MockAxios is merely a typed wrapper around the dynamically
mocked __mocks__/axios implementation.

___

###  CancellablePromise

Ƭ **CancellablePromise**: *object*

*Defined in [src/utilities/promise-factory.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/promise-factory.ts#L5)*

#### Type declaration:

* **cancel**(): *function*

  * (): *void*

* **promise**: *Promise‹T›*

## Variables

### `Const` AxiosResponseFactory

• **AxiosResponseFactory**: *IFactory‹AxiosResponse‹any››* = Factory.define<AxiosResponse>(
    FactoryType.AxiosResponse
)
    .sequence("status", () => 200)
    .sequence("statusText", () => "OK")

*Defined in [src/tests/factories/axios-response-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/factories/axios-response-factory.ts#L9)*

___

### `Const` StubResourceRecordFactory

• **StubResourceRecordFactory**: *IFactory‹[StubResourceRecord](classes/stubresourcerecord.md)‹››* = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`)

*Defined in [src/tests/factories/stub-resource-record-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/factories/stub-resource-record-factory.ts#L9)*

___

### `Const` _routeParamRegEx

• **_routeParamRegEx**: *RegExp‹›* = /(:[a-z_-]*)/gi

*Defined in [src/utilities/route-utils.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L5)*

## Functions

### `Const` _equalsBy

▸ **_equalsBy**<**T**, **V**>(`selector`: function, `array1`: Array‹T› | List‹any› | undefined, `array2`: Array‹T› | List‹any› | undefined): *boolean*

*Defined in [src/utilities/collection-utils.ts:18](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L18)*

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

*Defined in [src/utilities/collection-utils.ts:57](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L57)*

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

*Defined in [src/utilities/collection-utils.ts:84](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L84)*

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

*Defined in [src/utilities/collection-utils.ts:124](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L124)*

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

*Defined in [src/utilities/collection-utils.ts:136](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L136)*

Utility function to get the length of a collection
when the collection might be either a List or an Array

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arr` | Array‹any› &#124; List‹any› | the collection |

**Returns:** *number*

number the length of the collection

___

### `Const` _mapAxiosResponse

▸ **_mapAxiosResponse**<**TRecord**>(`recordType`: object, `axiosResponse`: AxiosResponse‹[Result](interfaces/result.md)‹TRecord››): *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

*Defined in [src/utilities/service-utils.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/service-utils.ts#L15)*

Translates axios specific data response to a more generic ServiceResponse
type for consumption throughout the system

**Type parameters:**

▪ **TRecord**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **axiosResponse**: *AxiosResponse‹[Result](interfaces/result.md)‹TRecord››*

**Returns:** *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

___

### `Const` _mapPagedAxiosResponse

▸ **_mapPagedAxiosResponse**<**TRecord**>(`recordType`: object, `axiosResponse`: AxiosResponse‹[PagedResult](interfaces/pagedresult.md)‹TRecord››): *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

*Defined in [src/utilities/service-utils.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/service-utils.ts#L42)*

Translates axios specific data responses to a more generic ServiceResponse
type for consumption throughout the system

**Type parameters:**

▪ **TRecord**

**Parameters:**

▪ **recordType**: *object*

Name | Type |
------ | ------ |
`constructor` |  |

▪ **axiosResponse**: *AxiosResponse‹[PagedResult](interfaces/pagedresult.md)‹TRecord››*

**Returns:** *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

___

### `Const` _mockSuccess

▸ **_mockSuccess**(`method`: [AxiosJestMock](README.md#axiosjestmock), `resultObject`: any | any[], `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [AxiosJestMock](README.md#axiosjestmock) |
`resultObject` | any &#124; any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` _numericEnumToPojo

▸ **_numericEnumToPojo**(`enumObject`: any): *object*

*Defined in [src/utilities/core-utils.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`enumObject` | any |

**Returns:** *object*

___

### `Const` _objectToArray

▸ **_objectToArray**(`object`: any): *any[]*

*Defined in [src/utilities/core-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

___

### `Const` _replaceElementAt

▸ **_replaceElementAt**<**T**>(`source`: Array‹T›, `index`: number, `value`: T): *Array‹T›*

*Defined in [src/utilities/collection-utils.ts:157](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L157)*

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

### `Const` _resultObjectToJS

▸ **_resultObjectToJS**(`resultObject`: any | any[]): *any | any[]*

*Defined in [src/tests/mocks/mock-axios.ts:112](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`resultObject` | any &#124; any[] |

**Returns:** *any | any[]*

___

### `Const` _sleep

▸ **_sleep**(`milliseconds`: number, `debug`: boolean): *Promise‹unknown›*

*Defined in [src/utilities/core-utils.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L39)*

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

*Defined in [src/utilities/core-utils.ts:60](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L60)*

Creates a timer instance that when stopped will supply elapsed time in milliseconds.
Useful for benchmarking or providing counters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Useful name to identify the timer  |

**Returns:** *object*

* **stop**(`log?`: undefined | false | true): *number*

___

### `Const` appendQueryParams

▸ **appendQueryParams**(`path`: string, `queryParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:18](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L18)*

Appends the supplied query params object as a query string to path. Even if path is null.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Existing path (can be null) |
`queryParams` | any | Object to transform into query string  |

**Returns:** *string*

___

### `Const` deleteSuccess

▸ **deleteSuccess**(`record?`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:66](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` getSuccess

▸ **getSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:69](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` getUrl

▸ **getUrl**(`path`: string, `pathParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L42)*

Convenience method to get a Url from a RouteDefinition

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Route path template. Parameters in the path are denoted withed a colon `:id` |
`pathParams?` | any | Object with keys matching supplied path template components  |

**Returns:** *string*

___

### `Const` getUrlFromPath

▸ **getUrlFromPath**(`path`: string, `pathParams?`: any, `queryParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:52](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L52)*

Constructs a url from a formatted route path.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Route path template. Parameters in the path are denoted withed a colon `:id` |
`pathParams?` | any | Object with keys matching supplied path template components |
`queryParams?` | any | Object to get translated to the query string of the url  |

**Returns:** *string*

___

### `Const` hasValue

▸ **hasValue**(`value?`: undefined | string): *boolean*

*Defined in [src/utilities/string-utils.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L12)*

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

*Defined in [src/utilities/string-utils.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L23)*

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

*Defined in [src/utilities/string-utils.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L31)*

Validates a given string matches a valid email format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *boolean*

___

### `Const` listSuccess

▸ **listSuccess**(`records`: any[], `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`records` | any[] |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` postSuccess

▸ **postSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:75](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` putSuccess

▸ **putSuccess**(`record`: any, `delay?`: undefined | number): *void*

*Defined in [src/tests/mocks/mock-axios.ts:78](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

**Returns:** *void*

___

### `Const` replacePathParams

▸ **replacePathParams**(`path`: string, `pathParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:75](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L75)*

Replace routing components in supplied path with keys and values
of supplied pathParams.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Path containing routing components (format: ':key'). Throws an error if any components aren't found in the pathParams object. |
`pathParams` | any | Object to transform into the supplied path.  |

**Returns:** *string*

___

### `Const` truncateRight

▸ **truncateRight**(`value`: string, `truncateAtPos`: number): *string*

*Defined in [src/utilities/string-utils.ts:37](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`truncateAtPos` | number |

**Returns:** *string*

## Object literals

### `Const` CollectionUtils

### ▪ **CollectionUtils**: *object*

*Defined in [src/utilities/collection-utils.ts:182](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L182)*

###  equalsBy

• **equalsBy**: *[_equalsBy](README.md#const-_equalsby)* = _equalsBy

*Defined in [src/utilities/collection-utils.ts:183](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L183)*

###  hasValues

• **hasValues**: *[_hasValues](README.md#const-_hasvalues)* = _hasValues

*Defined in [src/utilities/collection-utils.ts:184](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L184)*

###  isEmpty

• **isEmpty**: *[_isEmpty](README.md#const-_isempty)* = _isEmpty

*Defined in [src/utilities/collection-utils.ts:185](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L185)*

###  isNotEmpty

• **isNotEmpty**: *[_isNotEmpty](README.md#const-_isnotempty)* = _isNotEmpty

*Defined in [src/utilities/collection-utils.ts:186](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L186)*

###  length

• **length**: *[_length](README.md#const-_length)* = _length

*Defined in [src/utilities/collection-utils.ts:187](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L187)*

###  replaceElementAt

• **replaceElementAt**: *[_replaceElementAt](README.md#const-_replaceelementat)* = _replaceElementAt

*Defined in [src/utilities/collection-utils.ts:188](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/collection-utils.ts#L188)*

___

### `Const` CoreUtils

### ▪ **CoreUtils**: *object*

*Defined in [src/utilities/core-utils.ts:86](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L86)*

###  numericEnumToPojo

• **numericEnumToPojo**: *[_numericEnumToPojo](README.md#const-_numericenumtopojo)* = _numericEnumToPojo

*Defined in [src/utilities/core-utils.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L87)*

###  objectToArray

• **objectToArray**: *[_objectToArray](README.md#const-_objecttoarray)* = _objectToArray

*Defined in [src/utilities/core-utils.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L88)*

###  sleep

• **sleep**: *[_sleep](README.md#const-_sleep)* = _sleep

*Defined in [src/utilities/core-utils.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L89)*

###  timer

• **timer**: *[_timer](README.md#const-_timer)* = _timer

*Defined in [src/utilities/core-utils.ts:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/core-utils.ts#L90)*

___

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/tests/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/factories/factory-type.ts#L1)*

###  AxiosResponse

• **AxiosResponse**: *string* = "AxiosResponse"

*Defined in [src/tests/factories/factory-type.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/factories/factory-type.ts#L2)*

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

*Defined in [src/tests/factories/factory-type.ts:3](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/factories/factory-type.ts#L3)*

___

### `Const` PromiseFactory

### ▪ **PromiseFactory**: *object*

*Defined in [src/utilities/promise-factory.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/promise-factory.ts#L16)*

###  cancellable

▸ **cancellable**<**T**>(`promise`: Promise‹T›): *[CancellablePromise](README.md#cancellablepromise)‹T›*

*Defined in [src/utilities/promise-factory.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/promise-factory.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *[CancellablePromise](README.md#cancellablepromise)‹T›*

###  pending

▸ **pending**(): *Promise‹unknown›*

*Defined in [src/utilities/promise-factory.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/promise-factory.ts#L41)*

Creates a new and empty/unfullfilled promise to cancel further
chained promise operations

**Returns:** *Promise‹unknown›*

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

*Defined in [src/utilities/route-utils.ts:101](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L101)*

###  appendQueryParams

• **appendQueryParams**: *[appendQueryParams](README.md#const-appendqueryparams)*

*Defined in [src/utilities/route-utils.ts:102](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L102)*

###  getUrl

• **getUrl**: *[getUrl](README.md#const-geturl)*

*Defined in [src/utilities/route-utils.ts:103](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L103)*

###  getUrlFromPath

• **getUrlFromPath**: *[getUrlFromPath](README.md#const-geturlfrompath)*

*Defined in [src/utilities/route-utils.ts:104](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L104)*

###  replacePathParams

• **replacePathParams**: *[replacePathParams](README.md#const-replacepathparams)*

*Defined in [src/utilities/route-utils.ts:105](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/route-utils.ts#L105)*

___

### `Const` ServiceUtils

### ▪ **ServiceUtils**: *object*

*Defined in [src/utilities/service-utils.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/service-utils.ts#L72)*

###  mapAxiosResponse

• **mapAxiosResponse**: *[_mapAxiosResponse](README.md#const-_mapaxiosresponse)* = _mapAxiosResponse

*Defined in [src/utilities/service-utils.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/service-utils.ts#L73)*

###  mapPagedAxiosResponse

• **mapPagedAxiosResponse**: *[_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)* = _mapPagedAxiosResponse

*Defined in [src/utilities/service-utils.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/service-utils.ts#L74)*

___

### `Const` StringUtils

### ▪ **StringUtils**: *object*

*Defined in [src/utilities/string-utils.ts:55](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L55)*

###  hasValue

• **hasValue**: *[hasValue](README.md#const-hasvalue)*

*Defined in [src/utilities/string-utils.ts:56](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L56)*

###  isEmpty

• **isEmpty**: *[isEmpty](README.md#const-isempty)*

*Defined in [src/utilities/string-utils.ts:57](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L57)*

###  isValidEmail

• **isValidEmail**: *[isValidEmail](README.md#const-isvalidemail)*

*Defined in [src/utilities/string-utils.ts:58](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L58)*

###  truncateRight

• **truncateRight**: *[truncateRight](README.md#const-truncateright)*

*Defined in [src/utilities/string-utils.ts:59](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/utilities/string-utils.ts#L59)*

___

### `Const` defaultValues

### ▪ **defaultValues**: *object*

*Defined in [src/view-models/result-error-record.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/view-models/result-error-record.ts#L5)*

*Defined in [src/view-models/result-record.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/view-models/result-record.ts#L7)*

###  errors

• **errors**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/view-models/result-record.ts#L8)*

###  key

• **key**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/view-models/result-error-record.ts#L6)*

###  message

• **message**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/view-models/result-error-record.ts#L7)*

###  resultObject

• **resultObject**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/view-models/result-record.ts#L9)*

###  type

• **type**: *[Error](enums/errortype.md#error)* = ErrorType.Error

*Defined in [src/view-models/result-error-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/view-models/result-error-record.ts#L8)*

___

### `Const` mockAxios

### ▪ **mockAxios**: *object*

*Defined in [src/tests/mocks/mock-axios.ts:134](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L134)*

###  delete

• **delete**: *Mock‹Promise‹object›, []›* = axios.delete as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:135](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L135)*

###  deleteSuccess

• **deleteSuccess**: *[deleteSuccess](README.md#const-deletesuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:136](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L136)*

###  get

• **get**: *Mock‹Promise‹object›, []›* = axios.get as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:137](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L137)*

###  getSuccess

• **getSuccess**: *[getSuccess](README.md#const-getsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:138](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L138)*

###  listSuccess

• **listSuccess**: *[listSuccess](README.md#const-listsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:139](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L139)*

###  post

• **post**: *Mock‹Promise‹object›, []›* = axios.post as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:140](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L140)*

###  postSuccess

• **postSuccess**: *[postSuccess](README.md#const-postsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:141](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L141)*

###  put

• **put**: *Mock‹Promise‹object›, []›* = axios.put as AxiosJestMock

*Defined in [src/tests/mocks/mock-axios.ts:142](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L142)*

###  putSuccess

• **putSuccess**: *[putSuccess](README.md#const-putsuccess)*

*Defined in [src/tests/mocks/mock-axios.ts:143](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L143)*
