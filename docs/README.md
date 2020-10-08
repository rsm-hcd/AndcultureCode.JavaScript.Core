[andculturecode-javascript-core](README.md)

# andculturecode-javascript-core

## Index

### Namespaces

* [__global](README.md#__global)

### Enumerations

* [AnchorTargetTypes](enums/anchortargettypes.md)
* [ContentType](enums/contenttype.md)
* [ErrorType](enums/errortype.md)
* [HttpHeader](enums/httpheader.md)
* [HttpVerb](enums/httpverb.md)
* [QueryStringArrayFormat](enums/querystringarrayformat.md)
* [UnitOfTime](enums/unitoftime.md)

### Classes

* [Do](classes/do.md)
* [DoSync](classes/dosync.md)
* [ResultErrorRecord](classes/resulterrorrecord.md)
* [ResultRecord](classes/resultrecord.md)
* [StubResourceRecord](classes/stubresourcerecord.md)

### Interfaces

* [Auditable](interfaces/auditable.md)
* [Culture](interfaces/culture.md)
* [CultureParams](interfaces/cultureparams.md)
* [DoTryConfig](interfaces/dotryconfig.md)
* [Entity](interfaces/entity.md)
* [KeyValuePair](interfaces/keyvaluepair.md)
* [PagedQuery](interfaces/pagedquery.md)
* [PagedResult](interfaces/pagedresult.md)
* [Result](interfaces/result.md)
* [ResultError](interfaces/resulterror.md)
* [Role](interfaces/role.md)
* [ScrollOptions](interfaces/scrolloptions.md)
* [ServiceResponse](interfaces/serviceresponse.md)
* [StubResource](interfaces/stubresource.md)
* [User](interfaces/user.md)

### Type aliases

* [AsyncWorkload](README.md#asyncworkload)
* [CancellablePromise](README.md#cancellablepromise)
* [CatchResultHandler](README.md#catchresulthandler)
* [Constructor](README.md#constructor)
* [FinallyHandler](README.md#finallyhandler)
* [SyncWorkload](README.md#syncworkload)

### Variables

* [REGEX_VALID_EMAIL](README.md#const-regex_valid_email)
* [ResultErrorRecordFactory](README.md#const-resulterrorrecordfactory)
* [ResultRecordFactory](README.md#const-resultrecordfactory)
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
* [_ensureRecord](README.md#const-_ensurerecord)
* [_enumToArray](README.md#const-_enumtoarray)
* [_equalsBy](README.md#const-_equalsby)
* [_getRandomEnum](README.md#const-_getrandomenum)
* [_hasValues](README.md#const-_hasvalues)
* [_isEmpty](README.md#const-_isempty)
* [_isIE](README.md#const-_isie)
* [_isNotEmpty](README.md#const-_isnotempty)
* [_isNotIE](README.md#const-_isnotie)
* [_isRecord](README.md#const-_isrecord)
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
* [_sleepSync](README.md#const-_sleepsync)
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
* [registerPromiseFinallyPolyfill](README.md#const-registerpromisefinallypolyfill)
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
* [PolyfillUtils](README.md#const-polyfillutils)
* [PromiseFactory](README.md#const-promisefactory)
* [RecordUtils](README.md#const-recordutils)
* [Rfc4646LanguageCodes](README.md#const-rfc4646languagecodes)
* [RouteUtils](README.md#const-routeutils)
* [ScrollUtils](README.md#const-scrollutils)
* [ServiceUtils](README.md#const-serviceutils)
* [StringUtils](README.md#const-stringutils)
* [defaultValues](README.md#const-defaultvalues)

## Namespaces

###  __global

• **__global**:

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:4

Allows us to use the documentMode for feature detection on globalThis.Document

###  Document

• **Document**:

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:5

### `Optional` documentMode

• **documentMode**? : *any*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:6

## Type aliases

###  AsyncWorkload

Ƭ **AsyncWorkload**: *function*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/types/async-workload.ts:4

Represents an asynchronous method reference.

#### Type declaration:

▸ (): *Promise‹T›*

___

###  CancellablePromise

Ƭ **CancellablePromise**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/types/cancellable-promise.ts:1

#### Type declaration:

* **cancel**(): *function*

  * (): *void*

* **promise**: *Promise‹T›*

___

###  CatchResultHandler

Ƭ **CatchResultHandler**: *function*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/types/catch-result-handler.ts:6

Handler for a typed error ResultRecord, or any type if a Javascript error occurred.

#### Type declaration:

▸ (`result?`: [ResultRecord](classes/resultrecord.md)‹T›, `error?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`result?` | [ResultRecord](classes/resultrecord.md)‹T› |
`error?` | any |

___

###  Constructor

Ƭ **Constructor**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/types/constructor.ts:4

Represents the constructor of a typed object which can be used for instantiation.

#### Type declaration:

___

###  FinallyHandler

Ƭ **FinallyHandler**: *function*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/types/finally-handler.ts:4

Handler for Do.try().finally(); Runs whether an error occurred or not.

#### Type declaration:

▸ (): *void*

___

###  SyncWorkload

Ƭ **SyncWorkload**: *function*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/types/sync-workload.ts:4

Represents a synchronous method reference.

#### Type declaration:

▸ (): *T*

## Variables

### `Const` REGEX_VALID_EMAIL

• **REGEX_VALID_EMAIL**: *RegExp‹›* = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:9

___

### `Const` ResultErrorRecordFactory

• **ResultErrorRecordFactory**: *IFactory‹[ResultErrorRecord](classes/resulterrorrecord.md)‹››* = Factory.define<ResultErrorRecord>(
    FactoryType.ResultErrorRecord,
    ResultErrorRecord
)
    .sequence("key", (i: number) => `TEST_ERROR_KEY_${i}`)
    .sequence("message", (i: number) => `Test error message ${i}`)

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/tests/factories/result-error-record-factory.ts:9

___

### `Const` ResultRecordFactory

• **ResultRecordFactory**: *IFactory‹[ResultRecord](classes/resultrecord.md)‹any››* = Factory.define<ResultRecord<any>>(
    FactoryType.ResultRecord,
    ResultRecord
)

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/tests/factories/result-record-factory.ts:9

___

### `Const` StubResourceRecordFactory

• **StubResourceRecordFactory**: *IFactory‹[StubResourceRecord](classes/stubresourcerecord.md)‹››* = Factory.define<StubResourceRecord>(
    FactoryType.StubResourceRecord,
    StubResourceRecord
)
    .sequence("id", (i: number) => i)
    .sequence("name", (i: number) => `Name ${i}`)

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/tests/factories/stub-resource-record-factory.ts:9

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/video-resolutions.ts:1

___

### `Let` _currentCultureCode

• **_currentCultureCode**: *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:16

___

### `Const` _defaultApiUrl

• **_defaultApiUrl**: *"/api/v1"* = "/api/v1"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:17

___

### `Const` _routeParamRegEx

• **_routeParamRegEx**: *RegExp‹›* = /(:[a-z_-]*)/gi

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:8

___

### `Const` errorCultureIsRequired

• **errorCultureIsRequired**: *"Culture is required"* = "Culture is required"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:14

___

### `Const` routeParam

• **routeParam**: *"culture"* = "culture"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:19

Key name for handling language selection in routing (ie. queryString, path, etc...)

___

### `Const` t

• **t**: *[translate](README.md#const-translate)* = translate

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:140

Retrieve translation for given key in the currently configured language

**`param`** culture resource key

**`param`** object key/values for interpolation of dynamic values

## Functions

### `Const` _configure

▸ **_configure**(`cultureCode?`: undefined | string, `onApiResponseError?`: undefined | function, `onApiResponseSuccess?`: undefined | function): *void*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:31

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:46

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:66

Configure axios HTTP headers

**Returns:** *void*

___

### `Const` _configureInterceptors

▸ **_configureInterceptors**(`onApiResponseError?`: undefined | function, `onApiResponseSuccess?`: undefined | function): *void*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:78

Configures axios global API interceptors

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onApiResponseError?` | undefined &#124; function | - |
`onApiResponseSuccess?` | undefined &#124; function |   |

**Returns:** *void*

___

### `Const` _ensureRecord

▸ **_ensureRecord**<**T**>(`maybeRecord`: any, `record`: [Constructor](README.md#constructor)‹T›): *T*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/record-utils.ts:17

Function to ensure a given object is an instance of a specific Record `T`. If it is not, one will
be instantiated with the given constructor.

If `maybeRecord` is already an instance of `T`, it returns that value.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maybeRecord` | any | Object or Record to be coalesced into a Record. |
`record` | [Constructor](README.md#constructor)‹T› | Type of the Record to be instantiated  |

**Returns:** *T*

___

### `Const` _enumToArray

▸ **_enumToArray**<**TEnum**>(`enumObject`: any): *TEnum[]*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:19

Transforms an enum into an array of its values

**`example`** 
const roleTypes = TestUtils.enumToArray<RoleType>(RoleType);
// Returns [0, 1, 2, 3, 4, 5]

**Type parameters:**

▪ **TEnum**

The enum to be transformed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumObject` | any | The enum to be transformed (cannot be typed to TEnum, or TS will return 'typeof TEnum' instead of a value of TEnum) |

**Returns:** *TEnum[]*

___

### `Const` _equalsBy

▸ **_equalsBy**<**T**, **V**>(`selector`: function, `array1`: Array‹T› | List‹any› | undefined, `array2`: Array‹T› | List‹any› | undefined): *boolean*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:19

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

### `Const` _getRandomEnum

▸ **_getRandomEnum**<**TEnum**>(`enumObject`: any, `excludeElement?`: TEnum): *TEnum*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:34

Returns a random enum value from its type

**`example`** 
const randomRoleType = TestUtils.getRandomEnum<RoleType>(RoleType);
// Might return the value '1', which is the value of RoleType.Team

**Type parameters:**

▪ **TEnum**

The enum to be transformed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`enumObject` | any | The enum to be transformed (cannot be typed to TEnum, or TS will return 'typeof TEnum' instead of a value of TEnum) |
`excludeElement?` | TEnum | - |

**Returns:** *TEnum*

___

### `Const` _hasValues

▸ **_hasValues**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:58

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:81

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:14

Returns true if the detected browser is Internet Explorer.

**Returns:** *boolean*

boolean

___

### `Const` _isNotEmpty

▸ **_isNotEmpty**(...`collections`: Array‹any[] | List‹any› | undefined›): *boolean*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:117

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:22

Returns true if the brower is NOT Internet Explorer.

**Returns:** *boolean*

boolean

___

### `Const` _isRecord

▸ **_isRecord**<**T**>(`maybeRecord`: any, `record`: [Constructor](README.md#constructor)‹T›): *boolean*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/record-utils.ts:26

Function to verify a given object is an instance of a specific Record `T`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maybeRecord` | any | Object or Record to be checked as an instance of `T` |
`record` | [Constructor](README.md#constructor)‹T› | Type of the Record to be checked  |

**Returns:** *boolean*

___

### `Const` _length

▸ **_length**(`arr`: Array‹any› | List‹any›): *number*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:129

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:93

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:121

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`enumObject` | any |

**Returns:** *object*

___

### `Const` _objectToArray

▸ **_objectToArray**(`object`: any): *any[]*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

___

### `Const` _removeElementAt

▸ **_removeElementAt**<**T**>(`source`: Array‹T›, `index`: number): *Array‹T›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:146

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:166

Returns a NEW array with the element at the specified index
replaced with the specified value if the index provided is
greater than zero, else it returns the source array. Since it returns a new array,
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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:27

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:73

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:79

Wrap timeout in a promise so tests can easily block execution for testing time

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`milliseconds` | number | - |   |
`debug` | boolean | false | - |

**Returns:** *Promise‹unknown›*

___

### `Const` _sleepSync

▸ **_sleepSync**(`milliseconds`: number): *void*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:99

Block execution for specified number of milliseconds, synchronously.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`milliseconds` | number | the delay  |

**Returns:** *void*

___

### `Const` _timer

▸ **_timer**(`name`: string): *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:112

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

▸ **appendQueryParams**(`path`: string, `queryParams`: any, `arrayFormat`: [QueryStringArrayFormat](enums/querystringarrayformat.md), `arrayFormatSeparator`: string | undefined): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:23

Appends the supplied query params object as a query string to path. Even if path is null.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | string | - | Existing path (can be null) |
`queryParams` | any | - | Object to transform into query string |
`arrayFormat` | [QueryStringArrayFormat](enums/querystringarrayformat.md) | QueryStringArrayFormat.Index | Format to serialize arrays to a query string with. Defaults to "index". |
`arrayFormatSeparator` | string &#124; undefined | undefined | Seaparator character to use if using arrayFormat="separator"  |

**Returns:** *string*

___

### `Const` changeCultureCode

▸ **changeCultureCode**(`cultureCode`: string): *Promise‹TFunction›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:41

Updates application's configured language used for translations

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cultureCode` | string | RFC-4646 culture code  |

**Returns:** *Promise‹TFunction›*

___

### `Const` cultureCodeFromQueryString

▸ **cultureCodeFromQueryString**(): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:44

**Returns:** *string*

___

### `Const` cultureFactory

▸ **cultureFactory**<**TResources**>(`base`: [Culture](interfaces/culture.md)‹any›, `culture`: Partial‹[Culture](interfaces/culture.md)‹TResources››): *[Culture](interfaces/culture.md)‹TResources›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:54

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:59

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:72

Returns currently configured RFC-4646 culture code

**Returns:** *string*

___

### `Const` defaultCultureCode

▸ **defaultCultureCode**(): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:74

**Returns:** *string*

___

### `Const` detectCultureCode

▸ **detectCultureCode**(): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:81

Detect current language for which to provide translations

**Returns:** *string*

string current RFC-4646 culture code

___

### `Const` filename

▸ **filename**(`value?`: undefined | string): *string | undefined*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:21

Returns the filename from the supplied string, including extension

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *string | undefined*

___

### `Const` getUrl

▸ **getUrl**(`path`: string, `pathParams?`: any): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:61

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:71

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:31

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:104

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:91

Determines if supplied url is an absolute url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string |   |

**Returns:** *boolean*

___

### `Const` isDevelopment

▸ **isDevelopment**(): *boolean*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/environment-utils.ts:10

Function to return whether or not the current environment is development.

**Returns:** *boolean*

___

### `Const` isEmpty

▸ **isEmpty**(`value?`: undefined | string): *boolean*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:42

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:50

Validates a given string matches a valid email format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *boolean*

___

### `Const` join

▸ **join**(`values`: string[], `separator`: string): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:61

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

▸ **queryStringToObject**<**T**>(`queryString`: string, `arrayFormat`: [QueryStringArrayFormat](enums/querystringarrayformat.md), `parseNumbers`: boolean, `parseBooleans`: boolean): *T*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:101

Parse a query string and return an object of type T

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string | - | current query string |
`arrayFormat` | [QueryStringArrayFormat](enums/querystringarrayformat.md) | QueryStringArrayFormat.Index | format to parse arrays from |
`parseNumbers` | boolean | true | convert numbers to number type from string |
`parseBooleans` | boolean | true | convert booleans to boolean type from string  |

**Returns:** *T*

___

### `Const` registerPromiseFinallyPolyfill

▸ **registerPromiseFinallyPolyfill**(): *void*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/polyfill-utils.ts:9

Promise.finally is not natively supported in Internet Explorer.

**Returns:** *void*

___

### `Const` replacePathParams

▸ **replacePathParams**(`path`: string, `pathParams`: any): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:120

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/environment-utils.ts:19

Conditionally runs the given function, depending on whether the current environment is development or not.

**Parameters:**

▪ **fn**: *function*

Function to be run in a development environment only.

▸ (): *any*

**Returns:** *void*

___

### `Const` translate

▸ **translate**(`key`: string, `options?`: any): *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:133

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

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`truncateAtPos` | number |

**Returns:** *string*

## Object literals

### `Const` BaseEnglishUnitedStates

### ▪ **BaseEnglishUnitedStates**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/cultures/base-english-united-states.ts:4

###  code

• **code**: *string* = Rfc4646LanguageCodes.EN_US

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/cultures/base-english-united-states.ts:5

###  resources

• **resources**: *null* = null

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/cultures/base-english-united-states.ts:6

___

### `Const` BaseSpanishSpain

### ▪ **BaseSpanishSpain**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/cultures/base-spanish-spain.ts:4

###  code

• **code**: *string* = Rfc4646LanguageCodes.ES_ES

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/cultures/base-spanish-spain.ts:5

###  resources

• **resources**: *null* = null

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/cultures/base-spanish-spain.ts:6

___

### `Const` BrowserUtils

### ▪ **BrowserUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:24

###  isIE

• **isIE**: *[_isIE](README.md#const-_isie)* = _isIE

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:25

###  isNotIE

• **isNotIE**: *[_isNotIE](README.md#const-_isnotie)* = _isNotIE

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/browser-utils.ts:26

___

### `Const` CollectionUtils

### ▪ **CollectionUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:191

###  difference

• **difference**: *difference* = _.difference

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:192

###  equalsBy

• **equalsBy**: *[_equalsBy](README.md#const-_equalsby)* = _equalsBy

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:193

###  first

• **first**: *head* = _.head

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:194

###  flattenDeep

• **flattenDeep**: *flattenDeep* = _.flattenDeep

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:195

###  hasValues

• **hasValues**: *[_hasValues](README.md#const-_hasvalues)* = _hasValues

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:196

###  isEmpty

• **isEmpty**: *[_isEmpty](README.md#const-_isempty)* = _isEmpty

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:197

###  isNotEmpty

• **isNotEmpty**: *[_isNotEmpty](README.md#const-_isnotempty)* = _isNotEmpty

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:198

###  length

• **length**: *[_length](README.md#const-_length)* = _length

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:199

###  removeElementAt

• **removeElementAt**: *[_removeElementAt](README.md#const-_removeelementat)* = _removeElementAt

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:200

###  replaceElementAt

• **replaceElementAt**: *[_replaceElementAt](README.md#const-_replaceelementat)* = _replaceElementAt

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:201

###  sample

• **sample**: *sample* = _.sample

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:202

###  sampleSize

• **sampleSize**: *sampleSize* = _.sampleSize

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:203

###  take

• **take**: *take* = _.take

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/collection-utils.ts:204

___

### `Const` CoreUtils

### ▪ **CoreUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:138

###  bindAll

• **bindAll**: *bindAll* = _.bindAll

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:139

###  curry

• **curry**: *Curry* = _.curry

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:140

###  enumToArray

• **enumToArray**: *[_enumToArray](README.md#const-_enumtoarray)* = _enumToArray

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:141

###  getRandomEnum

• **getRandomEnum**: *[_getRandomEnum](README.md#const-_getrandomenum)* = _getRandomEnum

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:142

###  memoize

• **memoize**: *object* = _.memoize

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:143

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

###  merge

• **merge**: *merge* = _.merge

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:144

###  numericEnumToPojo

• **numericEnumToPojo**: *[_numericEnumToPojo](README.md#const-_numericenumtopojo)* = _numericEnumToPojo

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:145

###  objectToArray

• **objectToArray**: *[_objectToArray](README.md#const-_objecttoarray)* = _objectToArray

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:146

###  range

• **range**: *range* = _.range

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:147

###  sleep

• **sleep**: *[_sleep](README.md#const-_sleep)* = _sleep

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:148

###  sleepSync

• **sleepSync**: *[_sleepSync](README.md#const-_sleepsync)* = _sleepSync

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:149

###  throttle

• **throttle**: *throttle* = _.throttle

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:150

###  timer

• **timer**: *[_timer](README.md#const-_timer)* = _timer

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:151

###  times

• **times**: *times* = _.times

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/core-utils.ts:152

___

### `Const` DefaultScrollOptions

### ▪ **DefaultScrollOptions**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:9

###  behavior

• **behavior**: *"auto"* = "auto"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:10

###  block

• **block**: *"start"* = "start"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:11

###  inline

• **inline**: *"nearest"* = "nearest"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:12

___

### `Const` EmailConstants

### ▪ **EmailConstants**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/email-constants.ts:4

These values are from the RFC-5231 Email specification

###  addressMaxLength

• **addressMaxLength**: *number* = 250

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/email-constants.ts:5

###  subjectMaxLength

• **subjectMaxLength**: *number* = 78

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/email-constants.ts:6

___

### `Const` EnvironmentUtils

### ▪ **EnvironmentUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/environment-utils.ts:33

###  isDevelopment

• **isDevelopment**: *[isDevelopment](README.md#const-isdevelopment)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/environment-utils.ts:34

###  runIfDevelopment

• **runIfDevelopment**: *[runIfDevelopment](README.md#const-runifdevelopment)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/environment-utils.ts:35

___

### `Const` FactoryType

### ▪ **FactoryType**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/tests/factories/factory-type.ts:1

###  ResultErrorRecord

• **ResultErrorRecord**: *string* = "ResultErrorRecord"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/tests/factories/factory-type.ts:2

###  ResultRecord

• **ResultRecord**: *string* = "ResultRecord"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/tests/factories/factory-type.ts:3

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/tests/factories/factory-type.ts:4

___

### `Const` LocalizationUtils

### ▪ **LocalizationUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:148

###  changeCultureCode

• **changeCultureCode**: *[changeCultureCode](README.md#const-changeculturecode)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:149

###  cultureCodeFromQueryString

• **cultureCodeFromQueryString**: *[cultureCodeFromQueryString](README.md#const-culturecodefromquerystring)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:150

###  cultureFactory

• **cultureFactory**: *[cultureFactory](README.md#const-culturefactory)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:151

###  currentCultureCode

• **currentCultureCode**: *[currentCultureCode](README.md#const-currentculturecode)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:152

###  defaultCultureCode

• **defaultCultureCode**: *[defaultCultureCode](README.md#const-defaultculturecode)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:153

###  detectCultureCode

• **detectCultureCode**: *[detectCultureCode](README.md#const-detectculturecode)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:154

###  errorCultureIsRequired

• **errorCultureIsRequired**: *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:155

###  initialize

• **initialize**: *[initialize](README.md#const-initialize)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:156

###  routeParam

• **routeParam**: *string*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:157

###  t

• **t**: *[translate](README.md#const-translate)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:158

###  translate

• **translate**: *[translate](README.md#const-translate)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/localization-utils.ts:159

___

### `Const` PolyfillUtils

### ▪ **PolyfillUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/polyfill-utils.ts:31

###  registerPromiseFinallyPolyfill

• **registerPromiseFinallyPolyfill**: *[registerPromiseFinallyPolyfill](README.md#const-registerpromisefinallypolyfill)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/polyfill-utils.ts:32

___

### `Const` PromiseFactory

### ▪ **PromiseFactory**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/promise-factory.ts:7

###  cancellable

▸ **cancellable**<**T**>(`promise`: Promise‹T›): *[CancellablePromise](README.md#cancellablepromise)‹T›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/promise-factory.ts:8

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *[CancellablePromise](README.md#cancellablepromise)‹T›*

###  pending

▸ **pending**(): *Promise‹unknown›*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/promise-factory.ts:32

Creates a new and empty/unfullfilled promise to cancel further
chained promise operations

**Returns:** *Promise‹unknown›*

___

### `Const` RecordUtils

### ▪ **RecordUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/record-utils.ts:35

###  ensureRecord

• **ensureRecord**: *[_ensureRecord](README.md#const-_ensurerecord)* = _ensureRecord

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/record-utils.ts:36

###  isRecord

• **isRecord**: *[_isRecord](README.md#const-_isrecord)* = _isRecord

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/record-utils.ts:37

___

### `Const` Rfc4646LanguageCodes

### ▪ **Rfc4646LanguageCodes**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:1

###  AF_ZA

• **AF_ZA**: *string* = "af-ZA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:2

###  AR_AE

• **AR_AE**: *string* = "ar-AE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:18

###  AR_BH

• **AR_BH**: *string* = "ar-BH"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:5

###  AR_DZ

• **AR_DZ**: *string* = "ar-DZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:4

###  AR_EG

• **AR_EG**: *string* = "ar-EG"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:6

###  AR_IQ

• **AR_IQ**: *string* = "ar-IQ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:7

###  AR_JO

• **AR_JO**: *string* = "ar-JO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:8

###  AR_KW

• **AR_KW**: *string* = "ar-KW"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:9

###  AR_LB

• **AR_LB**: *string* = "ar-LB"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:10

###  AR_LY

• **AR_LY**: *string* = "ar-LY"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:11

###  AR_MA

• **AR_MA**: *string* = "ar-MA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:12

###  AR_OM

• **AR_OM**: *string* = "ar-OM"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:13

###  AR_QA

• **AR_QA**: *string* = "ar-QA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:14

###  AR_SA

• **AR_SA**: *string* = "ar-SA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:15

###  AR_SY

• **AR_SY**: *string* = "ar-SY"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:16

###  AR_TN

• **AR_TN**: *string* = "ar-TN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:17

###  AR_YE

• **AR_YE**: *string* = "ar-YE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:19

###  BE_BY

• **BE_BY**: *string* = "be-BY"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:24

###  BG_BG

• **BG_BG**: *string* = "bg-BG"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:25

###  CA_ES

• **CA_ES**: *string* = "ca-ES"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:26

###  CS_CZ

• **CS_CZ**: *string* = "cs-CZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:35

###  CY_AZ_AZ

• **CY_AZ_AZ**: *string* = "Cy-az-AZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:21

###  CY_SR_SP

• **CY_SR_SP**: *string* = "Cy-sr-SP"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:101

###  CY_UZ_UZ

• **CY_UZ_UZ**: *string* = "Cy-uz-UZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:135

###  DA_DK

• **DA_DK**: *string* = "da-DK"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:36

###  DE_AT

• **DE_AT**: *string* = "de-AT"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:65

###  DE_CH

• **DE_CH**: *string* = "de-CH"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:69

###  DE_DE

• **DE_DE**: *string* = "de-DE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:66

###  DE_LI

• **DE_LI**: *string* = "de-LI"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:67

###  DE_LU

• **DE_LU**: *string* = "de-LU"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:68

###  DIV_MV

• **DIV_MV**: *string* = "div-MV"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:37

###  EL_GR

• **EL_GR**: *string* = "el-GR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:70

###  EN_AU

• **EN_AU**: *string* = "en-AU"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:40

###  EN_BZ

• **EN_BZ**: *string* = "en-BZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:41

###  EN_CA

• **EN_CA**: *string* = "en-CA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:42

###  EN_CB

• **EN_CB**: *string* = "en-CB"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:43

###  EN_GB

• **EN_GB**: *string* = "en-GB"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:50

###  EN_IE

• **EN_IE**: *string* = "en-IE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:44

###  EN_JM

• **EN_JM**: *string* = "en-JM"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:45

###  EN_NZ

• **EN_NZ**: *string* = "en-NZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:46

###  EN_PH

• **EN_PH**: *string* = "en-PH"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:47

###  EN_TT

• **EN_TT**: *string* = "en-TT"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:49

###  EN_US

• **EN_US**: *string* = "en-US"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:51

###  EN_ZA

• **EN_ZA**: *string* = "en-ZA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:48

###  EN_ZW

• **EN_ZW**: *string* = "en-ZW"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:52

###  ES_AR

• **ES_AR**: *string* = "es-AR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:105

###  ES_BO

• **ES_BO**: *string* = "es-BO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:106

###  ES_CL

• **ES_CL**: *string* = "es-CL"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:107

###  ES_CO

• **ES_CO**: *string* = "es-CO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:108

###  ES_CR

• **ES_CR**: *string* = "es-CR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:109

###  ES_DO

• **ES_DO**: *string* = "es-DO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:110

###  ES_EC

• **ES_EC**: *string* = "es-EC"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:111

###  ES_ES

• **ES_ES**: *string* = "es-ES"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:121

###  ES_GT

• **ES_GT**: *string* = "es-GT"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:113

###  ES_HN

• **ES_HN**: *string* = "es-HN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:114

###  ES_MX

• **ES_MX**: *string* = "es-MX"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:115

###  ES_NI

• **ES_NI**: *string* = "es-NI"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:116

###  ES_PA

• **ES_PA**: *string* = "es-PA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:117

###  ES_PE

• **ES_PE**: *string* = "es-PE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:119

###  ES_PR

• **ES_PR**: *string* = "es-PR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:120

###  ES_PY

• **ES_PY**: *string* = "es-PY"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:118

###  ES_SV

• **ES_SV**: *string* = "es-SV"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:112

###  ES_UY

• **ES_UY**: *string* = "es-UY"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:122

###  ES_VE

• **ES_VE**: *string* = "es-VE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:123

###  ET_EE

• **ET_EE**: *string* = "et-EE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:53

###  EU_ES

• **EU_ES**: *string* = "eu-ES"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:23

###  FA_IR

• **FA_IR**: *string* = "fa-IR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:55

###  FI_FI

• **FI_FI**: *string* = "fi-FI"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:56

###  FO_FO

• **FO_FO**: *string* = "fo-FO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:54

###  FR_BE

• **FR_BE**: *string* = "fr-BE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:57

###  FR_CA

• **FR_CA**: *string* = "fr-CA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:58

###  FR_CH

• **FR_CH**: *string* = "fr-CH"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:62

###  FR_FR

• **FR_FR**: *string* = "fr-FR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:59

###  FR_LU

• **FR_LU**: *string* = "fr-LU"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:60

###  FR_MC

• **FR_MC**: *string* = "fr-MC"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:61

###  GL_ES

• **GL_ES**: *string* = "gl-ES"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:63

###  GU_IN

• **GU_IN**: *string* = "gu-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:71

###  HE_IL

• **HE_IL**: *string* = "he-IL"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:72

###  HI_IN

• **HI_IN**: *string* = "hi-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:73

###  HR_HR

• **HR_HR**: *string* = "hr-HR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:34

###  HU_HU

• **HU_HU**: *string* = "hu-HU"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:74

###  HY_AM

• **HY_AM**: *string* = "hy-AM"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:20

###  ID_ID

• **ID_ID**: *string* = "id-ID"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:76

###  IS_IS

• **IS_IS**: *string* = "is-IS"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:75

###  IT_CH

• **IT_CH**: *string* = "it-CH"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:78

###  IT_IT

• **IT_IT**: *string* = "it-IT"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:77

###  JA_JP

• **JA_JP**: *string* = "ja-JP"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:79

###  KA_GE

• **KA_GE**: *string* = "ka-GE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:64

###  KK_KZ

• **KK_KZ**: *string* = "kk-KZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:81

###  KN_IN

• **KN_IN**: *string* = "kn-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:80

###  KOK_IN

• **KOK_IN**: *string* = "kok-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:82

###  KO_KR

• **KO_KR**: *string* = "ko-KR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:83

###  KY_KZ

• **KY_KZ**: *string* = "ky-KZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:84

###  LT_AZ_AZ

• **LT_AZ_AZ**: *string* = "Lt-az-AZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:22

###  LT_LT

• **LT_LT**: *string* = "lt-LT"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:86

###  LT_SR_SP

• **LT_SR_SP**: *string* = "Lt-sr-SP"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:102

###  LT_UZ_UZ

• **LT_UZ_UZ**: *string* = "Lt-uz-UZ"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:136

###  LV_LV

• **LV_LV**: *string* = "lv-LV"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:85

###  MK_MK

• **MK_MK**: *string* = "mk-MK"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:87

###  MN_MN

• **MN_MN**: *string* = "mn-MN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:91

###  MR_IN

• **MR_IN**: *string* = "mr-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:90

###  MS_BN

• **MS_BN**: *string* = "ms-BN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:88

###  MS_MY

• **MS_MY**: *string* = "ms-MY"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:89

###  NB_NO

• **NB_NO**: *string* = "nb-NO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:92

###  NL_BE

• **NL_BE**: *string* = "nl-BE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:38

###  NL_NL

• **NL_NL**: *string* = "nl-NL"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:39

###  NN_NO

• **NN_NO**: *string* = "nn-NO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:93

###  PA_IN

• **PA_IN**: *string* = "pa-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:97

###  PL_PL

• **PL_PL**: *string* = "pl-PL"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:94

###  PT_BR

• **PT_BR**: *string* = "pt-BR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:95

###  PT_PT

• **PT_PT**: *string* = "pt-PT"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:96

###  RO_RO

• **RO_RO**: *string* = "ro-RO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:98

###  RU_RU

• **RU_RU**: *string* = "ru-RU"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:99

###  SA_IN

• **SA_IN**: *string* = "sa-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:100

###  SK_SK

• **SK_SK**: *string* = "sk-SK"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:103

###  SL_SI

• **SL_SI**: *string* = "sl-SI"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:104

###  SQ_AL

• **SQ_AL**: *string* = "sq-AL"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:3

###  SV_FI

• **SV_FI**: *string* = "sv-FI"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:125

###  SV_SE

• **SV_SE**: *string* = "sv-SE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:126

###  SW_KE

• **SW_KE**: *string* = "sw-KE"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:124

###  SYR_SY

• **SYR_SY**: *string* = "syr-SY"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:127

###  TA_IN

• **TA_IN**: *string* = "ta-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:128

###  TE_IN

• **TE_IN**: *string* = "te-IN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:130

###  TH_TH

• **TH_TH**: *string* = "th-TH"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:131

###  TR_TR

• **TR_TR**: *string* = "tr-TR"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:132

###  TT_RU

• **TT_RU**: *string* = "tt-RU"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:129

###  UK_UA

• **UK_UA**: *string* = "uk-UA"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:133

###  UR_PK

• **UR_PK**: *string* = "ur-PK"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:134

###  VI_VN

• **VI_VN**: *string* = "vi-VN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:137

###  ZH_CHS

• **ZH_CHS**: *string* = "zh-CHS"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:32

###  ZH_CHT

• **ZH_CHT**: *string* = "zh-CHT"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:33

###  ZH_CN

• **ZH_CN**: *string* = "zh-CN"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:27

###  ZH_HK

• **ZH_HK**: *string* = "zh-HK"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:28

###  ZH_MO

• **ZH_MO**: *string* = "zh-MO"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:29

###  ZH_SG

• **ZH_SG**: *string* = "zh-SG"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:30

###  ZH_TW

• **ZH_TW**: *string* = "zh-TW"

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/constants/rfc4646-language-codes.ts:31

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:146

###  appendQueryParams

• **appendQueryParams**: *[appendQueryParams](README.md#const-appendqueryparams)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:147

###  getUrl

• **getUrl**: *[getUrl](README.md#const-geturl)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:148

###  getUrlFromPath

• **getUrlFromPath**: *[getUrlFromPath](README.md#const-geturlfrompath)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:149

###  isAbsoluteUrl

• **isAbsoluteUrl**: *[isAbsoluteUrl](README.md#const-isabsoluteurl)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:150

###  queryStringToObject

• **queryStringToObject**: *[queryStringToObject](README.md#const-querystringtoobject)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:151

###  replacePathParams

• **replacePathParams**: *[replacePathParams](README.md#const-replacepathparams)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/route-utils.ts:152

___

### `Const` ScrollUtils

### ▪ **ScrollUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:91

###  scrollToElementById

• **scrollToElementById**: *[_scrollToElementById](README.md#const-_scrolltoelementbyid)* = _scrollToElementById

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:92

###  scrollToHash

• **scrollToHash**: *[_scrollToHash](README.md#const-_scrolltohash)* = _scrollToHash

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/scroll-utils.ts:93

___

### `Const` ServiceUtils

### ▪ **ServiceUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:159

###  configure

• **configure**: *[_configure](README.md#const-_configure)* = _configure

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:160

###  configureCultureCode

• **configureCultureCode**: *[_configureCultureCode](README.md#const-_configureculturecode)* = _configureCultureCode

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:161

###  mapAxiosResponse

• **mapAxiosResponse**: *[_mapAxiosResponse](README.md#const-_mapaxiosresponse)* = _mapAxiosResponse

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:162

###  mapPagedAxiosResponse

• **mapPagedAxiosResponse**: *[_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)* = _mapPagedAxiosResponse

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/service-utils.ts:163

___

### `Const` StringUtils

### ▪ **StringUtils**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:87

###  camelCase

• **camelCase**: *camelCase* = _.camelCase

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:88

###  capitalize

• **capitalize**: *capitalize* = _.capitalize

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:89

###  filename

• **filename**: *[filename](README.md#const-filename)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:90

###  hasValue

• **hasValue**: *[hasValue](README.md#const-hasvalue)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:91

###  isEmpty

• **isEmpty**: *[isEmpty](README.md#const-isempty)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:92

###  isValidEmail

• **isValidEmail**: *[isValidEmail](README.md#const-isvalidemail)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:93

###  join

• **join**: *[join](README.md#const-join)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:94

###  lowerFirst

• **lowerFirst**: *lowerFirst* = _.lowerFirst

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:95

###  pad

• **pad**: *pad* = _.pad

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:96

###  padEnd

• **padEnd**: *padEnd* = _.padEnd

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:97

###  padStart

• **padStart**: *padStart* = _.padStart

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:98

###  pluralize

• **pluralize**: *pluralize* = Humanize.pluralize

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:99

###  repeat

• **repeat**: *repeat* = _.repeat

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:100

###  snakeCase

• **snakeCase**: *snakeCase* = _.snakeCase

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:101

###  startCase

• **startCase**: *startCase* = _.startCase

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:102

###  template

• **template**: *template* = _.template

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:103

###  truncateRight

• **truncateRight**: *[truncateRight](README.md#const-truncateright)*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:104

###  upperFirst

• **upperFirst**: *upperFirst* = _.upperFirst

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:105

###  words

• **words**: *words* = _.words

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/utilities/string-utils.ts:106

___

### `Const` defaultValues

### ▪ **defaultValues**: *object*

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/view-models/result-error-record.ts:5

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/view-models/result-record.ts:8

###  errors

• **errors**: *undefined* = undefined

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/view-models/result-record.ts:9

###  key

• **key**: *undefined* = undefined

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/view-models/result-error-record.ts:6

###  message

• **message**: *undefined* = undefined

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/view-models/result-error-record.ts:7

###  resultObject

• **resultObject**: *undefined* = undefined

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/view-models/result-record.ts:10

###  type

• **type**: *[Error](enums/errortype.md#error)* = ErrorType.Error

Defined in clients/andculture/kevinbusch-AndcultureCode.JavaScript.Core/src/view-models/result-error-record.ts:8
