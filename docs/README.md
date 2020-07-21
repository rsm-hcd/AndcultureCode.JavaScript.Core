[andculturecode-javascript-core](README.md)

# andculturecode-javascript-core

## Index

### Namespaces

* [__global](README.md#__global)

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

* [Culture](interfaces/culture.md)
* [CultureParams](interfaces/cultureparams.md)
* [KeyValuePair](interfaces/keyvaluepair.md)
* [PagedResult](interfaces/pagedresult.md)
* [Result](interfaces/result.md)
* [ResultError](interfaces/resulterror.md)
* [ScrollOptions](interfaces/scrolloptions.md)
* [ServiceResponse](interfaces/serviceresponse.md)
* [StubResource](interfaces/stubresource.md)

### Type aliases

* [CancellablePromise](README.md#cancellablepromise)

### Variables

* [REGEX_VALID_EMAIL](README.md#const-regex_valid_email)
* [StubResourceRecordFactory](README.md#const-stubresourcerecordfactory)
* [VideoResolutions](README.md#const-videoresolutions)
* [_currentCultureCode](README.md#let-_currentculturecode)
* [_defaultApiUrl](README.md#const-_defaultapiurl)
* [_routeParamRegEx](README.md#const-_routeparamregex)
* [errorCultureIsRequired](README.md#const-errorcultureisrequired)
* [routeParam](README.md#const-routeparam)
* [t](README.md#const-t)

### Functions

* [_configure](README.md#const-_configure)
* [_configureCultureCode](README.md#const-_configureculturecode)
* [_configureHeaders](README.md#const-_configureheaders)
* [_configureInterceptors](README.md#const-_configureinterceptors)
* [_equalsBy](README.md#const-_equalsby)
* [_hasValues](README.md#const-_hasvalues)
* [_isEmpty](README.md#const-_isempty)
* [_isIE](README.md#const-_isie)
* [_isNotEmpty](README.md#const-_isnotempty)
* [_isNotIE](README.md#const-_isnotie)
* [_length](README.md#const-_length)
* [_mapAxiosResponse](README.md#const-_mapaxiosresponse)
* [_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)
* [_numericEnumToPojo](README.md#const-_numericenumtopojo)
* [_objectToArray](README.md#const-_objecttoarray)
* [_removeElementAt](README.md#const-_removeelementat)
* [_replaceElementAt](README.md#const-_replaceelementat)
* [_scrollToElementById](README.md#const-_scrolltoelementbyid)
* [_scrollToHash](README.md#const-_scrolltohash)
* [_sleep](README.md#const-_sleep)
* [_timer](README.md#const-_timer)
* [appendQueryParams](README.md#const-appendqueryparams)
* [changeCultureCode](README.md#const-changeculturecode)
* [cultureCodeFromQueryString](README.md#const-culturecodefromquerystring)
* [cultureFactory](README.md#const-culturefactory)
* [culturesToResources](README.md#const-culturestoresources)
* [currentCultureCode](README.md#const-currentculturecode)
* [defaultCultureCode](README.md#const-defaultculturecode)
* [detectCultureCode](README.md#const-detectculturecode)
* [filename](README.md#const-filename)
* [getUrl](README.md#const-geturl)
* [getUrlFromPath](README.md#const-geturlfrompath)
* [hasValue](README.md#const-hasvalue)
* [initialize](README.md#const-initialize)
* [isAbsoluteUrl](README.md#const-isabsoluteurl)
* [isDevelopment](README.md#const-isdevelopment)
* [isEmpty](README.md#const-isempty)
* [isValidEmail](README.md#const-isvalidemail)
* [join](README.md#const-join)
* [queryStringToObject](README.md#const-querystringtoobject)
* [replacePathParams](README.md#const-replacepathparams)
* [runIfDevelopment](README.md#const-runifdevelopment)
* [translate](README.md#const-translate)
* [truncateRight](README.md#const-truncateright)

### Object literals

* [BaseEnglishUnitedStates](README.md#const-baseenglishunitedstates)
* [BaseSpanishSpain](README.md#const-basespanishspain)
* [BrowserUtils](README.md#const-browserutils)
* [CollectionUtils](README.md#const-collectionutils)
* [CoreUtils](README.md#const-coreutils)
* [DefaultScrollOptions](README.md#const-defaultscrolloptions)
* [EmailConstants](README.md#const-emailconstants)
* [EnvironmentUtils](README.md#const-environmentutils)
* [FactoryType](README.md#const-factorytype)
* [LocalizationUtils](README.md#const-localizationutils)
* [PromiseFactory](README.md#const-promisefactory)
* [Rfc4646LanguageCodes](README.md#const-rfc4646languagecodes)
* [RouteUtils](README.md#const-routeutils)
* [ScrollUtils](README.md#const-scrollutils)
* [ServiceUtils](README.md#const-serviceutils)
* [StringUtils](README.md#const-stringutils)
* [defaultValues](README.md#const-defaultvalues)

## Namespaces

###  __global

• **__global**:

*Defined in [src/utilities/browser-utils.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L4)*

Allows us to use the documentMode for feature detection on globalThis.Document

###  Document

• **Document**:

*Defined in [src/utilities/browser-utils.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L5)*

### `Optional` documentMode

• **documentMode**? : *any*

*Defined in [src/utilities/browser-utils.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L6)*

## Type aliases

###  CancellablePromise

Ƭ **CancellablePromise**: *object*

*Defined in [src/types/cancellable-promise.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/types/cancellable-promise.ts#L1)*

#### Type declaration:

* **cancel**(): *function*

  * (): *void*

* **promise**: *Promise‹T›*

## Variables

### `Const` REGEX_VALID_EMAIL

• **REGEX_VALID_EMAIL**: *RegExp‹›* = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

*Defined in [src/utilities/string-utils.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L8)*

___

### `Const` StubResourceRecordFactory

• **StubResourceRecordFactory**: *IFactory‹[StubResourceRecord](classes/stubresourcerecord.md)‹››* = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`)

*Defined in [src/tests/factories/stub-resource-record-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/tests/factories/stub-resource-record-factory.ts#L9)*

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

*Defined in [src/constants/video-resolutions.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/video-resolutions.ts#L1)*

___

### `Let` _currentCultureCode

• **_currentCultureCode**: *string*

*Defined in [src/utilities/service-utils.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L16)*

___

### `Const` _defaultApiUrl

• **_defaultApiUrl**: *"/api/v1"* = "/api/v1"

*Defined in [src/utilities/service-utils.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L17)*

___

### `Const` _routeParamRegEx

• **_routeParamRegEx**: *RegExp‹›* = /(:[a-z_-]*)/gi

*Defined in [src/utilities/route-utils.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L7)*

___

### `Const` errorCultureIsRequired

• **errorCultureIsRequired**: *"Culture is required"* = "Culture is required"

*Defined in [src/utilities/localization-utils.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L14)*

___

### `Const` routeParam

• **routeParam**: *"culture"* = "culture"

*Defined in [src/utilities/localization-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L19)*

Key name for handling language selection in routing (ie. queryString, path, etc...)

___

### `Const` t

• **t**: *[translate](README.md#const-translate)* = translate

*Defined in [src/utilities/localization-utils.ts:140](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L140)*

Retrieve translation for given key in the currently configured language

**`param`** culture resource key

**`param`** object key/values for interpolation of dynamic values

## Functions

### `Const` _configure

▸ **_configure**(`cultureCode?`: undefined | string, `onApiResponseError?`: undefined | function, `onApiResponseSuccess?`: undefined | function): *void*

*Defined in [src/utilities/service-utils.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L31)*

Configures global service properties for your application

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cultureCode?` | undefined &#124; string | Current culture code of the application |
`onApiResponseError?` | undefined &#124; function | Global handler called whenever there is an erroneous API response |
`onApiResponseSuccess?` | undefined &#124; function | Global handler called whenever there is a successful API response  |

**Returns:** *void*

___

### `Const` _configureCultureCode

▸ **_configureCultureCode**(`cultureCode?`: undefined | string, `apiUrl`: string): *void*

*Defined in [src/utilities/service-utils.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L46)*

Configure application's services for the provided culture

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`cultureCode?` | undefined &#124; string | - | Requested RFC-4646 language code |
`apiUrl` | string | _defaultApiUrl | Application's base api url (hopefully versioned)  |

**Returns:** *void*

___

### `Const` _configureHeaders

▸ **_configureHeaders**(): *void*

*Defined in [src/utilities/service-utils.ts:66](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L66)*

Configure axios HTTP headers

**Returns:** *void*

___

### `Const` _configureInterceptors

▸ **_configureInterceptors**(`onApiResponseError?`: undefined | function, `onApiResponseSuccess?`: undefined | function): *void*

*Defined in [src/utilities/service-utils.ts:78](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L78)*

Configures axios global API interceptors

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onApiResponseError?` | undefined &#124; function | - |
`onApiResponseSuccess?` | undefined &#124; function |   |

**Returns:** *void*

___

### `Const` _equalsBy

▸ **_equalsBy**<**T**, **V**>(`selector`: function, `array1`: Array‹T› | List‹any› | undefined, `array2`: Array‹T› | List‹any› | undefined): *boolean*

*Defined in [src/utilities/collection-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L19)*

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

*Defined in [src/utilities/collection-utils.ts:58](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L58)*

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

*Defined in [src/utilities/collection-utils.ts:81](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L81)*

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

### `Const` _isIE

▸ **_isIE**(): *boolean*

*Defined in [src/utilities/browser-utils.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L14)*

Returns true if the detected browser is Internet Explorer.

**Returns:** *boolean*

boolean

___

### `Const` _isNotEmpty

▸ **_isNotEmpty**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

*Defined in [src/utilities/collection-utils.ts:117](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L117)*

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

### `Const` _isNotIE

▸ **_isNotIE**(): *boolean*

*Defined in [src/utilities/browser-utils.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L22)*

Returns true if the brower is NOT Internet Explorer.

**Returns:** *boolean*

boolean

___

### `Const` _length

▸ **_length**(`arr`: Array‹any› | List‹any›): *number*

*Defined in [src/utilities/collection-utils.ts:129](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L129)*

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

*Defined in [src/utilities/service-utils.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L93)*

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

*Defined in [src/utilities/service-utils.ts:120](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L120)*

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

*Defined in [src/utilities/core-utils.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`enumObject` | any |

**Returns:** *object*

___

### `Const` _objectToArray

▸ **_objectToArray**(`object`: any): *any[]*

*Defined in [src/utilities/core-utils.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

___

### `Const` _removeElementAt

▸ **_removeElementAt**<**T**>(`source`: Array‹T›, `index`: number): *Array‹T›*

*Defined in [src/utilities/collection-utils.ts:146](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L146)*

Removes a supplied element by index

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | Array‹T› | original array |
`index` | number | array index to remove  |

**Returns:** *Array‹T›*

___

### `Const` _replaceElementAt

▸ **_replaceElementAt**<**T**>(`source`: Array‹T›, `index`: number, `value`: T): *Array‹T›*

*Defined in [src/utilities/collection-utils.ts:165](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L165)*

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

### `Const` _scrollToElementById

▸ **_scrollToElementById**(`id`: string, `options`: [ScrollOptions](interfaces/scrolloptions.md)): *void*

*Defined in [src/utilities/scroll-utils.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L27)*

Attempts to scroll to the element specified by the given ID.
In the event of a slow page render, the element may not be immediately available.
This method will retry up to 50 times every 100ms to find the element before
giving up.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | string | - |
`options` | [ScrollOptions](interfaces/scrolloptions.md) | DefaultScrollOptions |

**Returns:** *void*

___

### `Const` _scrollToHash

▸ **_scrollToHash**(`location`: any, `options`: [ScrollOptions](interfaces/scrolloptions.md)): *void*

*Defined in [src/utilities/scroll-utils.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L73)*

Attempts to scroll to the element specified in the hash of the current path.
In the event of a slow page render, the element may not be immediately available.
This method will retry up to 50 times every 100ms to find the element before
giving up.

Reference:
https://stackoverflow.com/a/54042987
https://stackoverflow.com/a/48195222

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`location` | any | - |
`options` | [ScrollOptions](interfaces/scrolloptions.md) | DefaultScrollOptions |

**Returns:** *void*

___

### `Const` _sleep

▸ **_sleep**(`milliseconds`: number, `debug`: boolean): *Promise‹unknown›*

*Defined in [src/utilities/core-utils.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L40)*

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

*Defined in [src/utilities/core-utils.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L61)*

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

*Defined in [src/utilities/route-utils.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L20)*

Appends the supplied query params object as a query string to path. Even if path is null.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Existing path (can be null) |
`queryParams` | any | Object to transform into query string  |

**Returns:** *string*

___

### `Const` changeCultureCode

▸ **changeCultureCode**(`cultureCode`: string): *Promise‹TFunction›*

*Defined in [src/utilities/localization-utils.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L41)*

Updates application's configured language used for translations

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cultureCode` | string | RFC-4646 culture code  |

**Returns:** *Promise‹TFunction›*

___

### `Const` cultureCodeFromQueryString

▸ **cultureCodeFromQueryString**(): *string*

*Defined in [src/utilities/localization-utils.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L44)*

**Returns:** *string*

___

### `Const` cultureFactory

▸ **cultureFactory**<**TResources**>(`base`: [Culture](interfaces/culture.md)‹any›, `culture`: Partial‹[Culture](interfaces/culture.md)‹TResources››): *[Culture](interfaces/culture.md)‹TResources›*

*Defined in [src/utilities/localization-utils.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L54)*

Factory to build an inheritance chain for base to child Culture<TResource> types

**Type parameters:**

▪ **TResources**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`base` | [Culture](interfaces/culture.md)‹any› | Base culture from core package |
`culture` | Partial‹[Culture](interfaces/culture.md)‹TResources›› | subclass culture's partial properties to override 'base'. Typically where providing culture resources  |

**Returns:** *[Culture](interfaces/culture.md)‹TResources›*

___

### `Const` culturesToResources

▸ **culturesToResources**<**TResources**>(`cultures`: [Culture](interfaces/culture.md)‹TResources›[]): *any*

*Defined in [src/utilities/localization-utils.ts:59](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L59)*

**Type parameters:**

▪ **TResources**

**Parameters:**

Name | Type |
------ | ------ |
`cultures` | [Culture](interfaces/culture.md)‹TResources›[] |

**Returns:** *any*

___

### `Const` currentCultureCode

▸ **currentCultureCode**(): *string*

*Defined in [src/utilities/localization-utils.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L72)*

Returns currently configured RFC-4646 culture code

**Returns:** *string*

___

### `Const` defaultCultureCode

▸ **defaultCultureCode**(): *string*

*Defined in [src/utilities/localization-utils.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L74)*

**Returns:** *string*

___

### `Const` detectCultureCode

▸ **detectCultureCode**(): *string*

*Defined in [src/utilities/localization-utils.ts:81](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L81)*

Detect current language for which to provide translations

**Returns:** *string*

string current RFC-4646 culture code

___

### `Const` filename

▸ **filename**(`value?`: undefined | string): *string | undefined*

*Defined in [src/utilities/string-utils.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L20)*

Returns the filename from the supplied string, including extension

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *string | undefined*

___

### `Const` getUrl

▸ **getUrl**(`path`: string, `pathParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L44)*

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

*Defined in [src/utilities/route-utils.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L54)*

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

*Defined in [src/utilities/string-utils.ts:30](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L30)*

Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
(after trimming both ends of the string)

**Parameters:**

Name | Type |
------ | ------ |
`value?` | undefined &#124; string |

**Returns:** *boolean*

___

### `Const` initialize

▸ **initialize**<**TResources**>(`module`: any, `cultures`: [Culture](interfaces/culture.md)‹TResources›[], `escapeValue`: boolean): *i18n*

*Defined in [src/utilities/localization-utils.ts:104](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L104)*

Initialize frontend i18n module - typically in root/startup of application

**Type parameters:**

▪ **TResources**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`module` | any | - | Third party module for use with i18next (ie. initReactI18next) |
`cultures` | [Culture](interfaces/culture.md)‹TResources›[] | - | List of supported language cultures |
`escapeValue` | boolean | false | Optional flag to set interpolation value escaping. False by default being react does this by default  |

**Returns:** *i18n*

___

### `Const` isAbsoluteUrl

▸ **isAbsoluteUrl**(`url`: string): *boolean*

*Defined in [src/utilities/route-utils.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L74)*

Determines if supplied url is an absolute url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string |   |

**Returns:** *boolean*

___

### `Const` isDevelopment

▸ **isDevelopment**(): *boolean*

*Defined in [src/utilities/environment-utils.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/environment-utils.ts#L10)*

Function to return whether or not the current environment is development.

**Returns:** *boolean*

___

### `Const` isEmpty

▸ **isEmpty**(`value?`: undefined | string): *boolean*

*Defined in [src/utilities/string-utils.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L41)*

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

*Defined in [src/utilities/string-utils.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L49)*

Validates a given string matches a valid email format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *boolean*

___

### `Const` join

▸ **join**(`values`: string[], `separator`: string): *string*

*Defined in [src/utilities/string-utils.ts:60](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L60)*

Joins an array of strings into one string with a separator. If the array is empty, it will return an empty string.

**`default`** ""

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`values` | string[] | - | Values to join into one string. |
`separator` | string | "," | - |

**Returns:** *string*

___

### `Const` queryStringToObject

▸ **queryStringToObject**<**T**>(`queryString`: string, `arrayFormat`: "bracket" | "index" | "comma", `parseNumbers`: boolean, `parseBooleans`: boolean): *T*

*Defined in [src/utilities/route-utils.ts:84](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L84)*

Parse a query string and return an object of type T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string | - | current query string |
`arrayFormat` | "bracket" &#124; "index" &#124; "comma" | "index" | format to parse arrays from |
`parseNumbers` | boolean | true | convert numbers to number type from string |
`parseBooleans` | boolean | true | convert booleans to boolean type from string  |

**Returns:** *T*

___

### `Const` replacePathParams

▸ **replacePathParams**(`path`: string, `pathParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:103](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L103)*

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

*Defined in [src/utilities/environment-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/environment-utils.ts#L19)*

Conditionally runs the given function, depending on whether the current environment is development or not.

**Parameters:**

▪ **fn**: *function*

Function to be run in a development environment only.

▸ (): *any*

**Returns:** *void*

___

### `Const` translate

▸ **translate**(`key`: string, `options?`: any): *string*

*Defined in [src/utilities/localization-utils.ts:133](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L133)*

Retrieve translation for given key in the currently configured language

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | culture resource key |
`options?` | any | object key/values for interpolation of dynamic values  |

**Returns:** *string*

___

### `Const` truncateRight

▸ **truncateRight**(`value`: string, `truncateAtPos`: number): *string*

*Defined in [src/utilities/string-utils.ts:68](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`truncateAtPos` | number |

**Returns:** *string*

## Object literals

### `Const` BaseEnglishUnitedStates

### ▪ **BaseEnglishUnitedStates**: *object*

*Defined in [src/cultures/base-english-united-states.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/cultures/base-english-united-states.ts#L4)*

###  code

• **code**: *string* = Rfc4646LanguageCodes.EN_US

*Defined in [src/cultures/base-english-united-states.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/cultures/base-english-united-states.ts#L5)*

###  resources

• **resources**: *null* = null

*Defined in [src/cultures/base-english-united-states.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/cultures/base-english-united-states.ts#L6)*

___

### `Const` BaseSpanishSpain

### ▪ **BaseSpanishSpain**: *object*

*Defined in [src/cultures/base-spanish-spain.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/cultures/base-spanish-spain.ts#L4)*

###  code

• **code**: *string* = Rfc4646LanguageCodes.ES_ES

*Defined in [src/cultures/base-spanish-spain.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/cultures/base-spanish-spain.ts#L5)*

###  resources

• **resources**: *null* = null

*Defined in [src/cultures/base-spanish-spain.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/cultures/base-spanish-spain.ts#L6)*

___

### `Const` BrowserUtils

### ▪ **BrowserUtils**: *object*

*Defined in [src/utilities/browser-utils.ts:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L24)*

###  isIE

• **isIE**: *[_isIE](README.md#const-_isie)* = _isIE

*Defined in [src/utilities/browser-utils.ts:25](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L25)*

###  isNotIE

• **isNotIE**: *[_isNotIE](README.md#const-_isnotie)* = _isNotIE

*Defined in [src/utilities/browser-utils.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/browser-utils.ts#L26)*

___

### `Const` CollectionUtils

### ▪ **CollectionUtils**: *object*

*Defined in [src/utilities/collection-utils.ts:190](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L190)*

###  difference

• **difference**: *difference* = _.difference

*Defined in [src/utilities/collection-utils.ts:191](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L191)*

###  equalsBy

• **equalsBy**: *[_equalsBy](README.md#const-_equalsby)* = _equalsBy

*Defined in [src/utilities/collection-utils.ts:192](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L192)*

###  first

• **first**: *head* = _.head

*Defined in [src/utilities/collection-utils.ts:193](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L193)*

###  flattenDeep

• **flattenDeep**: *flattenDeep* = _.flattenDeep

*Defined in [src/utilities/collection-utils.ts:194](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L194)*

###  hasValues

• **hasValues**: *[_hasValues](README.md#const-_hasvalues)* = _hasValues

*Defined in [src/utilities/collection-utils.ts:195](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L195)*

###  isEmpty

• **isEmpty**: *[_isEmpty](README.md#const-_isempty)* = _isEmpty

*Defined in [src/utilities/collection-utils.ts:196](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L196)*

###  isNotEmpty

• **isNotEmpty**: *[_isNotEmpty](README.md#const-_isnotempty)* = _isNotEmpty

*Defined in [src/utilities/collection-utils.ts:197](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L197)*

###  length

• **length**: *[_length](README.md#const-_length)* = _length

*Defined in [src/utilities/collection-utils.ts:198](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L198)*

###  removeElementAt

• **removeElementAt**: *[_removeElementAt](README.md#const-_removeelementat)* = _removeElementAt

*Defined in [src/utilities/collection-utils.ts:199](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L199)*

###  replaceElementAt

• **replaceElementAt**: *[_replaceElementAt](README.md#const-_replaceelementat)* = _replaceElementAt

*Defined in [src/utilities/collection-utils.ts:200](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L200)*

###  sample

• **sample**: *sample* = _.sample

*Defined in [src/utilities/collection-utils.ts:201](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L201)*

###  sampleSize

• **sampleSize**: *sampleSize* = _.sampleSize

*Defined in [src/utilities/collection-utils.ts:202](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L202)*

###  take

• **take**: *take* = _.take

*Defined in [src/utilities/collection-utils.ts:203](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/collection-utils.ts#L203)*

___

### `Const` CoreUtils

### ▪ **CoreUtils**: *object*

*Defined in [src/utilities/core-utils.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L87)*

###  bindAll

• **bindAll**: *bindAll* = _.bindAll

*Defined in [src/utilities/core-utils.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L88)*

###  curry

• **curry**: *Curry* = _.curry

*Defined in [src/utilities/core-utils.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L89)*

###  memoize

• **memoize**: *object* = _.memoize

*Defined in [src/utilities/core-utils.ts:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L90)*

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

*Defined in [src/utilities/core-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L91)*

###  objectToArray

• **objectToArray**: *[_objectToArray](README.md#const-_objecttoarray)* = _objectToArray

*Defined in [src/utilities/core-utils.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L92)*

###  range

• **range**: *range* = _.range

*Defined in [src/utilities/core-utils.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L93)*

###  sleep

• **sleep**: *[_sleep](README.md#const-_sleep)* = _sleep

*Defined in [src/utilities/core-utils.ts:94](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L94)*

###  throttle

• **throttle**: *throttle* = _.throttle

*Defined in [src/utilities/core-utils.ts:95](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L95)*

###  timer

• **timer**: *[_timer](README.md#const-_timer)* = _timer

*Defined in [src/utilities/core-utils.ts:96](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L96)*

###  times

• **times**: *times* = _.times

*Defined in [src/utilities/core-utils.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/core-utils.ts#L97)*

___

### `Const` DefaultScrollOptions

### ▪ **DefaultScrollOptions**: *object*

*Defined in [src/utilities/scroll-utils.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L9)*

###  behavior

• **behavior**: *"auto"* = "auto"

*Defined in [src/utilities/scroll-utils.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L10)*

###  block

• **block**: *"start"* = "start"

*Defined in [src/utilities/scroll-utils.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L11)*

###  inline

• **inline**: *"nearest"* = "nearest"

*Defined in [src/utilities/scroll-utils.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L12)*

___

### `Const` EmailConstants

### ▪ **EmailConstants**: *object*

*Defined in [src/constants/email-constants.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/email-constants.ts#L4)*

These values are from the RFC-5231 Email specification

###  addressMaxLength

• **addressMaxLength**: *number* = 250

*Defined in [src/constants/email-constants.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/email-constants.ts#L5)*

###  subjectMaxLength

• **subjectMaxLength**: *number* = 78

*Defined in [src/constants/email-constants.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/email-constants.ts#L6)*

___

### `Const` EnvironmentUtils

### ▪ **EnvironmentUtils**: *object*

*Defined in [src/utilities/environment-utils.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/environment-utils.ts#L33)*

###  isDevelopment

• **isDevelopment**: *[isDevelopment](README.md#const-isdevelopment)*

*Defined in [src/utilities/environment-utils.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/environment-utils.ts#L34)*

###  runIfDevelopment

• **runIfDevelopment**: *[runIfDevelopment](README.md#const-runifdevelopment)*

*Defined in [src/utilities/environment-utils.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/environment-utils.ts#L35)*

___

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/tests/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/tests/factories/factory-type.ts#L1)*

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

*Defined in [src/tests/factories/factory-type.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/tests/factories/factory-type.ts#L2)*

___

### `Const` LocalizationUtils

### ▪ **LocalizationUtils**: *object*

*Defined in [src/utilities/localization-utils.ts:148](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L148)*

###  changeCultureCode

• **changeCultureCode**: *[changeCultureCode](README.md#const-changeculturecode)*

*Defined in [src/utilities/localization-utils.ts:149](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L149)*

###  cultureCodeFromQueryString

• **cultureCodeFromQueryString**: *[cultureCodeFromQueryString](README.md#const-culturecodefromquerystring)*

*Defined in [src/utilities/localization-utils.ts:150](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L150)*

###  cultureFactory

• **cultureFactory**: *[cultureFactory](README.md#const-culturefactory)*

*Defined in [src/utilities/localization-utils.ts:151](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L151)*

###  currentCultureCode

• **currentCultureCode**: *[currentCultureCode](README.md#const-currentculturecode)*

*Defined in [src/utilities/localization-utils.ts:152](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L152)*

###  defaultCultureCode

• **defaultCultureCode**: *[defaultCultureCode](README.md#const-defaultculturecode)*

*Defined in [src/utilities/localization-utils.ts:153](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L153)*

###  detectCultureCode

• **detectCultureCode**: *[detectCultureCode](README.md#const-detectculturecode)*

*Defined in [src/utilities/localization-utils.ts:154](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L154)*

###  errorCultureIsRequired

• **errorCultureIsRequired**: *string*

*Defined in [src/utilities/localization-utils.ts:155](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L155)*

###  initialize

• **initialize**: *[initialize](README.md#const-initialize)*

*Defined in [src/utilities/localization-utils.ts:156](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L156)*

###  routeParam

• **routeParam**: *string*

*Defined in [src/utilities/localization-utils.ts:157](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L157)*

###  t

• **t**: *[translate](README.md#const-translate)*

*Defined in [src/utilities/localization-utils.ts:158](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L158)*

###  translate

• **translate**: *[translate](README.md#const-translate)*

*Defined in [src/utilities/localization-utils.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/localization-utils.ts#L159)*

___

### `Const` PromiseFactory

### ▪ **PromiseFactory**: *object*

*Defined in [src/utilities/promise-factory.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/promise-factory.ts#L7)*

###  cancellable

▸ **cancellable**<**T**>(`promise`: Promise‹T›): *[CancellablePromise](README.md#cancellablepromise)‹T›*

*Defined in [src/utilities/promise-factory.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/promise-factory.ts#L8)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *[CancellablePromise](README.md#cancellablepromise)‹T›*

###  pending

▸ **pending**(): *Promise‹unknown›*

*Defined in [src/utilities/promise-factory.ts:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/promise-factory.ts#L32)*

Creates a new and empty/unfullfilled promise to cancel further
chained promise operations

**Returns:** *Promise‹unknown›*

___

### `Const` Rfc4646LanguageCodes

### ▪ **Rfc4646LanguageCodes**: *object*

*Defined in [src/constants/rfc4646-language-codes.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L1)*

###  AF_ZA

• **AF_ZA**: *string* = "af-ZA"

*Defined in [src/constants/rfc4646-language-codes.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L2)*

###  AR_AE

• **AR_AE**: *string* = "ar-AE"

*Defined in [src/constants/rfc4646-language-codes.ts:18](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L18)*

###  AR_BH

• **AR_BH**: *string* = "ar-BH"

*Defined in [src/constants/rfc4646-language-codes.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L5)*

###  AR_DZ

• **AR_DZ**: *string* = "ar-DZ"

*Defined in [src/constants/rfc4646-language-codes.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L4)*

###  AR_EG

• **AR_EG**: *string* = "ar-EG"

*Defined in [src/constants/rfc4646-language-codes.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L6)*

###  AR_IQ

• **AR_IQ**: *string* = "ar-IQ"

*Defined in [src/constants/rfc4646-language-codes.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L7)*

###  AR_JO

• **AR_JO**: *string* = "ar-JO"

*Defined in [src/constants/rfc4646-language-codes.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L8)*

###  AR_KW

• **AR_KW**: *string* = "ar-KW"

*Defined in [src/constants/rfc4646-language-codes.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L9)*

###  AR_LB

• **AR_LB**: *string* = "ar-LB"

*Defined in [src/constants/rfc4646-language-codes.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L10)*

###  AR_LY

• **AR_LY**: *string* = "ar-LY"

*Defined in [src/constants/rfc4646-language-codes.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L11)*

###  AR_MA

• **AR_MA**: *string* = "ar-MA"

*Defined in [src/constants/rfc4646-language-codes.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L12)*

###  AR_OM

• **AR_OM**: *string* = "ar-OM"

*Defined in [src/constants/rfc4646-language-codes.ts:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L13)*

###  AR_QA

• **AR_QA**: *string* = "ar-QA"

*Defined in [src/constants/rfc4646-language-codes.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L14)*

###  AR_SA

• **AR_SA**: *string* = "ar-SA"

*Defined in [src/constants/rfc4646-language-codes.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L15)*

###  AR_SY

• **AR_SY**: *string* = "ar-SY"

*Defined in [src/constants/rfc4646-language-codes.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L16)*

###  AR_TN

• **AR_TN**: *string* = "ar-TN"

*Defined in [src/constants/rfc4646-language-codes.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L17)*

###  AR_YE

• **AR_YE**: *string* = "ar-YE"

*Defined in [src/constants/rfc4646-language-codes.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L19)*

###  BE_BY

• **BE_BY**: *string* = "be-BY"

*Defined in [src/constants/rfc4646-language-codes.ts:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L24)*

###  BG_BG

• **BG_BG**: *string* = "bg-BG"

*Defined in [src/constants/rfc4646-language-codes.ts:25](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L25)*

###  CA_ES

• **CA_ES**: *string* = "ca-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L26)*

###  CS_CZ

• **CS_CZ**: *string* = "cs-CZ"

*Defined in [src/constants/rfc4646-language-codes.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L35)*

###  CY_AZ_AZ

• **CY_AZ_AZ**: *string* = "Cy-az-AZ"

*Defined in [src/constants/rfc4646-language-codes.ts:21](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L21)*

###  CY_SR_SP

• **CY_SR_SP**: *string* = "Cy-sr-SP"

*Defined in [src/constants/rfc4646-language-codes.ts:101](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L101)*

###  CY_UZ_UZ

• **CY_UZ_UZ**: *string* = "Cy-uz-UZ"

*Defined in [src/constants/rfc4646-language-codes.ts:135](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L135)*

###  DA_DK

• **DA_DK**: *string* = "da-DK"

*Defined in [src/constants/rfc4646-language-codes.ts:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L36)*

###  DE_AT

• **DE_AT**: *string* = "de-AT"

*Defined in [src/constants/rfc4646-language-codes.ts:65](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L65)*

###  DE_CH

• **DE_CH**: *string* = "de-CH"

*Defined in [src/constants/rfc4646-language-codes.ts:69](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L69)*

###  DE_DE

• **DE_DE**: *string* = "de-DE"

*Defined in [src/constants/rfc4646-language-codes.ts:66](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L66)*

###  DE_LI

• **DE_LI**: *string* = "de-LI"

*Defined in [src/constants/rfc4646-language-codes.ts:67](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L67)*

###  DE_LU

• **DE_LU**: *string* = "de-LU"

*Defined in [src/constants/rfc4646-language-codes.ts:68](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L68)*

###  DIV_MV

• **DIV_MV**: *string* = "div-MV"

*Defined in [src/constants/rfc4646-language-codes.ts:37](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L37)*

###  EL_GR

• **EL_GR**: *string* = "el-GR"

*Defined in [src/constants/rfc4646-language-codes.ts:70](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L70)*

###  EN_AU

• **EN_AU**: *string* = "en-AU"

*Defined in [src/constants/rfc4646-language-codes.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L40)*

###  EN_BZ

• **EN_BZ**: *string* = "en-BZ"

*Defined in [src/constants/rfc4646-language-codes.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L41)*

###  EN_CA

• **EN_CA**: *string* = "en-CA"

*Defined in [src/constants/rfc4646-language-codes.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L42)*

###  EN_CB

• **EN_CB**: *string* = "en-CB"

*Defined in [src/constants/rfc4646-language-codes.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L43)*

###  EN_GB

• **EN_GB**: *string* = "en-GB"

*Defined in [src/constants/rfc4646-language-codes.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L50)*

###  EN_IE

• **EN_IE**: *string* = "en-IE"

*Defined in [src/constants/rfc4646-language-codes.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L44)*

###  EN_JM

• **EN_JM**: *string* = "en-JM"

*Defined in [src/constants/rfc4646-language-codes.ts:45](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L45)*

###  EN_NZ

• **EN_NZ**: *string* = "en-NZ"

*Defined in [src/constants/rfc4646-language-codes.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L46)*

###  EN_PH

• **EN_PH**: *string* = "en-PH"

*Defined in [src/constants/rfc4646-language-codes.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L47)*

###  EN_TT

• **EN_TT**: *string* = "en-TT"

*Defined in [src/constants/rfc4646-language-codes.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L49)*

###  EN_US

• **EN_US**: *string* = "en-US"

*Defined in [src/constants/rfc4646-language-codes.ts:51](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L51)*

###  EN_ZA

• **EN_ZA**: *string* = "en-ZA"

*Defined in [src/constants/rfc4646-language-codes.ts:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L48)*

###  EN_ZW

• **EN_ZW**: *string* = "en-ZW"

*Defined in [src/constants/rfc4646-language-codes.ts:52](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L52)*

###  ES_AR

• **ES_AR**: *string* = "es-AR"

*Defined in [src/constants/rfc4646-language-codes.ts:105](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L105)*

###  ES_BO

• **ES_BO**: *string* = "es-BO"

*Defined in [src/constants/rfc4646-language-codes.ts:106](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L106)*

###  ES_CL

• **ES_CL**: *string* = "es-CL"

*Defined in [src/constants/rfc4646-language-codes.ts:107](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L107)*

###  ES_CO

• **ES_CO**: *string* = "es-CO"

*Defined in [src/constants/rfc4646-language-codes.ts:108](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L108)*

###  ES_CR

• **ES_CR**: *string* = "es-CR"

*Defined in [src/constants/rfc4646-language-codes.ts:109](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L109)*

###  ES_DO

• **ES_DO**: *string* = "es-DO"

*Defined in [src/constants/rfc4646-language-codes.ts:110](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L110)*

###  ES_EC

• **ES_EC**: *string* = "es-EC"

*Defined in [src/constants/rfc4646-language-codes.ts:111](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L111)*

###  ES_ES

• **ES_ES**: *string* = "es-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:121](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L121)*

###  ES_GT

• **ES_GT**: *string* = "es-GT"

*Defined in [src/constants/rfc4646-language-codes.ts:113](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L113)*

###  ES_HN

• **ES_HN**: *string* = "es-HN"

*Defined in [src/constants/rfc4646-language-codes.ts:114](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L114)*

###  ES_MX

• **ES_MX**: *string* = "es-MX"

*Defined in [src/constants/rfc4646-language-codes.ts:115](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L115)*

###  ES_NI

• **ES_NI**: *string* = "es-NI"

*Defined in [src/constants/rfc4646-language-codes.ts:116](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L116)*

###  ES_PA

• **ES_PA**: *string* = "es-PA"

*Defined in [src/constants/rfc4646-language-codes.ts:117](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L117)*

###  ES_PE

• **ES_PE**: *string* = "es-PE"

*Defined in [src/constants/rfc4646-language-codes.ts:119](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L119)*

###  ES_PR

• **ES_PR**: *string* = "es-PR"

*Defined in [src/constants/rfc4646-language-codes.ts:120](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L120)*

###  ES_PY

• **ES_PY**: *string* = "es-PY"

*Defined in [src/constants/rfc4646-language-codes.ts:118](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L118)*

###  ES_SV

• **ES_SV**: *string* = "es-SV"

*Defined in [src/constants/rfc4646-language-codes.ts:112](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L112)*

###  ES_UY

• **ES_UY**: *string* = "es-UY"

*Defined in [src/constants/rfc4646-language-codes.ts:122](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L122)*

###  ES_VE

• **ES_VE**: *string* = "es-VE"

*Defined in [src/constants/rfc4646-language-codes.ts:123](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L123)*

###  ET_EE

• **ET_EE**: *string* = "et-EE"

*Defined in [src/constants/rfc4646-language-codes.ts:53](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L53)*

###  EU_ES

• **EU_ES**: *string* = "eu-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L23)*

###  FA_IR

• **FA_IR**: *string* = "fa-IR"

*Defined in [src/constants/rfc4646-language-codes.ts:55](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L55)*

###  FI_FI

• **FI_FI**: *string* = "fi-FI"

*Defined in [src/constants/rfc4646-language-codes.ts:56](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L56)*

###  FO_FO

• **FO_FO**: *string* = "fo-FO"

*Defined in [src/constants/rfc4646-language-codes.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L54)*

###  FR_BE

• **FR_BE**: *string* = "fr-BE"

*Defined in [src/constants/rfc4646-language-codes.ts:57](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L57)*

###  FR_CA

• **FR_CA**: *string* = "fr-CA"

*Defined in [src/constants/rfc4646-language-codes.ts:58](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L58)*

###  FR_CH

• **FR_CH**: *string* = "fr-CH"

*Defined in [src/constants/rfc4646-language-codes.ts:62](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L62)*

###  FR_FR

• **FR_FR**: *string* = "fr-FR"

*Defined in [src/constants/rfc4646-language-codes.ts:59](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L59)*

###  FR_LU

• **FR_LU**: *string* = "fr-LU"

*Defined in [src/constants/rfc4646-language-codes.ts:60](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L60)*

###  FR_MC

• **FR_MC**: *string* = "fr-MC"

*Defined in [src/constants/rfc4646-language-codes.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L61)*

###  GL_ES

• **GL_ES**: *string* = "gl-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:63](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L63)*

###  GU_IN

• **GU_IN**: *string* = "gu-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L71)*

###  HE_IL

• **HE_IL**: *string* = "he-IL"

*Defined in [src/constants/rfc4646-language-codes.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L72)*

###  HI_IN

• **HI_IN**: *string* = "hi-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L73)*

###  HR_HR

• **HR_HR**: *string* = "hr-HR"

*Defined in [src/constants/rfc4646-language-codes.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L34)*

###  HU_HU

• **HU_HU**: *string* = "hu-HU"

*Defined in [src/constants/rfc4646-language-codes.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L74)*

###  HY_AM

• **HY_AM**: *string* = "hy-AM"

*Defined in [src/constants/rfc4646-language-codes.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L20)*

###  ID_ID

• **ID_ID**: *string* = "id-ID"

*Defined in [src/constants/rfc4646-language-codes.ts:76](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L76)*

###  IS_IS

• **IS_IS**: *string* = "is-IS"

*Defined in [src/constants/rfc4646-language-codes.ts:75](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L75)*

###  IT_CH

• **IT_CH**: *string* = "it-CH"

*Defined in [src/constants/rfc4646-language-codes.ts:78](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L78)*

###  IT_IT

• **IT_IT**: *string* = "it-IT"

*Defined in [src/constants/rfc4646-language-codes.ts:77](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L77)*

###  JA_JP

• **JA_JP**: *string* = "ja-JP"

*Defined in [src/constants/rfc4646-language-codes.ts:79](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L79)*

###  KA_GE

• **KA_GE**: *string* = "ka-GE"

*Defined in [src/constants/rfc4646-language-codes.ts:64](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L64)*

###  KK_KZ

• **KK_KZ**: *string* = "kk-KZ"

*Defined in [src/constants/rfc4646-language-codes.ts:81](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L81)*

###  KN_IN

• **KN_IN**: *string* = "kn-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:80](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L80)*

###  KOK_IN

• **KOK_IN**: *string* = "kok-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:82](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L82)*

###  KO_KR

• **KO_KR**: *string* = "ko-KR"

*Defined in [src/constants/rfc4646-language-codes.ts:83](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L83)*

###  KY_KZ

• **KY_KZ**: *string* = "ky-KZ"

*Defined in [src/constants/rfc4646-language-codes.ts:84](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L84)*

###  LT_AZ_AZ

• **LT_AZ_AZ**: *string* = "Lt-az-AZ"

*Defined in [src/constants/rfc4646-language-codes.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L22)*

###  LT_LT

• **LT_LT**: *string* = "lt-LT"

*Defined in [src/constants/rfc4646-language-codes.ts:86](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L86)*

###  LT_SR_SP

• **LT_SR_SP**: *string* = "Lt-sr-SP"

*Defined in [src/constants/rfc4646-language-codes.ts:102](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L102)*

###  LT_UZ_UZ

• **LT_UZ_UZ**: *string* = "Lt-uz-UZ"

*Defined in [src/constants/rfc4646-language-codes.ts:136](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L136)*

###  LV_LV

• **LV_LV**: *string* = "lv-LV"

*Defined in [src/constants/rfc4646-language-codes.ts:85](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L85)*

###  MK_MK

• **MK_MK**: *string* = "mk-MK"

*Defined in [src/constants/rfc4646-language-codes.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L87)*

###  MN_MN

• **MN_MN**: *string* = "mn-MN"

*Defined in [src/constants/rfc4646-language-codes.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L91)*

###  MR_IN

• **MR_IN**: *string* = "mr-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L90)*

###  MS_BN

• **MS_BN**: *string* = "ms-BN"

*Defined in [src/constants/rfc4646-language-codes.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L88)*

###  MS_MY

• **MS_MY**: *string* = "ms-MY"

*Defined in [src/constants/rfc4646-language-codes.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L89)*

###  NB_NO

• **NB_NO**: *string* = "nb-NO"

*Defined in [src/constants/rfc4646-language-codes.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L92)*

###  NL_BE

• **NL_BE**: *string* = "nl-BE"

*Defined in [src/constants/rfc4646-language-codes.ts:38](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L38)*

###  NL_NL

• **NL_NL**: *string* = "nl-NL"

*Defined in [src/constants/rfc4646-language-codes.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L39)*

###  NN_NO

• **NN_NO**: *string* = "nn-NO"

*Defined in [src/constants/rfc4646-language-codes.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L93)*

###  PA_IN

• **PA_IN**: *string* = "pa-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L97)*

###  PL_PL

• **PL_PL**: *string* = "pl-PL"

*Defined in [src/constants/rfc4646-language-codes.ts:94](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L94)*

###  PT_BR

• **PT_BR**: *string* = "pt-BR"

*Defined in [src/constants/rfc4646-language-codes.ts:95](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L95)*

###  PT_PT

• **PT_PT**: *string* = "pt-PT"

*Defined in [src/constants/rfc4646-language-codes.ts:96](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L96)*

###  RO_RO

• **RO_RO**: *string* = "ro-RO"

*Defined in [src/constants/rfc4646-language-codes.ts:98](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L98)*

###  RU_RU

• **RU_RU**: *string* = "ru-RU"

*Defined in [src/constants/rfc4646-language-codes.ts:99](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L99)*

###  SA_IN

• **SA_IN**: *string* = "sa-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:100](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L100)*

###  SK_SK

• **SK_SK**: *string* = "sk-SK"

*Defined in [src/constants/rfc4646-language-codes.ts:103](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L103)*

###  SL_SI

• **SL_SI**: *string* = "sl-SI"

*Defined in [src/constants/rfc4646-language-codes.ts:104](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L104)*

###  SQ_AL

• **SQ_AL**: *string* = "sq-AL"

*Defined in [src/constants/rfc4646-language-codes.ts:3](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L3)*

###  SV_FI

• **SV_FI**: *string* = "sv-FI"

*Defined in [src/constants/rfc4646-language-codes.ts:125](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L125)*

###  SV_SE

• **SV_SE**: *string* = "sv-SE"

*Defined in [src/constants/rfc4646-language-codes.ts:126](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L126)*

###  SW_KE

• **SW_KE**: *string* = "sw-KE"

*Defined in [src/constants/rfc4646-language-codes.ts:124](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L124)*

###  SYR_SY

• **SYR_SY**: *string* = "syr-SY"

*Defined in [src/constants/rfc4646-language-codes.ts:127](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L127)*

###  TA_IN

• **TA_IN**: *string* = "ta-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:128](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L128)*

###  TE_IN

• **TE_IN**: *string* = "te-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:130](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L130)*

###  TH_TH

• **TH_TH**: *string* = "th-TH"

*Defined in [src/constants/rfc4646-language-codes.ts:131](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L131)*

###  TR_TR

• **TR_TR**: *string* = "tr-TR"

*Defined in [src/constants/rfc4646-language-codes.ts:132](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L132)*

###  TT_RU

• **TT_RU**: *string* = "tt-RU"

*Defined in [src/constants/rfc4646-language-codes.ts:129](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L129)*

###  UK_UA

• **UK_UA**: *string* = "uk-UA"

*Defined in [src/constants/rfc4646-language-codes.ts:133](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L133)*

###  UR_PK

• **UR_PK**: *string* = "ur-PK"

*Defined in [src/constants/rfc4646-language-codes.ts:134](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L134)*

###  VI_VN

• **VI_VN**: *string* = "vi-VN"

*Defined in [src/constants/rfc4646-language-codes.ts:137](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L137)*

###  ZH_CHS

• **ZH_CHS**: *string* = "zh-CHS"

*Defined in [src/constants/rfc4646-language-codes.ts:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L32)*

###  ZH_CHT

• **ZH_CHT**: *string* = "zh-CHT"

*Defined in [src/constants/rfc4646-language-codes.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L33)*

###  ZH_CN

• **ZH_CN**: *string* = "zh-CN"

*Defined in [src/constants/rfc4646-language-codes.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L27)*

###  ZH_HK

• **ZH_HK**: *string* = "zh-HK"

*Defined in [src/constants/rfc4646-language-codes.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L28)*

###  ZH_MO

• **ZH_MO**: *string* = "zh-MO"

*Defined in [src/constants/rfc4646-language-codes.ts:29](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L29)*

###  ZH_SG

• **ZH_SG**: *string* = "zh-SG"

*Defined in [src/constants/rfc4646-language-codes.ts:30](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L30)*

###  ZH_TW

• **ZH_TW**: *string* = "zh-TW"

*Defined in [src/constants/rfc4646-language-codes.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/constants/rfc4646-language-codes.ts#L31)*

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

*Defined in [src/utilities/route-utils.ts:129](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L129)*

###  appendQueryParams

• **appendQueryParams**: *[appendQueryParams](README.md#const-appendqueryparams)*

*Defined in [src/utilities/route-utils.ts:130](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L130)*

###  getUrl

• **getUrl**: *[getUrl](README.md#const-geturl)*

*Defined in [src/utilities/route-utils.ts:131](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L131)*

###  getUrlFromPath

• **getUrlFromPath**: *[getUrlFromPath](README.md#const-geturlfrompath)*

*Defined in [src/utilities/route-utils.ts:132](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L132)*

###  isAbsoluteUrl

• **isAbsoluteUrl**: *[isAbsoluteUrl](README.md#const-isabsoluteurl)*

*Defined in [src/utilities/route-utils.ts:133](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L133)*

###  queryStringToObject

• **queryStringToObject**: *[queryStringToObject](README.md#const-querystringtoobject)*

*Defined in [src/utilities/route-utils.ts:134](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L134)*

###  replacePathParams

• **replacePathParams**: *[replacePathParams](README.md#const-replacepathparams)*

*Defined in [src/utilities/route-utils.ts:135](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/route-utils.ts#L135)*

___

### `Const` ScrollUtils

### ▪ **ScrollUtils**: *object*

*Defined in [src/utilities/scroll-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L91)*

###  scrollToHash

• **scrollToHash**: *[_scrollToHash](README.md#const-_scrolltohash)* = _scrollToHash

*Defined in [src/utilities/scroll-utils.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/scroll-utils.ts#L92)*

___

### `Const` ServiceUtils

### ▪ **ServiceUtils**: *object*

*Defined in [src/utilities/service-utils.ts:158](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L158)*

###  configure

• **configure**: *[_configure](README.md#const-_configure)* = _configure

*Defined in [src/utilities/service-utils.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L159)*

###  configureCultureCode

• **configureCultureCode**: *[_configureCultureCode](README.md#const-_configureculturecode)* = _configureCultureCode

*Defined in [src/utilities/service-utils.ts:160](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L160)*

###  mapAxiosResponse

• **mapAxiosResponse**: *[_mapAxiosResponse](README.md#const-_mapaxiosresponse)* = _mapAxiosResponse

*Defined in [src/utilities/service-utils.ts:161](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L161)*

###  mapPagedAxiosResponse

• **mapPagedAxiosResponse**: *[_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)* = _mapPagedAxiosResponse

*Defined in [src/utilities/service-utils.ts:162](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/service-utils.ts#L162)*

___

### `Const` StringUtils

### ▪ **StringUtils**: *object*

*Defined in [src/utilities/string-utils.ts:86](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L86)*

###  camelCase

• **camelCase**: *camelCase* = _.camelCase

*Defined in [src/utilities/string-utils.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L87)*

###  capitalize

• **capitalize**: *capitalize* = _.capitalize

*Defined in [src/utilities/string-utils.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L88)*

###  filename

• **filename**: *[filename](README.md#const-filename)*

*Defined in [src/utilities/string-utils.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L89)*

###  hasValue

• **hasValue**: *[hasValue](README.md#const-hasvalue)*

*Defined in [src/utilities/string-utils.ts:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L90)*

###  isEmpty

• **isEmpty**: *[isEmpty](README.md#const-isempty)*

*Defined in [src/utilities/string-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L91)*

###  isValidEmail

• **isValidEmail**: *[isValidEmail](README.md#const-isvalidemail)*

*Defined in [src/utilities/string-utils.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L92)*

###  join

• **join**: *[join](README.md#const-join)*

*Defined in [src/utilities/string-utils.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L93)*

###  lowerFirst

• **lowerFirst**: *lowerFirst* = _.lowerFirst

*Defined in [src/utilities/string-utils.ts:94](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L94)*

###  pad

• **pad**: *pad* = _.pad

*Defined in [src/utilities/string-utils.ts:95](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L95)*

###  padEnd

• **padEnd**: *padEnd* = _.padEnd

*Defined in [src/utilities/string-utils.ts:96](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L96)*

###  padStart

• **padStart**: *padStart* = _.padStart

*Defined in [src/utilities/string-utils.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L97)*

###  repeat

• **repeat**: *repeat* = _.repeat

*Defined in [src/utilities/string-utils.ts:98](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L98)*

###  snakeCase

• **snakeCase**: *snakeCase* = _.snakeCase

*Defined in [src/utilities/string-utils.ts:99](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L99)*

###  startCase

• **startCase**: *startCase* = _.startCase

*Defined in [src/utilities/string-utils.ts:100](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L100)*

###  template

• **template**: *template* = _.template

*Defined in [src/utilities/string-utils.ts:101](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L101)*

###  truncateRight

• **truncateRight**: *[truncateRight](README.md#const-truncateright)*

*Defined in [src/utilities/string-utils.ts:102](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L102)*

###  upperFirst

• **upperFirst**: *upperFirst* = _.upperFirst

*Defined in [src/utilities/string-utils.ts:103](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L103)*

###  words

• **words**: *words* = _.words

*Defined in [src/utilities/string-utils.ts:104](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/utilities/string-utils.ts#L104)*

___

### `Const` defaultValues

### ▪ **defaultValues**: *object*

*Defined in [src/view-models/result-error-record.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/view-models/result-error-record.ts#L5)*

*Defined in [src/view-models/result-record.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/view-models/result-record.ts#L7)*

###  errors

• **errors**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/view-models/result-record.ts#L8)*

###  key

• **key**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/view-models/result-error-record.ts#L6)*

###  message

• **message**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/view-models/result-error-record.ts#L7)*

###  resultObject

• **resultObject**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/view-models/result-record.ts#L9)*

###  type

• **type**: *[Error](enums/errortype.md#error)* = ErrorType.Error

*Defined in [src/view-models/result-error-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/1c3c873/src/view-models/result-error-record.ts#L8)*
