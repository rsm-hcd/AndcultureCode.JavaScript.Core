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

* [KeyValuePair](interfaces/keyvaluepair.md)
* [PagedResult](interfaces/pagedresult.md)
* [Result](interfaces/result.md)
* [ResultError](interfaces/resulterror.md)
* [ServiceResponse](interfaces/serviceresponse.md)
* [StubResource](interfaces/stubresource.md)

### Type aliases

* [CancellablePromise](README.md#cancellablepromise)

### Variables

* [REGEX_VALID_EMAIL](README.md#const-regex_valid_email)
* [StubResourceRecordFactory](README.md#const-stubresourcerecordfactory)
* [VideoResolutions](README.md#const-videoresolutions)
* [_routeParamRegEx](README.md#const-_routeparamregex)

### Functions

* [_equalsBy](README.md#const-_equalsby)
* [_hasValues](README.md#const-_hasvalues)
* [_isEmpty](README.md#const-_isempty)
* [_isNotEmpty](README.md#const-_isnotempty)
* [_length](README.md#const-_length)
* [_mapAxiosResponse](README.md#const-_mapaxiosresponse)
* [_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)
* [_numericEnumToPojo](README.md#const-_numericenumtopojo)
* [_objectToArray](README.md#const-_objecttoarray)
* [_replaceElementAt](README.md#const-_replaceelementat)
* [_sleep](README.md#const-_sleep)
* [_timer](README.md#const-_timer)
* [appendQueryParams](README.md#const-appendqueryparams)
* [filename](README.md#const-filename)
* [getUrl](README.md#const-geturl)
* [getUrlFromPath](README.md#const-geturlfrompath)
* [hasValue](README.md#const-hasvalue)
* [isAbsoluteUrl](README.md#const-isabsoluteurl)
* [isDevelopment](README.md#const-isdevelopment)
* [isEmpty](README.md#const-isempty)
* [isValidEmail](README.md#const-isvalidemail)
* [replacePathParams](README.md#const-replacepathparams)
* [runIfDevelopment](README.md#const-runifdevelopment)
* [truncateRight](README.md#const-truncateright)

### Object literals

* [CollectionUtils](README.md#const-collectionutils)
* [CoreUtils](README.md#const-coreutils)
* [EnvironmentUtils](README.md#const-environmentutils)
* [FactoryType](README.md#const-factorytype)
* [PromiseFactory](README.md#const-promisefactory)
* [RouteUtils](README.md#const-routeutils)
* [ServiceUtils](README.md#const-serviceutils)
* [StringUtils](README.md#const-stringutils)
* [defaultValues](README.md#const-defaultvalues)

## Type aliases

###  CancellablePromise

Ƭ **CancellablePromise**: *object*

*Defined in [src/types/cancellable-promise.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/types/cancellable-promise.ts#L1)*

#### Type declaration:

* **cancel**(): *function*

  * (): *void*

* **promise**: *Promise‹T›*

## Variables

### `Const` REGEX_VALID_EMAIL

• **REGEX_VALID_EMAIL**: *RegExp‹›* = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

*Defined in [src/utilities/string-utils.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L7)*

___

### `Const` StubResourceRecordFactory

• **StubResourceRecordFactory**: *IFactory‹[StubResourceRecord](classes/stubresourcerecord.md)‹››* = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`)

*Defined in [src/tests/factories/stub-resource-record-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/tests/factories/stub-resource-record-factory.ts#L9)*

___

### `Const` VideoResolutions

• **VideoResolutions**: *object[]* = [
    {
        height: 1080,
        label: "1080p(FHD)",
        ratio: "16:9",
        width: 1920,
    },
    {
        height: 1200,
        label: "UXGA",
        ratio: "4:3",
        width: 1600,
    },
    {
        height: 720,
        label: "720p(HD)",
        ratio: "16:9",
        width: 1280,
    },
    {
        height: 600,
        label: "SVGA",
        ratio: "4:3",
        width: 800,
    },
    {
        height: 480,
        label: "VGA",
        ratio: "4:3",
        width: 640,
    },
    {
        height: 360,
        label: "360p(nHD)",
        ratio: "16:9",
        width: 640,
    },
    {
        height: 288,
        label: "CIF",
        ratio: "4:3",
        width: 352,
    },
    {
        height: 240,
        label: "QVGA",
        ratio: "4:3",
        width: 320,
    },
    {
        height: 144,
        label: "QCIF",
        ratio: "4:3",
        width: 176,
    },
    {
        height: 120,
        label: "QQVGA",
        ratio: "4:3",
        width: 160,
    },
]

*Defined in [src/constants/video-resolutions.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/constants/video-resolutions.ts#L1)*

___

### `Const` _routeParamRegEx

• **_routeParamRegEx**: *RegExp‹›* = /(:[a-z_-]*)/gi

*Defined in [src/utilities/route-utils.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L5)*

## Functions

### `Const` _equalsBy

▸ **_equalsBy**<**T**, **V**>(`selector`: function, `array1`: Array‹T› | List‹any› | undefined, `array2`: Array‹T› | List‹any› | undefined): *boolean*

*Defined in [src/utilities/collection-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L19)*

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

*Defined in [src/utilities/collection-utils.ts:58](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L58)*

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

*Defined in [src/utilities/collection-utils.ts:85](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L85)*

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

*Defined in [src/utilities/collection-utils.ts:125](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L125)*

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

*Defined in [src/utilities/collection-utils.ts:137](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L137)*

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

*Defined in [src/utilities/service-utils.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/service-utils.ts#L15)*

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

*Defined in [src/utilities/service-utils.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/service-utils.ts#L42)*

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

### `Const` _numericEnumToPojo

▸ **_numericEnumToPojo**(`enumObject`: any): *object*

*Defined in [src/utilities/core-utils.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`enumObject` | any |

**Returns:** *object*

___

### `Const` _objectToArray

▸ **_objectToArray**(`object`: any): *any[]*

*Defined in [src/utilities/core-utils.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

___

### `Const` _replaceElementAt

▸ **_replaceElementAt**<**T**>(`source`: Array‹T›, `index`: number, `value`: T): *Array‹T›*

*Defined in [src/utilities/collection-utils.ts:158](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L158)*

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

*Defined in [src/utilities/core-utils.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L40)*

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

*Defined in [src/utilities/core-utils.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L61)*

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

*Defined in [src/utilities/route-utils.ts:18](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L18)*

Appends the supplied query params object as a query string to path. Even if path is null.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Existing path (can be null) |
`queryParams` | any | Object to transform into query string  |

**Returns:** *string*

___

### `Const` filename

▸ **filename**(`value?`: undefined | string): *string | undefined*

*Defined in [src/utilities/string-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L19)*

Returns the filename from the supplied string, including extension

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *string | undefined*

___

### `Const` getUrl

▸ **getUrl**(`path`: string, `pathParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L42)*

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

*Defined in [src/utilities/route-utils.ts:52](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L52)*

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

*Defined in [src/utilities/string-utils.ts:29](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L29)*

Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
(after trimming both ends of the string)

**Parameters:**

Name | Type |
------ | ------ |
`value?` | undefined &#124; string |

**Returns:** *boolean*

___

### `Const` isAbsoluteUrl

▸ **isAbsoluteUrl**(`url`: string): *boolean*

*Defined in [src/utilities/route-utils.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L72)*

Determines if supplied url is an absolute url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string |   |

**Returns:** *boolean*

___

### `Const` isDevelopment

▸ **isDevelopment**(): *boolean*

*Defined in [src/utilities/environment-utils.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/environment-utils.ts#L10)*

Function to return whether or not the current environment is development.

**Returns:** *boolean*

___

### `Const` isEmpty

▸ **isEmpty**(`value?`: undefined | string): *boolean*

*Defined in [src/utilities/string-utils.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L40)*

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

*Defined in [src/utilities/string-utils.ts:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L48)*

Validates a given string matches a valid email format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *boolean*

___

### `Const` replacePathParams

▸ **replacePathParams**(`path`: string, `pathParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:82](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L82)*

Replace routing components in supplied path with keys and values
of supplied pathParams.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Path containing routing components (format: ':key'). Throws an error if any components aren't found in the pathParams object. |
`pathParams` | any | Object to transform into the supplied path.  |

**Returns:** *string*

___

### `Const` runIfDevelopment

▸ **runIfDevelopment**(`fn`: function): *void*

*Defined in [src/utilities/environment-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/environment-utils.ts#L19)*

Conditionally runs the given function, depending on whether the current environment is development or not.

**Parameters:**

▪ **fn**: *function*

Function to be run in a development environment only.

▸ (): *any*

**Returns:** *void*

___

### `Const` truncateRight

▸ **truncateRight**(`value`: string, `truncateAtPos`: number): *string*

*Defined in [src/utilities/string-utils.ts:51](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`truncateAtPos` | number |

**Returns:** *string*

## Object literals

### `Const` CollectionUtils

### ▪ **CollectionUtils**: *object*

*Defined in [src/utilities/collection-utils.ts:183](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L183)*

###  difference

• **difference**: *difference* = _.difference

*Defined in [src/utilities/collection-utils.ts:184](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L184)*

###  equalsBy

• **equalsBy**: *[_equalsBy](README.md#const-_equalsby)* = _equalsBy

*Defined in [src/utilities/collection-utils.ts:185](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L185)*

###  first

• **first**: *head* = _.head

*Defined in [src/utilities/collection-utils.ts:186](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L186)*

###  flattenDeep

• **flattenDeep**: *flattenDeep* = _.flattenDeep

*Defined in [src/utilities/collection-utils.ts:187](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L187)*

###  hasValues

• **hasValues**: *[_hasValues](README.md#const-_hasvalues)* = _hasValues

*Defined in [src/utilities/collection-utils.ts:188](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L188)*

###  isEmpty

• **isEmpty**: *[_isEmpty](README.md#const-_isempty)* = _isEmpty

*Defined in [src/utilities/collection-utils.ts:189](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L189)*

###  isNotEmpty

• **isNotEmpty**: *[_isNotEmpty](README.md#const-_isnotempty)* = _isNotEmpty

*Defined in [src/utilities/collection-utils.ts:190](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L190)*

###  length

• **length**: *[_length](README.md#const-_length)* = _length

*Defined in [src/utilities/collection-utils.ts:191](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L191)*

###  replaceElementAt

• **replaceElementAt**: *[_replaceElementAt](README.md#const-_replaceelementat)* = _replaceElementAt

*Defined in [src/utilities/collection-utils.ts:192](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L192)*

###  sample

• **sample**: *sample* = _.sample

*Defined in [src/utilities/collection-utils.ts:193](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L193)*

###  sampleSize

• **sampleSize**: *sampleSize* = _.sampleSize

*Defined in [src/utilities/collection-utils.ts:194](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L194)*

###  take

• **take**: *take* = _.take

*Defined in [src/utilities/collection-utils.ts:195](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/collection-utils.ts#L195)*

___

### `Const` CoreUtils

### ▪ **CoreUtils**: *object*

*Defined in [src/utilities/core-utils.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L87)*

###  bindAll

• **bindAll**: *bindAll* = _.bindAll

*Defined in [src/utilities/core-utils.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L88)*

###  curry

• **curry**: *Curry* = _.curry

*Defined in [src/utilities/core-utils.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L89)*

###  memoize

• **memoize**: *object* = _.memoize

*Defined in [src/utilities/core-utils.ts:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L90)*

#### Type declaration:

▸ <**T**>(`func`: T, `resolver?`: undefined | function): *T & MemoizedFunction*

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type |
------ | ------ |
`func` | T |
`resolver?` | undefined &#124; function |

* **Cache**: *MapCacheConstructor*

###  numericEnumToPojo

• **numericEnumToPojo**: *[_numericEnumToPojo](README.md#const-_numericenumtopojo)* = _numericEnumToPojo

*Defined in [src/utilities/core-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L91)*

###  objectToArray

• **objectToArray**: *[_objectToArray](README.md#const-_objecttoarray)* = _objectToArray

*Defined in [src/utilities/core-utils.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L92)*

###  range

• **range**: *range* = _.range

*Defined in [src/utilities/core-utils.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L93)*

###  sleep

• **sleep**: *[_sleep](README.md#const-_sleep)* = _sleep

*Defined in [src/utilities/core-utils.ts:94](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L94)*

###  throttle

• **throttle**: *throttle* = _.throttle

*Defined in [src/utilities/core-utils.ts:95](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L95)*

###  timer

• **timer**: *[_timer](README.md#const-_timer)* = _timer

*Defined in [src/utilities/core-utils.ts:96](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L96)*

###  times

• **times**: *times* = _.times

*Defined in [src/utilities/core-utils.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/core-utils.ts#L97)*

___

### `Const` EnvironmentUtils

### ▪ **EnvironmentUtils**: *object*

*Defined in [src/utilities/environment-utils.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/environment-utils.ts#L33)*

###  isDevelopment

• **isDevelopment**: *[isDevelopment](README.md#const-isdevelopment)*

*Defined in [src/utilities/environment-utils.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/environment-utils.ts#L34)*

###  runIfDevelopment

• **runIfDevelopment**: *[runIfDevelopment](README.md#const-runifdevelopment)*

*Defined in [src/utilities/environment-utils.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/environment-utils.ts#L35)*

___

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/tests/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/tests/factories/factory-type.ts#L1)*

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

*Defined in [src/tests/factories/factory-type.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/tests/factories/factory-type.ts#L2)*

___

### `Const` PromiseFactory

### ▪ **PromiseFactory**: *object*

*Defined in [src/utilities/promise-factory.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/promise-factory.ts#L7)*

###  cancellable

▸ **cancellable**<**T**>(`promise`: Promise‹T›): *[CancellablePromise](README.md#cancellablepromise)‹T›*

*Defined in [src/utilities/promise-factory.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/promise-factory.ts#L8)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *[CancellablePromise](README.md#cancellablepromise)‹T›*

###  pending

▸ **pending**(): *Promise‹unknown›*

*Defined in [src/utilities/promise-factory.ts:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/promise-factory.ts#L32)*

Creates a new and empty/unfullfilled promise to cancel further
chained promise operations

**Returns:** *Promise‹unknown›*

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

*Defined in [src/utilities/route-utils.ts:108](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L108)*

###  appendQueryParams

• **appendQueryParams**: *[appendQueryParams](README.md#const-appendqueryparams)*

*Defined in [src/utilities/route-utils.ts:109](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L109)*

###  getUrl

• **getUrl**: *[getUrl](README.md#const-geturl)*

*Defined in [src/utilities/route-utils.ts:110](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L110)*

###  getUrlFromPath

• **getUrlFromPath**: *[getUrlFromPath](README.md#const-geturlfrompath)*

*Defined in [src/utilities/route-utils.ts:111](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L111)*

###  isAbsoluteUrl

• **isAbsoluteUrl**: *[isAbsoluteUrl](README.md#const-isabsoluteurl)*

*Defined in [src/utilities/route-utils.ts:112](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L112)*

###  replacePathParams

• **replacePathParams**: *[replacePathParams](README.md#const-replacepathparams)*

*Defined in [src/utilities/route-utils.ts:113](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/route-utils.ts#L113)*

___

### `Const` ServiceUtils

### ▪ **ServiceUtils**: *object*

*Defined in [src/utilities/service-utils.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/service-utils.ts#L72)*

###  mapAxiosResponse

• **mapAxiosResponse**: *[_mapAxiosResponse](README.md#const-_mapaxiosresponse)* = _mapAxiosResponse

*Defined in [src/utilities/service-utils.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/service-utils.ts#L73)*

###  mapPagedAxiosResponse

• **mapPagedAxiosResponse**: *[_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)* = _mapPagedAxiosResponse

*Defined in [src/utilities/service-utils.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/service-utils.ts#L74)*

___

### `Const` StringUtils

### ▪ **StringUtils**: *object*

*Defined in [src/utilities/string-utils.ts:69](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L69)*

###  camelCase

• **camelCase**: *camelCase* = _.camelCase

*Defined in [src/utilities/string-utils.ts:70](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L70)*

###  capitalize

• **capitalize**: *capitalize* = _.capitalize

*Defined in [src/utilities/string-utils.ts:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L71)*

###  filename

• **filename**: *[filename](README.md#const-filename)*

*Defined in [src/utilities/string-utils.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L72)*

###  hasValue

• **hasValue**: *[hasValue](README.md#const-hasvalue)*

*Defined in [src/utilities/string-utils.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L73)*

###  isEmpty

• **isEmpty**: *[isEmpty](README.md#const-isempty)*

*Defined in [src/utilities/string-utils.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L74)*

###  isValidEmail

• **isValidEmail**: *[isValidEmail](README.md#const-isvalidemail)*

*Defined in [src/utilities/string-utils.ts:75](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L75)*

###  lowerFirst

• **lowerFirst**: *lowerFirst* = _.lowerFirst

*Defined in [src/utilities/string-utils.ts:76](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L76)*

###  pad

• **pad**: *pad* = _.pad

*Defined in [src/utilities/string-utils.ts:77](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L77)*

###  padEnd

• **padEnd**: *padEnd* = _.padEnd

*Defined in [src/utilities/string-utils.ts:78](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L78)*

###  padStart

• **padStart**: *padStart* = _.padStart

*Defined in [src/utilities/string-utils.ts:79](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L79)*

###  repeat

• **repeat**: *repeat* = _.repeat

*Defined in [src/utilities/string-utils.ts:80](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L80)*

###  snakeCase

• **snakeCase**: *snakeCase* = _.snakeCase

*Defined in [src/utilities/string-utils.ts:81](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L81)*

###  startCase

• **startCase**: *startCase* = _.startCase

*Defined in [src/utilities/string-utils.ts:82](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L82)*

###  template

• **template**: *template* = _.template

*Defined in [src/utilities/string-utils.ts:83](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L83)*

###  truncateRight

• **truncateRight**: *[truncateRight](README.md#const-truncateright)*

*Defined in [src/utilities/string-utils.ts:84](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L84)*

###  upperFirst

• **upperFirst**: *upperFirst* = _.upperFirst

*Defined in [src/utilities/string-utils.ts:85](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L85)*

###  words

• **words**: *words* = _.words

*Defined in [src/utilities/string-utils.ts:86](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/utilities/string-utils.ts#L86)*

___

### `Const` defaultValues

### ▪ **defaultValues**: *object*

*Defined in [src/view-models/result-error-record.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/view-models/result-error-record.ts#L5)*

*Defined in [src/view-models/result-record.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/view-models/result-record.ts#L7)*

###  errors

• **errors**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/view-models/result-record.ts#L8)*

###  key

• **key**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/view-models/result-error-record.ts#L6)*

###  message

• **message**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/view-models/result-error-record.ts#L7)*

###  resultObject

• **resultObject**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/view-models/result-record.ts#L9)*

###  type

• **type**: *[Error](enums/errortype.md#error)* = ErrorType.Error

*Defined in [src/view-models/result-error-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/b4aa1fd/src/view-models/result-error-record.ts#L8)*
