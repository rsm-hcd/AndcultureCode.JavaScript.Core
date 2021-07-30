[andculturecode-javascript-core](README.md)

# andculturecode-javascript-core

## Index

### Namespaces

* [__global](README.md#__global)

### Enumerations

* [AnchorTargetTypes](enums/anchortargettypes.md)
* [AriaRole](enums/ariarole.md)
* [ConnectionType](enums/connectiontype.md)
* [ContentType](enums/contenttype.md)
* [EffectiveConnectionType](enums/effectiveconnectiontype.md)
* [ErrorType](enums/errortype.md)
* [HttpHeader](enums/httpheader.md)
* [HttpVerb](enums/httpverb.md)
* [NavigatorConnectionVariant](enums/navigatorconnectionvariant.md)
* [QueryStringArrayFormat](enums/querystringarrayformat.md)
* [UnitOfTime](enums/unitoftime.md)

### Classes

* [Do](classes/do.md)
* [DoSync](classes/dosync.md)
* [ResultErrorRecord](classes/resulterrorrecord.md)
* [ResultRecord](classes/resultrecord.md)

### Interfaces

* [Auditable](interfaces/auditable.md)
* [Culture](interfaces/culture.md)
* [CultureParams](interfaces/cultureparams.md)
* [DoTryConfig](interfaces/dotryconfig.md)
* [Entity](interfaces/entity.md)
* [KeyValuePair](interfaces/keyvaluepair.md)
* [LocalizationInitOptions](interfaces/localizationinitoptions.md)
* [Navigator](interfaces/navigator.md)
* [NetworkConnection](interfaces/networkconnection.md)
* [NetworkInformation](interfaces/networkinformation.md)
* [PagedQuery](interfaces/pagedquery.md)
* [PagedResult](interfaces/pagedresult.md)
* [Result](interfaces/result.md)
* [ResultError](interfaces/resulterror.md)
* [Role](interfaces/role.md)
* [ScrollOptions](interfaces/scrolloptions.md)
* [ServiceResponse](interfaces/serviceresponse.md)
* [User](interfaces/user.md)
* [Window](interfaces/window.md)

### Type aliases

* [AsyncWorkload](README.md#asyncworkload)
* [CancellablePromise](README.md#cancellablepromise)
* [CatchResultHandler](README.md#catchresulthandler)
* [Constructor](README.md#constructor)
* [FinallyHandler](README.md#finallyhandler)
* [OmitKeys](README.md#omitkeys)
* [RequiredOr](README.md#requiredor)
* [RequiredOrUndefined](README.md#requiredorundefined)
* [SyncWorkload](README.md#syncworkload)
* [TimerFunctionReturn](README.md#timerfunctionreturn)

### Variables

* [NetworkInformationUtils](README.md#const-networkinformationutils)
* [REGEX_VALID_CULTURE_CODE](README.md#const-regex_valid_culture_code)
* [REGEX_VALID_EMAIL](README.md#const-regex_valid_email)
* [ResultErrorRecordFactory](README.md#const-resulterrorrecordfactory)
* [ResultRecordFactory](README.md#const-resultrecordfactory)
* [VideoResolutions](README.md#const-videoresolutions)
* [_currentCultureCode](README.md#let-_currentculturecode)
* [_defaultApiUrl](README.md#const-_defaultapiurl)
* [_routeParamRegEx](README.md#const-_routeparamregex)
* [errorCultureIsRequired](README.md#const-errorcultureisrequired)
* [routeParam](README.md#const-routeparam)
* [t](README.md#const-t)

### Array Functions

* [intersectionWith](README.md#const-intersectionwith)

### Other Functions

* [_configure](README.md#const-_configure)
* [_configureCultureCode](README.md#const-_configureculturecode)
* [_configureHeaders](README.md#const-_configureheaders)
* [_configureInterceptors](README.md#const-_configureinterceptors)
* [_isIE](README.md#const-_isie)
* [_isNotIE](README.md#const-_isnotie)
* [_mapAxiosResponse](README.md#const-_mapaxiosresponse)
* [_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)
* [_scrollToElementById](README.md#const-_scrolltoelementbyid)
* [_scrollToHash](README.md#const-_scrolltohash)
* [appendQueryParams](README.md#const-appendqueryparams)
* [buildNetworkInformationUtils](README.md#buildnetworkinformationutils)
* [camelCase](README.md#const-camelcase)
* [capitalize](README.md#const-capitalize)
* [changeCultureCode](README.md#const-changeculturecode)
* [cultureCodeFromQueryString](README.md#const-culturecodefromquerystring)
* [cultureCodeFromRoute](README.md#const-culturecodefromroute)
* [cultureFactory](README.md#const-culturefactory)
* [culturesToResources](README.md#const-culturestoresources)
* [currentCultureCode](README.md#const-currentculturecode)
* [defaultCultureCode](README.md#const-defaultculturecode)
* [detectCultureCode](README.md#const-detectculturecode)
* [difference](README.md#const-difference)
* [equalsBy](README.md#const-equalsby)
* [filename](README.md#const-filename)
* [first](README.md#const-first)
* [flattenDeep](README.md#const-flattendeep)
* [getUrl](README.md#const-geturl)
* [getUrlFromPath](README.md#const-geturlfrompath)
* [hasValue](README.md#const-hasvalue)
* [hasValues](README.md#const-hasvalues)
* [initialize](README.md#const-initialize)
* [intersection](README.md#const-intersection)
* [isAbsoluteUrl](README.md#const-isabsoluteurl)
* [isDevelopment](README.md#const-isdevelopment)
* [isEmpty](README.md#const-isempty)
* [isNotEmpty](README.md#const-isnotempty)
* [isValidCultureCode](README.md#const-isvalidculturecode)
* [isValidEmail](README.md#const-isvalidemail)
* [join](README.md#const-join)
* [length](README.md#const-length)
* [lowerFirst](README.md#const-lowerfirst)
* [pad](README.md#const-pad)
* [padEnd](README.md#const-padend)
* [padStart](README.md#const-padstart)
* [pluralize](README.md#const-pluralize)
* [queryStringToObject](README.md#const-querystringtoobject)
* [registerPromiseFinallyPolyfill](README.md#const-registerpromisefinallypolyfill)
* [removeElementAt](README.md#const-removeelementat)
* [repeat](README.md#const-repeat)
* [replaceElementAt](README.md#const-replaceelementat)
* [replacePathParams](README.md#const-replacepathparams)
* [runIfDevelopment](README.md#const-runifdevelopment)
* [sample](README.md#const-sample)
* [sampleSize](README.md#const-samplesize)
* [snakeCase](README.md#const-snakecase)
* [sortByString](README.md#const-sortbystring)
* [startCase](README.md#const-startcase)
* [take](README.md#const-take)
* [template](README.md#const-template)
* [translate](README.md#const-translate)
* [truncateRight](README.md#const-truncateright)
* [upperFirst](README.md#const-upperfirst)
* [words](README.md#const-words)

### Object literals

* [AuditableDefaultValues](README.md#const-auditabledefaultvalues)
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
* [defaultInitOptions](README.md#const-defaultinitoptions)
* [defaultValues](README.md#const-defaultvalues)
* [detectionOptions](README.md#const-detectionoptions)

## Namespaces

###  __global

• **__global**:

*Defined in [src/utilities/browser-utils.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L4)*

Allows us to use the documentMode for feature detection on globalThis.Document

###  Document

• **Document**:

*Defined in [src/utilities/browser-utils.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L5)*

### `Optional` documentMode

• **documentMode**? : *any*

*Defined in [src/utilities/browser-utils.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L6)*

## Type aliases

###  AsyncWorkload

Ƭ **AsyncWorkload**: *function*

*Defined in [src/types/async-workload.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/async-workload.ts#L4)*

Represents an asynchronous method reference.

#### Type declaration:

▸ (): *Promise‹T›*

___

###  CancellablePromise

Ƭ **CancellablePromise**: *object*

*Defined in [src/types/cancellable-promise.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/cancellable-promise.ts#L1)*

#### Type declaration:

* **cancel**(): *function*

  * (): *void*

* **promise**: *Promise‹T›*

___

###  CatchResultHandler

Ƭ **CatchResultHandler**: *function*

*Defined in [src/types/catch-result-handler.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/catch-result-handler.ts#L6)*

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

*Defined in [src/types/constructor.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/constructor.ts#L4)*

Represents the constructor of a typed object which can be used for instantiation.

#### Type declaration:

___

###  FinallyHandler

Ƭ **FinallyHandler**: *function*

*Defined in [src/types/finally-handler.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/finally-handler.ts#L4)*

Handler for Do.try().finally(); Runs whether an error occurred or not.

#### Type declaration:

▸ (): *void*

___

###  OmitKeys

Ƭ **OmitKeys**: *Omit‹TSource, keyof TExclusion›*

*Defined in [src/types/omit-keys.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/omit-keys.ts#L8)*

Omit all keys from `TSource` that intersect with `TExclusion`

___

###  RequiredOr

Ƭ **RequiredOr**: *object*

*Defined in [src/types/required-or.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/required-or.ts#L8)*

Mark all properties of `T` as required from the original type _or_ another type

#### Type declaration:

___

###  RequiredOrUndefined

Ƭ **RequiredOrUndefined**: *[RequiredOr](README.md#requiredor)‹T, undefined›*

*Defined in [src/types/required-or-undefined.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/required-or-undefined.ts#L10)*

Mark all properties of `T` as required or explicitly set as undefined

___

###  SyncWorkload

Ƭ **SyncWorkload**: *function*

*Defined in [src/types/sync-workload.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/sync-workload.ts#L4)*

Represents a synchronous method reference.

#### Type declaration:

▸ (): *T*

___

###  TimerFunctionReturn

Ƭ **TimerFunctionReturn**: *object*

*Defined in [src/types/timer-function-return.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/types/timer-function-return.ts#L1)*

#### Type declaration:

* **stop**(`log?`: undefined | false | true): *number*

## Variables

### `Const` NetworkInformationUtils

• **NetworkInformationUtils**: *object* = buildNetworkInformationUtils(
    typeof window !== "undefined" ? window : undefined
)

*Defined in [src/utilities/network-information-utils.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/network-information-utils.ts#L50)*

#### Type declaration:

* **getNavigatorConnection**(): *[NetworkInformation](interfaces/networkinformation.md) | undefined*

* **getNetworkConnection**(): *[NetworkConnection](interfaces/networkconnection.md) | undefined*

___

### `Const` REGEX_VALID_CULTURE_CODE

• **REGEX_VALID_CULTURE_CODE**: *RegExp‹›* = /^([a-zA-Z]{2}((-|_)[a-zA-Z]{2})?)$/

*Defined in [src/utilities/string-utils.ts:21](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L21)*

Validates a culture code format. Based off of https://regexr.com/3faf5, but looser to allow dashes
or underscores as separators.

**`example`** 
en
en-US
en_US
en_us
EN_US

___

### `Const` REGEX_VALID_EMAIL

• **REGEX_VALID_EMAIL**: *RegExp‹›* = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

*Defined in [src/utilities/string-utils.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L22)*

___

### `Const` ResultErrorRecordFactory

• **ResultErrorRecordFactory**: *IFactory‹[ResultErrorRecord](classes/resulterrorrecord.md)‹››* = Factory.define<ResultErrorRecord>(
    FactoryType.ResultErrorRecord,
    ResultErrorRecord
)
    .sequence("key", (i: number) => `TEST_ERROR_KEY_${i}`)
    .sequence("message", (i: number) => `Test error message ${i}`)

*Defined in [src/tests/factories/result-error-record-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/tests/factories/result-error-record-factory.ts#L9)*

___

### `Const` ResultRecordFactory

• **ResultRecordFactory**: *IFactory‹[ResultRecord](classes/resultrecord.md)‹any››* = Factory.define<ResultRecord<any>>(
    FactoryType.ResultRecord,
    ResultRecord
)

*Defined in [src/tests/factories/result-record-factory.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/tests/factories/result-record-factory.ts#L9)*

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

*Defined in [src/constants/video-resolutions.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/video-resolutions.ts#L1)*

___

### `Let` _currentCultureCode

• **_currentCultureCode**: *string*

*Defined in [src/utilities/service-utils.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L16)*

___

### `Const` _defaultApiUrl

• **_defaultApiUrl**: *"/api/v1"* = "/api/v1"

*Defined in [src/utilities/service-utils.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L17)*

___

### `Const` _routeParamRegEx

• **_routeParamRegEx**: *RegExp‹›* = /(:[a-z_-]*)/gi

*Defined in [src/utilities/route-utils.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L8)*

___

### `Const` errorCultureIsRequired

• **errorCultureIsRequired**: *"Culture is required"* = "Culture is required"

*Defined in [src/utilities/localization-utils.ts:18](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L18)*

___

### `Const` routeParam

• **routeParam**: *"culture"* = "culture"

*Defined in [src/utilities/localization-utils.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L23)*

Key name for handling language selection in routing (ie. queryString, path, etc...)

___

### `Const` t

• **t**: *[translate](README.md#const-translate)* = translate

*Defined in [src/utilities/localization-utils.ts:163](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L163)*

Retrieve translation for given key in the currently configured language

**`param`** culture resource key

**`param`** object key/values for interpolation of dynamic values

## Array Functions

### `Const` intersectionWith

▸ **intersectionWith**<**T1**, **T2**>(`array`: [List](enums/ariarole.md#list)‹T1›, `values`: [List](enums/ariarole.md#list)‹T2›, `comparator`: Comparator2‹T1, T2›): *T1[]*

*Defined in [src/utilities/collection-utils.ts:187](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L187)*

Creates an array of unique `array` values not included in the other
provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
for equality comparisons.

**`example`** 

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.intersectionWith(objects, others, _.isEqual);
=> [{ 'x': 1, 'y': 2 }]

**Type parameters:**

▪ **T1**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`array` | [List](enums/ariarole.md#list)‹T1› |
`values` | [List](enums/ariarole.md#list)‹T2› |
`comparator` | Comparator2‹T1, T2› |

**Returns:** *T1[]*

Returns the new array of filtered values.

___

## Other Functions

### `Const` _configure

▸ **_configure**(`cultureCode?`: undefined | string, `onApiResponseError?`: undefined | function, `onApiResponseSuccess?`: undefined | function): *void*

*Defined in [src/utilities/service-utils.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L31)*

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

*Defined in [src/utilities/service-utils.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L46)*

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

*Defined in [src/utilities/service-utils.ts:66](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L66)*

Configure axios HTTP headers

**Returns:** *void*

___

### `Const` _configureInterceptors

▸ **_configureInterceptors**(`onApiResponseError?`: undefined | function, `onApiResponseSuccess?`: undefined | function): *void*

*Defined in [src/utilities/service-utils.ts:78](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L78)*

Configures axios global API interceptors

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onApiResponseError?` | undefined &#124; function | - |
`onApiResponseSuccess?` | undefined &#124; function |   |

**Returns:** *void*

___

### `Const` _isIE

▸ **_isIE**(): *boolean*

*Defined in [src/utilities/browser-utils.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L14)*

Returns true if the detected browser is Internet Explorer.

**Returns:** *boolean*

boolean

___

### `Const` _isNotIE

▸ **_isNotIE**(): *boolean*

*Defined in [src/utilities/browser-utils.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L22)*

Returns true if the brower is NOT Internet Explorer.

**Returns:** *boolean*

boolean

___

### `Const` _mapAxiosResponse

▸ **_mapAxiosResponse**<**TRecord**>(`recordType`: object, `axiosResponse`: AxiosResponse‹[Result](interfaces/result.md)‹TRecord››): *[ServiceResponse](interfaces/serviceresponse.md)‹TRecord›*

*Defined in [src/utilities/service-utils.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L93)*

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

*Defined in [src/utilities/service-utils.ts:121](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L121)*

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

### `Const` _scrollToElementById

▸ **_scrollToElementById**(`id`: string, `options`: [ScrollOptions](interfaces/scrolloptions.md)): *void*

*Defined in [src/utilities/scroll-utils.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L27)*

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

*Defined in [src/utilities/scroll-utils.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L73)*

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

### `Const` appendQueryParams

▸ **appendQueryParams**(`path`: string, `queryParams`: any, `arrayFormat`: [QueryStringArrayFormat](enums/querystringarrayformat.md), `arrayFormatSeparator`: string | undefined): *string*

*Defined in [src/utilities/route-utils.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L23)*

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

###  buildNetworkInformationUtils

▸ **buildNetworkInformationUtils**(`window?`: [Window](interfaces/window.md)): *object*

*Defined in [src/utilities/network-information-utils.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/network-information-utils.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`window?` | [Window](interfaces/window.md) |

**Returns:** *object*

* **getNavigatorConnection**(): *[NetworkInformation](interfaces/networkinformation.md) | undefined*

* **getNetworkConnection**(): *[NetworkConnection](interfaces/networkconnection.md) | undefined*

___

### `Const` camelCase

▸ **camelCase**(`string?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L36)*

Converts string to camel case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the camel cased string.

___

### `Const` capitalize

▸ **capitalize**(`string?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L44)*

Converts the first character of string to upper case and the remaining to lower case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to capitalize. |

**Returns:** *string*

Returns the capitalized string.

___

### `Const` changeCultureCode

▸ **changeCultureCode**(`cultureCode`: string): *Promise‹TFunction›*

*Defined in [src/utilities/localization-utils.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L50)*

Updates application's configured language used for translations

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cultureCode` | string | RFC-4646 culture code  |

**Returns:** *Promise‹TFunction›*

___

### `Const` cultureCodeFromQueryString

▸ **cultureCodeFromQueryString**(): *string*

*Defined in [src/utilities/localization-utils.ts:56](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L56)*

Returns the culture code from the querystring, ie `/login?culture=en-us`

**Returns:** *string*

___

### `Const` cultureCodeFromRoute

▸ **cultureCodeFromRoute**(): *string*

*Defined in [src/utilities/localization-utils.ts:64](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L64)*

Returns the culture code from the first position in the route, ie `/en-us/xyz`

**Returns:** *string*

___

### `Const` cultureFactory

▸ **cultureFactory**<**TResources**>(`base`: [Culture](interfaces/culture.md)‹any›, `culture`: Partial‹[Culture](interfaces/culture.md)‹TResources››): *[Culture](interfaces/culture.md)‹TResources›*

*Defined in [src/utilities/localization-utils.ts:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L71)*

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

*Defined in [src/utilities/localization-utils.ts:76](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L76)*

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

*Defined in [src/utilities/localization-utils.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L89)*

Returns currently configured RFC-4646 culture code

**Returns:** *string*

___

### `Const` defaultCultureCode

▸ **defaultCultureCode**(): *string*

*Defined in [src/utilities/localization-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L91)*

**Returns:** *string*

___

### `Const` detectCultureCode

▸ **detectCultureCode**(): *string*

*Defined in [src/utilities/localization-utils.ts:98](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L98)*

Detect and set current language for which to provide translations

**Returns:** *string*

string current RFC-4646 culture code

___

### `Const` difference

▸ **difference**<**T**>(`array`: [List](enums/ariarole.md#list)‹T› | null | undefined, ...`values`: Array‹[List](enums/ariarole.md#list)‹T››): *T[]*

*Defined in [src/utilities/collection-utils.ts:62](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L62)*

Creates an array of unique array values not included in the other provided arrays using SameValueZero for
equality comparisons.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](enums/ariarole.md#list)‹T› &#124; null &#124; undefined | The array to inspect. |
`...values` | Array‹[List](enums/ariarole.md#list)‹T›› | The arrays of values to exclude. |

**Returns:** *T[]*

Returns the new array of filtered values.

___

### `Const` equalsBy

▸ **equalsBy**<**T**, **V**>(`selector`: function, `array1`: Array‹T› | List‹any› | undefined, `array2`: Array‹T› | List‹any› | undefined): *boolean*

*Defined in [src/utilities/collection-utils.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L26)*

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

### `Const` filename

▸ **filename**(`value?`: undefined | string): *string | undefined*

*Defined in [src/utilities/string-utils.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L50)*

Returns the filename from the supplied string, including extension

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *string | undefined*

___

### `Const` first

▸ **first**<**T**>(`array`: [List](enums/ariarole.md#list)‹T› | null | undefined): *T | undefined*

*Defined in [src/utilities/collection-utils.ts:156](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L156)*

Gets the first element of array.

**`alias`** _.first

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](enums/ariarole.md#list)‹T› &#124; null &#124; undefined | The array to query. |

**Returns:** *T | undefined*

Returns the first element of array.

___

### `Const` flattenDeep

▸ **flattenDeep**<**T**>(`array`: ListOfRecursiveArraysOrValues‹T› | null | undefined): *T[]*

*Defined in [src/utilities/collection-utils.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L73)*

Recursively flattens a nested array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ListOfRecursiveArraysOrValues‹T› &#124; null &#124; undefined | The array to recursively flatten. |

**Returns:** *T[]*

Returns the new flattened array.

___

### `Const` getUrl

▸ **getUrl**(`path`: string, `pathParams?`: any): *string*

*Defined in [src/utilities/route-utils.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L61)*

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

*Defined in [src/utilities/route-utils.ts:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L71)*

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

▸ **hasValue**(`value?`: undefined | string): *value is string*

*Defined in [src/utilities/string-utils.ts:60](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L60)*

Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
(after trimming both ends of the string)

**Parameters:**

Name | Type |
------ | ------ |
`value?` | undefined &#124; string |

**Returns:** *value is string*

___

### `Const` hasValues

▸ **hasValues**(`collection`: any[] | List‹any› | null | undefined): *collection is any[] | List<any>*

*Defined in [src/utilities/collection-utils.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L87)*

Checks for values in a collection. Returns false if the collection is `undefined`, `null`,
or the respective object type's "empty" state, ie length or size 0.

Note: only takes a single collection as parameter to make use of Typescript Type guard ability

**Parameters:**

Name | Type |
------ | ------ |
`collection` | any[] &#124; List‹any› &#124; null &#124; undefined |

**Returns:** *collection is any[] | List<any>*

False if `collection` is `undefined`, `null`, or has 0 elements.
True if collection contains any elements.

___

### `Const` initialize

▸ **initialize**<**TResources**>(`module`: any, `cultures`: [Culture](interfaces/culture.md)‹TResources›[], `options`: [LocalizationInitOptions](interfaces/localizationinitoptions.md)): *i18n*

*Defined in [src/utilities/localization-utils.ts:125](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L125)*

Initialize frontend i18n module - typically in root/startup of application

**Type parameters:**

▪ **TResources**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`module` | any | - | Third party module for use with i18next (ie. initReactI18next) |
`cultures` | [Culture](interfaces/culture.md)‹TResources›[] | - | List of supported language cultures |
`options` | [LocalizationInitOptions](interfaces/localizationinitoptions.md) | defaultInitOptions | Additional options for configuring i18n detection  |

**Returns:** *i18n*

___

### `Const` intersection

▸ **intersection**<**T**>(...`arrays`: Array‹[List](enums/ariarole.md#list)‹T››): *T[]*

*Defined in [src/utilities/collection-utils.ts:166](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L166)*

Creates an array of  unique values that are included in all of the provided arrays using SameValueZero for
equality comparisons.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...arrays` | Array‹[List](enums/ariarole.md#list)‹T›› | The arrays to inspect. |

**Returns:** *T[]*

Returns the new array of shared values.

___

### `Const` isAbsoluteUrl

▸ **isAbsoluteUrl**(`url`: string): *boolean*

*Defined in [src/utilities/route-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L91)*

Determines if supplied url is an absolute url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string |   |

**Returns:** *boolean*

___

### `Const` isDevelopment

▸ **isDevelopment**(): *boolean*

*Defined in [src/utilities/environment-utils.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/environment-utils.ts#L10)*

Function to return whether or not the current environment is development.

**Returns:** *boolean*

___

### `Const` isEmpty

▸ **isEmpty**(`collection`: any[] | List‹any› | null | undefined): *collection is undefined*

*Defined in [src/utilities/collection-utils.ts:102](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L102)*

Checks if there aren't any values in a collection. Returns true if the collection is `undefined`,
`null`, or the respective object type's "empty" state, ie length or size 0.
Determines whether or not the provided value is `undefined`, `null`, or an empty string
(after trimming both ends of the string)

Note: only takes a single collection as parameter to make use of Typescript Type guard ability

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | any[] &#124; List‹any› &#124; null &#124; undefined |   |

**Returns:** *collection is undefined*

True if `collection` is  `undefined`, `null`, or has 0 elements.
False if collection contains any elements.

▸ **isEmpty**(`value?`: undefined | string): *value is undefined*

*Defined in [src/utilities/string-utils.ts:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L71)*

Checks if there aren't any values in a collection. Returns true if the collection is `undefined`,
`null`, or the respective object type's "empty" state, ie length or size 0.
Determines whether or not the provided value is `undefined`, `null`, or an empty string
(after trimming both ends of the string)

Note: only takes a single collection as parameter to make use of Typescript Type guard ability

**Parameters:**

Name | Type |
------ | ------ |
`value?` | undefined &#124; string |

**Returns:** *value is undefined*

True if `collection` is  `undefined`, `null`, or has 0 elements.
False if collection contains any elements.

___

### `Const` isNotEmpty

▸ **isNotEmpty**(`collection`: any[] | List‹any› | null | undefined): *collection is any[] | List<any>*

*Defined in [src/utilities/collection-utils.ts:126](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L126)*

Checks for values in a collection. Returns false if the collection is `undefined`, `null`,
or the respective object type's "empty" state, ie length or size 0. Alias for `CollectionUtils.hasValues`

Note: only takes a single collection as parameter to make use of Typescript Type guard ability

**Parameters:**

Name | Type |
------ | ------ |
`collection` | any[] &#124; List‹any› &#124; null &#124; undefined |

**Returns:** *collection is any[] | List<any>*

False if `collection` is `undefined`, `null`, or has 0 elements.
True if collection contains any elements.

___

### `Const` isValidCultureCode

▸ **isValidCultureCode**(`cultureCode?`: undefined | string): *cultureCode is string*

*Defined in [src/utilities/string-utils.ts:80](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L80)*

Validates the given string as RFC-4646 culture code format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cultureCode?` | undefined &#124; string |   |

**Returns:** *cultureCode is string*

___

### `Const` isValidEmail

▸ **isValidEmail**(`value?`: undefined | string): *value is string*

*Defined in [src/utilities/string-utils.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L88)*

Validates a given string matches a valid email format

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | undefined &#124; string |   |

**Returns:** *value is string*

___

### `Const` join

▸ **join**(`values`: string[], `separator`: string): *string*

*Defined in [src/utilities/string-utils.ts:99](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L99)*

Joins an array of strings into one string with a separator. If the array is empty, it will return an empty string.

**`default`** ""

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`values` | string[] | - | Values to join into one string. |
`separator` | string | "," | - |

**Returns:** *string*

___

### `Const` length

▸ **length**(`arr`: Array‹any› | List‹any›): *number*

*Defined in [src/utilities/collection-utils.ts:136](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L136)*

Utility function to get the length of a collection
when the collection might be either a Immutable.List or an Array

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`arr` | Array‹any› &#124; List‹any› | the collection |

**Returns:** *number*

number the length of the collection

___

### `Const` lowerFirst

▸ **lowerFirst**(`string?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:113](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L113)*

Converts the first character of `string` to lower case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the converted string.

___

### `Const` pad

▸ **pad**(`string?`: undefined | string, `length?`: undefined | number, `chars?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:124](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L124)*

Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
they can’t be evenly divided by length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to pad. |
`length?` | undefined &#124; number | The padding length. |
`chars?` | undefined &#124; string | The string used as padding. |

**Returns:** *string*

Returns the padded string.

___

### `Const` padEnd

▸ **padEnd**(`string?`: undefined | string, `length?`: undefined | number, `chars?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:136](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L136)*

Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to pad. |
`length?` | undefined &#124; number | The padding length. |
`chars?` | undefined &#124; string | The string used as padding. |

**Returns:** *string*

Returns the padded string.

___

### `Const` padStart

▸ **padStart**(`string?`: undefined | string, `length?`: undefined | number, `chars?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:148](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L148)*

Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to pad. |
`length?` | undefined &#124; number | The padding length. |
`chars?` | undefined &#124; string | The string used as padding. |

**Returns:** *string*

Returns the padded string.

___

### `Const` pluralize

▸ **pluralize**(`number`: number, `singular?`: undefined | string, `plural?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:166](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L166)*

Returns the plural version of a given word if the value is not 1. The default suffix is 's'.

**`example`** 
Humanize.pluralize(1, "duck")
=> "duck"

Humanize.pluralize(3, "duck")
=> "ducks"

Humanize.pluralize(3, "duck", "duckies")
=> "duckies"

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |
`singular?` | undefined &#124; string |
`plural?` | undefined &#124; string |

**Returns:** *string*

___

### `Const` queryStringToObject

▸ **queryStringToObject**<**T**>(`queryString`: string, `arrayFormat`: [QueryStringArrayFormat](enums/querystringarrayformat.md), `parseNumbers`: boolean, `parseBooleans`: boolean): *T*

*Defined in [src/utilities/route-utils.ts:101](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L101)*

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

*Defined in [src/utilities/polyfill-utils.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/polyfill-utils.ts#L9)*

Promise.finally is not natively supported in Internet Explorer.

**Returns:** *void*

___

### `Const` removeElementAt

▸ **removeElementAt**<**T**>(`source`: Array‹T›, `index`: number): *Array‹T›*

*Defined in [src/utilities/collection-utils.ts:198](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L198)*

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

### `Const` repeat

▸ **repeat**(`string?`: undefined | string, `n?`: undefined | number): *string*

*Defined in [src/utilities/string-utils.ts:179](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L179)*

Repeats the given string n times.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to repeat. |
`n?` | undefined &#124; number | The number of times to repeat the string. |

**Returns:** *string*

Returns the repeated string.

___

### `Const` replaceElementAt

▸ **replaceElementAt**<**T**>(`source`: Array‹T›, `index`: number, `value`: T): *Array‹T›*

*Defined in [src/utilities/collection-utils.ts:218](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L218)*

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

### `Const` replacePathParams

▸ **replacePathParams**(`path`: string, `pathParams`: any): *string*

*Defined in [src/utilities/route-utils.ts:120](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L120)*

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

*Defined in [src/utilities/environment-utils.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/environment-utils.ts#L19)*

Conditionally runs the given function, depending on whether the current environment is development or not.

**Parameters:**

▪ **fn**: *function*

Function to be run in a development environment only.

▸ (): *any*

**Returns:** *void*

___

### `Const` sample

▸ **sample**<**T**>(`collection`: [List](enums/ariarole.md#list)‹T› | Dictionary‹T› | NumericDictionary‹T› | null | undefined): *T | undefined*

*Defined in [src/utilities/collection-utils.ts:243](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L243)*

Gets a random element from collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](enums/ariarole.md#list)‹T› &#124; Dictionary‹T› &#124; NumericDictionary‹T› &#124; null &#124; undefined | The collection to sample. |

**Returns:** *T | undefined*

Returns the random element.

___

### `Const` sampleSize

▸ **sampleSize**<**T**>(`collection`: [List](enums/ariarole.md#list)‹T› | Dictionary‹T› | NumericDictionary‹T› | null | undefined, `n?`: undefined | number): *T[]*

*Defined in [src/utilities/collection-utils.ts:259](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L259)*

Gets n random elements at unique keys from collection up to the size of collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | [List](enums/ariarole.md#list)‹T› &#124; Dictionary‹T› &#124; NumericDictionary‹T› &#124; null &#124; undefined | The collection to sample. |
`n?` | undefined &#124; number | The number of elements to sample. |

**Returns:** *T[]*

Returns the random elements.

___

### `Const` snakeCase

▸ **snakeCase**(`string?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:187](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L187)*

Converts string to snake case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the snake cased string.

___

### `Const` sortByString

▸ **sortByString**<**T**>(`array`: Array‹T›, `selector`: function, `caseSensitive`: boolean): *T[]*

*Defined in [src/utilities/collection-utils.ts:275](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L275)*

Sort an array of items alphabetically by one property of the item.

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **array**: *Array‹T›*

the source array of items

▪ **selector**: *function*

function returning property to sort by from item

▸ (`element`: T): *string*

**Parameters:**

Name | Type |
------ | ------ |
`element` | T |

▪`Default value`  **caseSensitive**: *boolean*= false

whether to consider letter case when sorting

**Returns:** *T[]*

___

### `Const` startCase

▸ **startCase**(`string?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:195](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L195)*

Converts string to start case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the start cased string.

___

### `Const` take

▸ **take**<**T**>(`array`: [List](enums/ariarole.md#list)‹T› | null | undefined, `n?`: undefined | number): *T[]*

*Defined in [src/utilities/collection-utils.ts:315](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L315)*

Creates a slice of array with n elements taken from the beginning.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [List](enums/ariarole.md#list)‹T› &#124; null &#124; undefined | The array to query. |
`n?` | undefined &#124; number | The number of elements to take. |

**Returns:** *T[]*

Returns the slice of array.

___

### `Const` template

▸ **template**(`string?`: undefined | string, `options?`: TemplateOptions): *TemplateExecutor*

*Defined in [src/utilities/string-utils.ts:223](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L223)*

Creates a compiled template function that can interpolate data properties in "interpolate" delimiters,
HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate"
delimiters. Data properties may be accessed as free variables in the template. If a setting object is
provided it takes precedence over _.templateSettings values.

Note: In the development build _.template utilizes
[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for easier
debugging.

For more information on precompiling templates see
[lodash's custom builds documentation](https://lodash.com/custom-builds).

For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The template string. |
`options?` | TemplateOptions | The options object. |

**Returns:** *TemplateExecutor*

Returns the compiled template function.

___

### `Const` translate

▸ **translate**(`key`: string, `options?`: any): *string*

*Defined in [src/utilities/localization-utils.ts:156](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L156)*

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

*Defined in [src/utilities/string-utils.ts:228](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`truncateAtPos` | number |

**Returns:** *string*

___

### `Const` upperFirst

▸ **upperFirst**(`string?`: undefined | string): *string*

*Defined in [src/utilities/string-utils.ts:246](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L246)*

Converts the first character of `string` to upper case.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to convert. |

**Returns:** *string*

Returns the converted string.

___

### `Const` words

▸ **words**(`string?`: undefined | string, `pattern?`: string | RegExp): *string[]*

*Defined in [src/utilities/string-utils.ts:255](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L255)*

Splits `string` into an array of its words.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`string?` | undefined &#124; string | The string to inspect. |
`pattern?` | string &#124; RegExp | The pattern to match words. |

**Returns:** *string[]*

Returns the words of `string`.

## Object literals

### `Const` AuditableDefaultValues

### ▪ **AuditableDefaultValues**: *object*

*Defined in [src/constants/auditable-default-values.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L7)*

###  createdById

• **createdById**: *undefined* = undefined

*Defined in [src/constants/auditable-default-values.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L8)*

###  createdOn

• **createdOn**: *undefined* = undefined

*Defined in [src/constants/auditable-default-values.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L9)*

###  deletedById

• **deletedById**: *undefined* = undefined

*Defined in [src/constants/auditable-default-values.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L10)*

###  deletedOn

• **deletedOn**: *undefined* = undefined

*Defined in [src/constants/auditable-default-values.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L11)*

###  id

• **id**: *undefined* = undefined

*Defined in [src/constants/auditable-default-values.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L12)*

###  updatedById

• **updatedById**: *undefined* = undefined

*Defined in [src/constants/auditable-default-values.ts:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L13)*

###  updatedOn

• **updatedOn**: *undefined* = undefined

*Defined in [src/constants/auditable-default-values.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/auditable-default-values.ts#L14)*

___

### `Const` BaseEnglishUnitedStates

### ▪ **BaseEnglishUnitedStates**: *object*

*Defined in [src/cultures/base-english-united-states.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/cultures/base-english-united-states.ts#L4)*

###  code

• **code**: *string* = Rfc4646LanguageCodes.EN_US

*Defined in [src/cultures/base-english-united-states.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/cultures/base-english-united-states.ts#L5)*

###  resources

• **resources**: *null* = null

*Defined in [src/cultures/base-english-united-states.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/cultures/base-english-united-states.ts#L6)*

___

### `Const` BaseSpanishSpain

### ▪ **BaseSpanishSpain**: *object*

*Defined in [src/cultures/base-spanish-spain.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/cultures/base-spanish-spain.ts#L4)*

###  code

• **code**: *string* = Rfc4646LanguageCodes.ES_ES

*Defined in [src/cultures/base-spanish-spain.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/cultures/base-spanish-spain.ts#L5)*

###  resources

• **resources**: *null* = null

*Defined in [src/cultures/base-spanish-spain.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/cultures/base-spanish-spain.ts#L6)*

___

### `Const` BrowserUtils

### ▪ **BrowserUtils**: *object*

*Defined in [src/utilities/browser-utils.ts:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L24)*

###  isIE

• **isIE**: *[_isIE](README.md#const-_isie)* = _isIE

*Defined in [src/utilities/browser-utils.ts:25](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L25)*

###  isNotIE

• **isNotIE**: *[_isNotIE](README.md#const-_isnotie)* = _isNotIE

*Defined in [src/utilities/browser-utils.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/browser-utils.ts#L26)*

___

### `Const` CollectionUtils

### ▪ **CollectionUtils**: *object*

*Defined in [src/utilities/collection-utils.ts:324](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L324)*

###  difference

• **difference**: *[difference](README.md#const-difference)*

*Defined in [src/utilities/collection-utils.ts:325](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L325)*

###  equalsBy

• **equalsBy**: *[equalsBy](README.md#const-equalsby)*

*Defined in [src/utilities/collection-utils.ts:326](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L326)*

###  first

• **first**: *[first](README.md#const-first)*

*Defined in [src/utilities/collection-utils.ts:327](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L327)*

###  flattenDeep

• **flattenDeep**: *[flattenDeep](README.md#const-flattendeep)*

*Defined in [src/utilities/collection-utils.ts:328](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L328)*

###  hasValues

• **hasValues**: *[hasValues](README.md#const-hasvalues)*

*Defined in [src/utilities/collection-utils.ts:329](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L329)*

###  intersection

• **intersection**: *[intersection](README.md#const-intersection)*

*Defined in [src/utilities/collection-utils.ts:332](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L332)*

###  intersectionWith

• **intersectionWith**: *[intersectionWith](README.md#const-intersectionwith)*

*Defined in [src/utilities/collection-utils.ts:333](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L333)*

###  isEmpty

• **isEmpty**: *[isEmpty](README.md#const-isempty)*

*Defined in [src/utilities/collection-utils.ts:330](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L330)*

###  isNotEmpty

• **isNotEmpty**: *[isNotEmpty](README.md#const-isnotempty)*

*Defined in [src/utilities/collection-utils.ts:331](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L331)*

###  length

• **length**: *[length](README.md#const-length)*

*Defined in [src/utilities/collection-utils.ts:334](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L334)*

###  removeElementAt

• **removeElementAt**: *[removeElementAt](README.md#const-removeelementat)*

*Defined in [src/utilities/collection-utils.ts:335](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L335)*

###  replaceElementAt

• **replaceElementAt**: *[replaceElementAt](README.md#const-replaceelementat)*

*Defined in [src/utilities/collection-utils.ts:336](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L336)*

###  sample

• **sample**: *[sample](README.md#const-sample)*

*Defined in [src/utilities/collection-utils.ts:337](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L337)*

###  sampleSize

• **sampleSize**: *[sampleSize](README.md#const-samplesize)*

*Defined in [src/utilities/collection-utils.ts:338](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L338)*

###  sortByString

• **sortByString**: *[sortByString](README.md#const-sortbystring)*

*Defined in [src/utilities/collection-utils.ts:339](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L339)*

###  take

• **take**: *[take](README.md#const-take)*

*Defined in [src/utilities/collection-utils.ts:340](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/collection-utils.ts#L340)*

___

### `Const` CoreUtils

### ▪ **CoreUtils**: *object*

*Defined in [src/utilities/core-utils.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L15)*

###  bindAll

▸ **bindAll**<**T**>(`object`: T, ...`methodNames`: Array‹string | string[]›): *T*

*Defined in [src/utilities/core-utils.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L28)*

Binds methods of an object to the object itself, overwriting the existing method. Method names may be
specified as individual arguments or as arrays of method names. If no method names are provided all
enumerable function properties, own and inherited, of object are bound.

Note: This method does not set the "length" property of bound functions.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The object to bind and assign the bound methods to. |
`...methodNames` | Array‹string &#124; string[]› | The object method names to bind, specified as individual method names or arrays of method names. |

**Returns:** *T*

Returns object.

###  curry

▸ **curry**<**T1**, **R**>(`func`: function, `arity?`: undefined | number): *CurriedFunction1‹T1, R›*

*Defined in [src/utilities/core-utils.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L40)*

Creates a function that accepts one or more arguments of func that when called either invokes func returning
its result, if all func arguments have been provided, or returns a function that accepts one or more of the
remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.

**Type parameters:**

▪ **T1**

▪ **R**

**Parameters:**

▪ **func**: *function*

The function to curry.

▸ (`t1`: T1): *R*

**Parameters:**

Name | Type |
------ | ------ |
`t1` | T1 |

▪`Optional`  **arity**: *undefined | number*

The arity of func.

**Returns:** *CurriedFunction1‹T1, R›*

Returns the new curried function.

###  enumToArray

▸ **enumToArray**<**TEnum**>(`enumObject`: any): *TEnum[]*

*Defined in [src/utilities/core-utils.ts:55](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L55)*

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

###  getRandomEnum

▸ **getRandomEnum**<**TEnum**>(`enumObject`: any, `excludeElement?`: TEnum): *TEnum*

*Defined in [src/utilities/core-utils.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L73)*

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

###  memoize

▸ **memoize**<**T**>(`func`: T, `resolver?`: undefined | function): *T & MemoizedFunction*

*Defined in [src/utilities/core-utils.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L93)*

Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
storing the result based on the arguments provided to the memoized function. By default, the first argument
provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
the this binding of the memoized function.

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | T | The function to have its output memoized. |
`resolver?` | undefined &#124; function | The function to resolve the cache key. |

**Returns:** *T & MemoizedFunction*

Returns the new memoizing function.

###  merge

▸ **merge**<**TObject**, **TSource**>(`object`: TObject, `source`: TSource): *TObject & TSource*

*Defined in [src/utilities/core-utils.ts:108](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L108)*

Recursively merges own and inherited enumerable properties of source
objects into the destination object, skipping source properties that resolve
to `undefined`. Array and plain object properties are merged recursively.
Other objects and value types are overridden by assignment. Source objects
are applied from left to right. Subsequent sources overwrite property
assignments of previous sources.

**Type parameters:**

▪ **TObject**

▪ **TSource**

**Parameters:**

Name | Type |
------ | ------ |
`object` | TObject |
`source` | TSource |

**Returns:** *TObject & TSource*

###  numericEnumToPojo

▸ **numericEnumToPojo**(`enumObject`: any): *any*

*Defined in [src/utilities/core-utils.ts:121](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L121)*

Returns a plain javascript object based on the given enum

**Parameters:**

Name | Type |
------ | ------ |
`enumObject` | any |

**Returns:** *any*

###  objectToArray

▸ **objectToArray**(`object`: any): *any[]*

*Defined in [src/utilities/core-utils.ts:139](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L139)*

Returns an array of an object's values

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *any[]*

###  range

▸ **range**(`start`: number, `end?`: undefined | number, `step?`: undefined | number): *number[]*

*Defined in [src/utilities/core-utils.ts:165](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L165)*

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
range is created unless a negative step is specified.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The start of the range. |
`end?` | undefined &#124; number | The end of the range. |
`step?` | undefined &#124; number | The value to increment or decrement by. |

**Returns:** *number[]*

Returns a new range array.

###  sleep

▸ **sleep**(`milliseconds`: number, `debug`: boolean): *Promise‹void›*

*Defined in [src/utilities/core-utils.ts:174](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L174)*

Wrap timeout in a promise so tests can easily block execution for testing time

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`milliseconds` | number | - | - |
`debug` | boolean | false |   |

**Returns:** *Promise‹void›*

###  sleepSync

▸ **sleepSync**(`milliseconds`: number): *void*

*Defined in [src/utilities/core-utils.ts:194](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L194)*

Block execution for specified number of milliseconds, synchronously.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`milliseconds` | number | the delay  |

**Returns:** *void*

###  throttle

▸ **throttle**<**T**>(`func`: T, `wait?`: undefined | number, `options?`: ThrottleSettings): *T & Cancelable*

*Defined in [src/utilities/core-utils.ts:218](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L218)*

Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
the the throttled function is invoked more than once during the wait timeout.

**Type parameters:**

▪ **T**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | T | The function to throttle. |
`wait?` | undefined &#124; number | The number of milliseconds to throttle invocations to. |
`options?` | ThrottleSettings | The options object. |

**Returns:** *T & Cancelable*

Returns the new throttled function.

###  timer

▸ **timer**(`name`: string): *[TimerFunctionReturn](README.md#timerfunctionreturn)*

*Defined in [src/utilities/core-utils.ts:231](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L231)*

Creates a timer instance that when stopped will supply elapsed time in milliseconds.
Useful for benchmarking or providing counters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Useful name to identify the timer  |

**Returns:** *[TimerFunctionReturn](README.md#timerfunctionreturn)*

###  times

▸ **times**<**TResult**>(`n`: number, `iteratee`: function): *TResult[]*

*Defined in [src/utilities/core-utils.ts:259](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/core-utils.ts#L259)*

Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
is invoked with one argument; (index).

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **n**: *number*

The number of times to invoke iteratee.

▪ **iteratee**: *function*

The function invoked per iteration.

▸ (`num`: number): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *TResult[]*

Returns the array of results.

___

### `Const` DefaultScrollOptions

### ▪ **DefaultScrollOptions**: *object*

*Defined in [src/utilities/scroll-utils.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L9)*

###  behavior

• **behavior**: *"auto"* = "auto"

*Defined in [src/utilities/scroll-utils.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L10)*

###  block

• **block**: *"start"* = "start"

*Defined in [src/utilities/scroll-utils.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L11)*

###  inline

• **inline**: *"nearest"* = "nearest"

*Defined in [src/utilities/scroll-utils.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L12)*

___

### `Const` EmailConstants

### ▪ **EmailConstants**: *object*

*Defined in [src/constants/email-constants.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/email-constants.ts#L4)*

These values are from the RFC-5231 Email specification

###  addressMaxLength

• **addressMaxLength**: *number* = 250

*Defined in [src/constants/email-constants.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/email-constants.ts#L5)*

###  subjectMaxLength

• **subjectMaxLength**: *number* = 78

*Defined in [src/constants/email-constants.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/email-constants.ts#L6)*

___

### `Const` EnvironmentUtils

### ▪ **EnvironmentUtils**: *object*

*Defined in [src/utilities/environment-utils.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/environment-utils.ts#L33)*

###  isDevelopment

• **isDevelopment**: *[isDevelopment](README.md#const-isdevelopment)*

*Defined in [src/utilities/environment-utils.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/environment-utils.ts#L34)*

###  runIfDevelopment

• **runIfDevelopment**: *[runIfDevelopment](README.md#const-runifdevelopment)*

*Defined in [src/utilities/environment-utils.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/environment-utils.ts#L35)*

___

### `Const` FactoryType

### ▪ **FactoryType**: *object*

*Defined in [src/tests/factories/factory-type.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/tests/factories/factory-type.ts#L1)*

###  ResultErrorRecord

• **ResultErrorRecord**: *string* = "ResultErrorRecord"

*Defined in [src/tests/factories/factory-type.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/tests/factories/factory-type.ts#L2)*

###  ResultRecord

• **ResultRecord**: *string* = "ResultRecord"

*Defined in [src/tests/factories/factory-type.ts:3](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/tests/factories/factory-type.ts#L3)*

###  StubResourceRecord

• **StubResourceRecord**: *string* = "StubResourceRecord"

*Defined in [src/tests/factories/factory-type.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/tests/factories/factory-type.ts#L4)*

___

### `Const` LocalizationUtils

### ▪ **LocalizationUtils**: *object*

*Defined in [src/utilities/localization-utils.ts:171](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L171)*

###  changeCultureCode

• **changeCultureCode**: *[changeCultureCode](README.md#const-changeculturecode)*

*Defined in [src/utilities/localization-utils.ts:172](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L172)*

###  cultureCodeFromQueryString

• **cultureCodeFromQueryString**: *[cultureCodeFromQueryString](README.md#const-culturecodefromquerystring)*

*Defined in [src/utilities/localization-utils.ts:173](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L173)*

###  cultureCodeFromRoute

• **cultureCodeFromRoute**: *[cultureCodeFromRoute](README.md#const-culturecodefromroute)*

*Defined in [src/utilities/localization-utils.ts:174](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L174)*

###  cultureFactory

• **cultureFactory**: *[cultureFactory](README.md#const-culturefactory)*

*Defined in [src/utilities/localization-utils.ts:175](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L175)*

###  currentCultureCode

• **currentCultureCode**: *[currentCultureCode](README.md#const-currentculturecode)*

*Defined in [src/utilities/localization-utils.ts:176](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L176)*

###  defaultCultureCode

• **defaultCultureCode**: *[defaultCultureCode](README.md#const-defaultculturecode)*

*Defined in [src/utilities/localization-utils.ts:177](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L177)*

###  defaultInitOptions

• **defaultInitOptions**: *[LocalizationInitOptions](interfaces/localizationinitoptions.md)‹›*

*Defined in [src/utilities/localization-utils.ts:178](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L178)*

###  detectCultureCode

• **detectCultureCode**: *[detectCultureCode](README.md#const-detectculturecode)*

*Defined in [src/utilities/localization-utils.ts:179](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L179)*

###  errorCultureIsRequired

• **errorCultureIsRequired**: *string*

*Defined in [src/utilities/localization-utils.ts:180](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L180)*

###  initialize

• **initialize**: *[initialize](README.md#const-initialize)*

*Defined in [src/utilities/localization-utils.ts:181](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L181)*

###  routeParam

• **routeParam**: *string*

*Defined in [src/utilities/localization-utils.ts:182](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L182)*

###  t

• **t**: *[translate](README.md#const-translate)*

*Defined in [src/utilities/localization-utils.ts:183](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L183)*

###  translate

• **translate**: *[translate](README.md#const-translate)*

*Defined in [src/utilities/localization-utils.ts:184](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L184)*

___

### `Const` PolyfillUtils

### ▪ **PolyfillUtils**: *object*

*Defined in [src/utilities/polyfill-utils.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/polyfill-utils.ts#L31)*

###  registerPromiseFinallyPolyfill

• **registerPromiseFinallyPolyfill**: *[registerPromiseFinallyPolyfill](README.md#const-registerpromisefinallypolyfill)*

*Defined in [src/utilities/polyfill-utils.ts:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/polyfill-utils.ts#L32)*

___

### `Const` PromiseFactory

### ▪ **PromiseFactory**: *object*

*Defined in [src/utilities/promise-factory.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/promise-factory.ts#L7)*

###  cancellable

▸ **cancellable**<**T**>(`promise`: Promise‹T›): *[CancellablePromise](README.md#cancellablepromise)‹T›*

*Defined in [src/utilities/promise-factory.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/promise-factory.ts#L8)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | Promise‹T› |

**Returns:** *[CancellablePromise](README.md#cancellablepromise)‹T›*

###  pending

▸ **pending**(): *Promise‹unknown›*

*Defined in [src/utilities/promise-factory.ts:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/promise-factory.ts#L32)*

Creates a new and empty/unfullfilled promise to cancel further
chained promise operations

**Returns:** *Promise‹unknown›*

___

### `Const` RecordUtils

### ▪ **RecordUtils**: *object*

*Defined in [src/utilities/record-utils.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/record-utils.ts#L12)*

###  auditableDefaultValuesFactory

▸ **auditableDefaultValuesFactory**<**T**>(`defaultValues`: [RequiredOrUndefined](README.md#requiredorundefined)‹[OmitKeys](README.md#omitkeys)‹T, [Auditable](interfaces/auditable.md)››): *T*

*Defined in [src/utilities/record-utils.ts:18](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/record-utils.ts#L18)*

Returns object of type `T` with Auditable values (`createdById`, `createdOn`, etc.) set to `undefined`

**Type parameters:**

▪ **T**: *[Auditable](interfaces/auditable.md)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValues` | [RequiredOrUndefined](README.md#requiredorundefined)‹[OmitKeys](README.md#omitkeys)‹T, [Auditable](interfaces/auditable.md)›› | Object with all non-Auditable properties set to a default value (or `undefined`)  |

**Returns:** *T*

###  defaultValuesFactory

▸ **defaultValuesFactory**<**T**>(`defaultValues`: [RequiredOrUndefined](README.md#requiredorundefined)‹T›): *T*

*Defined in [src/utilities/record-utils.ts:30](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/record-utils.ts#L30)*

Returns object cast back as type `T` to ensure all properties are set for use with a `Record`
class definition

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValues` | [RequiredOrUndefined](README.md#requiredorundefined)‹T› | Object with all properties set to a default value (or `undefined`)  |

**Returns:** *T*

###  ensureRecord

▸ **ensureRecord**<**TValue**, **TRecord**>(`maybeRecord`: TValue, `record`: [Constructor](README.md#constructor)‹TRecord›): *TRecord*

*Defined in [src/utilities/record-utils.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/record-utils.ts#L43)*

Function to ensure a given object is an instance of a specific Record `T`. If it is not, one will
be instantiated with the given constructor.

If `maybeRecord` is already an instance of `T`, it returns that value.

**Type parameters:**

▪ **TValue**

▪ **TRecord**: *TValue*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maybeRecord` | TValue | Object or Record to be coalesced into a Record. |
`record` | [Constructor](README.md#constructor)‹TRecord› | Type of the Record to be instantiated  |

**Returns:** *TRecord*

###  ensureRecords

▸ **ensureRecords**<**TValue**, **TRecord**>(`maybeRecords`: TValue[], `record`: [Constructor](README.md#constructor)‹TRecord›): *TRecord[]*

*Defined in [src/utilities/record-utils.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/record-utils.ts#L61)*

Function to ensure a given array of objects are instances of a specific Record `T`. If they
are not, one will be instantiated with the given constructor.

If `maybeRecord` is already an instance of `T`, it returns that value.

**Type parameters:**

▪ **TValue**

▪ **TRecord**: *TValue*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maybeRecords` | TValue[] | Array of objects or Records to be coalesced into Records. |
`record` | [Constructor](README.md#constructor)‹TRecord› | Type of the Record to be instantiated  |

**Returns:** *TRecord[]*

###  isRecord

▸ **isRecord**<**TValue**, **TRecord**>(`maybeRecord`: TValue, `record`: [Constructor](README.md#constructor)‹TRecord›): *maybeRecord is TRecord*

*Defined in [src/utilities/record-utils.ts:76](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/record-utils.ts#L76)*

Function to verify a given object is an instance of a specific Record `T`.

**Type parameters:**

▪ **TValue**

▪ **TRecord**: *TValue*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maybeRecord` | TValue | Object or Record to be checked as an instance of `T` |
`record` | [Constructor](README.md#constructor)‹TRecord› | Type of the Record to be checked  |

**Returns:** *maybeRecord is TRecord*

___

### `Const` Rfc4646LanguageCodes

### ▪ **Rfc4646LanguageCodes**: *object*

*Defined in [src/constants/rfc4646-language-codes.ts:1](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L1)*

###  AF_ZA

• **AF_ZA**: *string* = "af-ZA"

*Defined in [src/constants/rfc4646-language-codes.ts:2](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L2)*

###  AR_AE

• **AR_AE**: *string* = "ar-AE"

*Defined in [src/constants/rfc4646-language-codes.ts:18](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L18)*

###  AR_BH

• **AR_BH**: *string* = "ar-BH"

*Defined in [src/constants/rfc4646-language-codes.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L5)*

###  AR_DZ

• **AR_DZ**: *string* = "ar-DZ"

*Defined in [src/constants/rfc4646-language-codes.ts:4](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L4)*

###  AR_EG

• **AR_EG**: *string* = "ar-EG"

*Defined in [src/constants/rfc4646-language-codes.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L6)*

###  AR_IQ

• **AR_IQ**: *string* = "ar-IQ"

*Defined in [src/constants/rfc4646-language-codes.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L7)*

###  AR_JO

• **AR_JO**: *string* = "ar-JO"

*Defined in [src/constants/rfc4646-language-codes.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L8)*

###  AR_KW

• **AR_KW**: *string* = "ar-KW"

*Defined in [src/constants/rfc4646-language-codes.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L9)*

###  AR_LB

• **AR_LB**: *string* = "ar-LB"

*Defined in [src/constants/rfc4646-language-codes.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L10)*

###  AR_LY

• **AR_LY**: *string* = "ar-LY"

*Defined in [src/constants/rfc4646-language-codes.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L11)*

###  AR_MA

• **AR_MA**: *string* = "ar-MA"

*Defined in [src/constants/rfc4646-language-codes.ts:12](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L12)*

###  AR_OM

• **AR_OM**: *string* = "ar-OM"

*Defined in [src/constants/rfc4646-language-codes.ts:13](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L13)*

###  AR_QA

• **AR_QA**: *string* = "ar-QA"

*Defined in [src/constants/rfc4646-language-codes.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L14)*

###  AR_SA

• **AR_SA**: *string* = "ar-SA"

*Defined in [src/constants/rfc4646-language-codes.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L15)*

###  AR_SY

• **AR_SY**: *string* = "ar-SY"

*Defined in [src/constants/rfc4646-language-codes.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L16)*

###  AR_TN

• **AR_TN**: *string* = "ar-TN"

*Defined in [src/constants/rfc4646-language-codes.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L17)*

###  AR_YE

• **AR_YE**: *string* = "ar-YE"

*Defined in [src/constants/rfc4646-language-codes.ts:19](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L19)*

###  BE_BY

• **BE_BY**: *string* = "be-BY"

*Defined in [src/constants/rfc4646-language-codes.ts:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L24)*

###  BG_BG

• **BG_BG**: *string* = "bg-BG"

*Defined in [src/constants/rfc4646-language-codes.ts:25](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L25)*

###  CA_ES

• **CA_ES**: *string* = "ca-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L26)*

###  CS_CZ

• **CS_CZ**: *string* = "cs-CZ"

*Defined in [src/constants/rfc4646-language-codes.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L35)*

###  CY_AZ_AZ

• **CY_AZ_AZ**: *string* = "Cy-az-AZ"

*Defined in [src/constants/rfc4646-language-codes.ts:21](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L21)*

###  CY_SR_SP

• **CY_SR_SP**: *string* = "Cy-sr-SP"

*Defined in [src/constants/rfc4646-language-codes.ts:101](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L101)*

###  CY_UZ_UZ

• **CY_UZ_UZ**: *string* = "Cy-uz-UZ"

*Defined in [src/constants/rfc4646-language-codes.ts:135](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L135)*

###  DA_DK

• **DA_DK**: *string* = "da-DK"

*Defined in [src/constants/rfc4646-language-codes.ts:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L36)*

###  DE_AT

• **DE_AT**: *string* = "de-AT"

*Defined in [src/constants/rfc4646-language-codes.ts:65](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L65)*

###  DE_CH

• **DE_CH**: *string* = "de-CH"

*Defined in [src/constants/rfc4646-language-codes.ts:69](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L69)*

###  DE_DE

• **DE_DE**: *string* = "de-DE"

*Defined in [src/constants/rfc4646-language-codes.ts:66](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L66)*

###  DE_LI

• **DE_LI**: *string* = "de-LI"

*Defined in [src/constants/rfc4646-language-codes.ts:67](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L67)*

###  DE_LU

• **DE_LU**: *string* = "de-LU"

*Defined in [src/constants/rfc4646-language-codes.ts:68](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L68)*

###  DIV_MV

• **DIV_MV**: *string* = "div-MV"

*Defined in [src/constants/rfc4646-language-codes.ts:37](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L37)*

###  EL_GR

• **EL_GR**: *string* = "el-GR"

*Defined in [src/constants/rfc4646-language-codes.ts:70](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L70)*

###  EN_AU

• **EN_AU**: *string* = "en-AU"

*Defined in [src/constants/rfc4646-language-codes.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L40)*

###  EN_BZ

• **EN_BZ**: *string* = "en-BZ"

*Defined in [src/constants/rfc4646-language-codes.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L41)*

###  EN_CA

• **EN_CA**: *string* = "en-CA"

*Defined in [src/constants/rfc4646-language-codes.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L42)*

###  EN_CB

• **EN_CB**: *string* = "en-CB"

*Defined in [src/constants/rfc4646-language-codes.ts:43](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L43)*

###  EN_GB

• **EN_GB**: *string* = "en-GB"

*Defined in [src/constants/rfc4646-language-codes.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L50)*

###  EN_IE

• **EN_IE**: *string* = "en-IE"

*Defined in [src/constants/rfc4646-language-codes.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L44)*

###  EN_JM

• **EN_JM**: *string* = "en-JM"

*Defined in [src/constants/rfc4646-language-codes.ts:45](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L45)*

###  EN_NZ

• **EN_NZ**: *string* = "en-NZ"

*Defined in [src/constants/rfc4646-language-codes.ts:46](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L46)*

###  EN_PH

• **EN_PH**: *string* = "en-PH"

*Defined in [src/constants/rfc4646-language-codes.ts:47](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L47)*

###  EN_TT

• **EN_TT**: *string* = "en-TT"

*Defined in [src/constants/rfc4646-language-codes.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L49)*

###  EN_US

• **EN_US**: *string* = "en-US"

*Defined in [src/constants/rfc4646-language-codes.ts:51](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L51)*

###  EN_ZA

• **EN_ZA**: *string* = "en-ZA"

*Defined in [src/constants/rfc4646-language-codes.ts:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L48)*

###  EN_ZW

• **EN_ZW**: *string* = "en-ZW"

*Defined in [src/constants/rfc4646-language-codes.ts:52](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L52)*

###  ES_AR

• **ES_AR**: *string* = "es-AR"

*Defined in [src/constants/rfc4646-language-codes.ts:105](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L105)*

###  ES_BO

• **ES_BO**: *string* = "es-BO"

*Defined in [src/constants/rfc4646-language-codes.ts:106](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L106)*

###  ES_CL

• **ES_CL**: *string* = "es-CL"

*Defined in [src/constants/rfc4646-language-codes.ts:107](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L107)*

###  ES_CO

• **ES_CO**: *string* = "es-CO"

*Defined in [src/constants/rfc4646-language-codes.ts:108](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L108)*

###  ES_CR

• **ES_CR**: *string* = "es-CR"

*Defined in [src/constants/rfc4646-language-codes.ts:109](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L109)*

###  ES_DO

• **ES_DO**: *string* = "es-DO"

*Defined in [src/constants/rfc4646-language-codes.ts:110](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L110)*

###  ES_EC

• **ES_EC**: *string* = "es-EC"

*Defined in [src/constants/rfc4646-language-codes.ts:111](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L111)*

###  ES_ES

• **ES_ES**: *string* = "es-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:121](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L121)*

###  ES_GT

• **ES_GT**: *string* = "es-GT"

*Defined in [src/constants/rfc4646-language-codes.ts:113](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L113)*

###  ES_HN

• **ES_HN**: *string* = "es-HN"

*Defined in [src/constants/rfc4646-language-codes.ts:114](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L114)*

###  ES_MX

• **ES_MX**: *string* = "es-MX"

*Defined in [src/constants/rfc4646-language-codes.ts:115](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L115)*

###  ES_NI

• **ES_NI**: *string* = "es-NI"

*Defined in [src/constants/rfc4646-language-codes.ts:116](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L116)*

###  ES_PA

• **ES_PA**: *string* = "es-PA"

*Defined in [src/constants/rfc4646-language-codes.ts:117](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L117)*

###  ES_PE

• **ES_PE**: *string* = "es-PE"

*Defined in [src/constants/rfc4646-language-codes.ts:119](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L119)*

###  ES_PR

• **ES_PR**: *string* = "es-PR"

*Defined in [src/constants/rfc4646-language-codes.ts:120](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L120)*

###  ES_PY

• **ES_PY**: *string* = "es-PY"

*Defined in [src/constants/rfc4646-language-codes.ts:118](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L118)*

###  ES_SV

• **ES_SV**: *string* = "es-SV"

*Defined in [src/constants/rfc4646-language-codes.ts:112](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L112)*

###  ES_UY

• **ES_UY**: *string* = "es-UY"

*Defined in [src/constants/rfc4646-language-codes.ts:122](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L122)*

###  ES_VE

• **ES_VE**: *string* = "es-VE"

*Defined in [src/constants/rfc4646-language-codes.ts:123](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L123)*

###  ET_EE

• **ET_EE**: *string* = "et-EE"

*Defined in [src/constants/rfc4646-language-codes.ts:53](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L53)*

###  EU_ES

• **EU_ES**: *string* = "eu-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L23)*

###  FA_IR

• **FA_IR**: *string* = "fa-IR"

*Defined in [src/constants/rfc4646-language-codes.ts:55](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L55)*

###  FI_FI

• **FI_FI**: *string* = "fi-FI"

*Defined in [src/constants/rfc4646-language-codes.ts:56](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L56)*

###  FO_FO

• **FO_FO**: *string* = "fo-FO"

*Defined in [src/constants/rfc4646-language-codes.ts:54](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L54)*

###  FR_BE

• **FR_BE**: *string* = "fr-BE"

*Defined in [src/constants/rfc4646-language-codes.ts:57](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L57)*

###  FR_CA

• **FR_CA**: *string* = "fr-CA"

*Defined in [src/constants/rfc4646-language-codes.ts:58](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L58)*

###  FR_CH

• **FR_CH**: *string* = "fr-CH"

*Defined in [src/constants/rfc4646-language-codes.ts:62](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L62)*

###  FR_FR

• **FR_FR**: *string* = "fr-FR"

*Defined in [src/constants/rfc4646-language-codes.ts:59](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L59)*

###  FR_LU

• **FR_LU**: *string* = "fr-LU"

*Defined in [src/constants/rfc4646-language-codes.ts:60](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L60)*

###  FR_MC

• **FR_MC**: *string* = "fr-MC"

*Defined in [src/constants/rfc4646-language-codes.ts:61](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L61)*

###  GL_ES

• **GL_ES**: *string* = "gl-ES"

*Defined in [src/constants/rfc4646-language-codes.ts:63](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L63)*

###  GU_IN

• **GU_IN**: *string* = "gu-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:71](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L71)*

###  HE_IL

• **HE_IL**: *string* = "he-IL"

*Defined in [src/constants/rfc4646-language-codes.ts:72](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L72)*

###  HI_IN

• **HI_IN**: *string* = "hi-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:73](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L73)*

###  HR_HR

• **HR_HR**: *string* = "hr-HR"

*Defined in [src/constants/rfc4646-language-codes.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L34)*

###  HU_HU

• **HU_HU**: *string* = "hu-HU"

*Defined in [src/constants/rfc4646-language-codes.ts:74](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L74)*

###  HY_AM

• **HY_AM**: *string* = "hy-AM"

*Defined in [src/constants/rfc4646-language-codes.ts:20](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L20)*

###  ID_ID

• **ID_ID**: *string* = "id-ID"

*Defined in [src/constants/rfc4646-language-codes.ts:76](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L76)*

###  IS_IS

• **IS_IS**: *string* = "is-IS"

*Defined in [src/constants/rfc4646-language-codes.ts:75](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L75)*

###  IT_CH

• **IT_CH**: *string* = "it-CH"

*Defined in [src/constants/rfc4646-language-codes.ts:78](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L78)*

###  IT_IT

• **IT_IT**: *string* = "it-IT"

*Defined in [src/constants/rfc4646-language-codes.ts:77](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L77)*

###  JA_JP

• **JA_JP**: *string* = "ja-JP"

*Defined in [src/constants/rfc4646-language-codes.ts:79](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L79)*

###  KA_GE

• **KA_GE**: *string* = "ka-GE"

*Defined in [src/constants/rfc4646-language-codes.ts:64](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L64)*

###  KK_KZ

• **KK_KZ**: *string* = "kk-KZ"

*Defined in [src/constants/rfc4646-language-codes.ts:81](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L81)*

###  KN_IN

• **KN_IN**: *string* = "kn-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:80](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L80)*

###  KOK_IN

• **KOK_IN**: *string* = "kok-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:82](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L82)*

###  KO_KR

• **KO_KR**: *string* = "ko-KR"

*Defined in [src/constants/rfc4646-language-codes.ts:83](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L83)*

###  KY_KZ

• **KY_KZ**: *string* = "ky-KZ"

*Defined in [src/constants/rfc4646-language-codes.ts:84](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L84)*

###  LT_AZ_AZ

• **LT_AZ_AZ**: *string* = "Lt-az-AZ"

*Defined in [src/constants/rfc4646-language-codes.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L22)*

###  LT_LT

• **LT_LT**: *string* = "lt-LT"

*Defined in [src/constants/rfc4646-language-codes.ts:86](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L86)*

###  LT_SR_SP

• **LT_SR_SP**: *string* = "Lt-sr-SP"

*Defined in [src/constants/rfc4646-language-codes.ts:102](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L102)*

###  LT_UZ_UZ

• **LT_UZ_UZ**: *string* = "Lt-uz-UZ"

*Defined in [src/constants/rfc4646-language-codes.ts:136](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L136)*

###  LV_LV

• **LV_LV**: *string* = "lv-LV"

*Defined in [src/constants/rfc4646-language-codes.ts:85](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L85)*

###  MK_MK

• **MK_MK**: *string* = "mk-MK"

*Defined in [src/constants/rfc4646-language-codes.ts:87](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L87)*

###  MN_MN

• **MN_MN**: *string* = "mn-MN"

*Defined in [src/constants/rfc4646-language-codes.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L91)*

###  MR_IN

• **MR_IN**: *string* = "mr-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:90](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L90)*

###  MS_BN

• **MS_BN**: *string* = "ms-BN"

*Defined in [src/constants/rfc4646-language-codes.ts:88](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L88)*

###  MS_MY

• **MS_MY**: *string* = "ms-MY"

*Defined in [src/constants/rfc4646-language-codes.ts:89](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L89)*

###  NB_NO

• **NB_NO**: *string* = "nb-NO"

*Defined in [src/constants/rfc4646-language-codes.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L92)*

###  NL_BE

• **NL_BE**: *string* = "nl-BE"

*Defined in [src/constants/rfc4646-language-codes.ts:38](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L38)*

###  NL_NL

• **NL_NL**: *string* = "nl-NL"

*Defined in [src/constants/rfc4646-language-codes.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L39)*

###  NN_NO

• **NN_NO**: *string* = "nn-NO"

*Defined in [src/constants/rfc4646-language-codes.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L93)*

###  PA_IN

• **PA_IN**: *string* = "pa-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:97](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L97)*

###  PL_PL

• **PL_PL**: *string* = "pl-PL"

*Defined in [src/constants/rfc4646-language-codes.ts:94](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L94)*

###  PT_BR

• **PT_BR**: *string* = "pt-BR"

*Defined in [src/constants/rfc4646-language-codes.ts:95](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L95)*

###  PT_PT

• **PT_PT**: *string* = "pt-PT"

*Defined in [src/constants/rfc4646-language-codes.ts:96](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L96)*

###  RO_RO

• **RO_RO**: *string* = "ro-RO"

*Defined in [src/constants/rfc4646-language-codes.ts:98](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L98)*

###  RU_RU

• **RU_RU**: *string* = "ru-RU"

*Defined in [src/constants/rfc4646-language-codes.ts:99](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L99)*

###  SA_IN

• **SA_IN**: *string* = "sa-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:100](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L100)*

###  SK_SK

• **SK_SK**: *string* = "sk-SK"

*Defined in [src/constants/rfc4646-language-codes.ts:103](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L103)*

###  SL_SI

• **SL_SI**: *string* = "sl-SI"

*Defined in [src/constants/rfc4646-language-codes.ts:104](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L104)*

###  SQ_AL

• **SQ_AL**: *string* = "sq-AL"

*Defined in [src/constants/rfc4646-language-codes.ts:3](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L3)*

###  SV_FI

• **SV_FI**: *string* = "sv-FI"

*Defined in [src/constants/rfc4646-language-codes.ts:125](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L125)*

###  SV_SE

• **SV_SE**: *string* = "sv-SE"

*Defined in [src/constants/rfc4646-language-codes.ts:126](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L126)*

###  SW_KE

• **SW_KE**: *string* = "sw-KE"

*Defined in [src/constants/rfc4646-language-codes.ts:124](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L124)*

###  SYR_SY

• **SYR_SY**: *string* = "syr-SY"

*Defined in [src/constants/rfc4646-language-codes.ts:127](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L127)*

###  TA_IN

• **TA_IN**: *string* = "ta-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:128](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L128)*

###  TE_IN

• **TE_IN**: *string* = "te-IN"

*Defined in [src/constants/rfc4646-language-codes.ts:130](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L130)*

###  TH_TH

• **TH_TH**: *string* = "th-TH"

*Defined in [src/constants/rfc4646-language-codes.ts:131](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L131)*

###  TR_TR

• **TR_TR**: *string* = "tr-TR"

*Defined in [src/constants/rfc4646-language-codes.ts:132](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L132)*

###  TT_RU

• **TT_RU**: *string* = "tt-RU"

*Defined in [src/constants/rfc4646-language-codes.ts:129](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L129)*

###  UK_UA

• **UK_UA**: *string* = "uk-UA"

*Defined in [src/constants/rfc4646-language-codes.ts:133](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L133)*

###  UR_PK

• **UR_PK**: *string* = "ur-PK"

*Defined in [src/constants/rfc4646-language-codes.ts:134](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L134)*

###  VI_VN

• **VI_VN**: *string* = "vi-VN"

*Defined in [src/constants/rfc4646-language-codes.ts:137](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L137)*

###  ZH_CHS

• **ZH_CHS**: *string* = "zh-CHS"

*Defined in [src/constants/rfc4646-language-codes.ts:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L32)*

###  ZH_CHT

• **ZH_CHT**: *string* = "zh-CHT"

*Defined in [src/constants/rfc4646-language-codes.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L33)*

###  ZH_CN

• **ZH_CN**: *string* = "zh-CN"

*Defined in [src/constants/rfc4646-language-codes.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L27)*

###  ZH_HK

• **ZH_HK**: *string* = "zh-HK"

*Defined in [src/constants/rfc4646-language-codes.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L28)*

###  ZH_MO

• **ZH_MO**: *string* = "zh-MO"

*Defined in [src/constants/rfc4646-language-codes.ts:29](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L29)*

###  ZH_SG

• **ZH_SG**: *string* = "zh-SG"

*Defined in [src/constants/rfc4646-language-codes.ts:30](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L30)*

###  ZH_TW

• **ZH_TW**: *string* = "zh-TW"

*Defined in [src/constants/rfc4646-language-codes.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/constants/rfc4646-language-codes.ts#L31)*

___

### `Const` RouteUtils

### ▪ **RouteUtils**: *object*

*Defined in [src/utilities/route-utils.ts:146](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L146)*

###  appendQueryParams

• **appendQueryParams**: *[appendQueryParams](README.md#const-appendqueryparams)*

*Defined in [src/utilities/route-utils.ts:147](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L147)*

###  getUrl

• **getUrl**: *[getUrl](README.md#const-geturl)*

*Defined in [src/utilities/route-utils.ts:148](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L148)*

###  getUrlFromPath

• **getUrlFromPath**: *[getUrlFromPath](README.md#const-geturlfrompath)*

*Defined in [src/utilities/route-utils.ts:149](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L149)*

###  isAbsoluteUrl

• **isAbsoluteUrl**: *[isAbsoluteUrl](README.md#const-isabsoluteurl)*

*Defined in [src/utilities/route-utils.ts:150](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L150)*

###  queryStringToObject

• **queryStringToObject**: *[queryStringToObject](README.md#const-querystringtoobject)*

*Defined in [src/utilities/route-utils.ts:151](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L151)*

###  replacePathParams

• **replacePathParams**: *[replacePathParams](README.md#const-replacepathparams)*

*Defined in [src/utilities/route-utils.ts:152](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/route-utils.ts#L152)*

___

### `Const` ScrollUtils

### ▪ **ScrollUtils**: *object*

*Defined in [src/utilities/scroll-utils.ts:91](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L91)*

###  scrollToElementById

• **scrollToElementById**: *[_scrollToElementById](README.md#const-_scrolltoelementbyid)* = _scrollToElementById

*Defined in [src/utilities/scroll-utils.ts:92](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L92)*

###  scrollToHash

• **scrollToHash**: *[_scrollToHash](README.md#const-_scrolltohash)* = _scrollToHash

*Defined in [src/utilities/scroll-utils.ts:93](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/scroll-utils.ts#L93)*

___

### `Const` ServiceUtils

### ▪ **ServiceUtils**: *object*

*Defined in [src/utilities/service-utils.ts:159](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L159)*

###  configure

• **configure**: *[_configure](README.md#const-_configure)* = _configure

*Defined in [src/utilities/service-utils.ts:160](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L160)*

###  configureCultureCode

• **configureCultureCode**: *[_configureCultureCode](README.md#const-_configureculturecode)* = _configureCultureCode

*Defined in [src/utilities/service-utils.ts:161](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L161)*

###  mapAxiosResponse

• **mapAxiosResponse**: *[_mapAxiosResponse](README.md#const-_mapaxiosresponse)* = _mapAxiosResponse

*Defined in [src/utilities/service-utils.ts:162](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L162)*

###  mapPagedAxiosResponse

• **mapPagedAxiosResponse**: *[_mapPagedAxiosResponse](README.md#const-_mappagedaxiosresponse)* = _mapPagedAxiosResponse

*Defined in [src/utilities/service-utils.ts:163](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/service-utils.ts#L163)*

___

### `Const` StringUtils

### ▪ **StringUtils**: *object*

*Defined in [src/utilities/string-utils.ts:264](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L264)*

###  camelCase

• **camelCase**: *[camelCase](README.md#const-camelcase)*

*Defined in [src/utilities/string-utils.ts:265](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L265)*

###  capitalize

• **capitalize**: *[capitalize](README.md#const-capitalize)*

*Defined in [src/utilities/string-utils.ts:266](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L266)*

###  filename

• **filename**: *[filename](README.md#const-filename)*

*Defined in [src/utilities/string-utils.ts:267](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L267)*

###  hasValue

• **hasValue**: *[hasValue](README.md#const-hasvalue)*

*Defined in [src/utilities/string-utils.ts:268](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L268)*

###  isEmpty

• **isEmpty**: *[isEmpty](README.md#const-isempty)*

*Defined in [src/utilities/string-utils.ts:269](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L269)*

###  isValidCultureCode

• **isValidCultureCode**: *[isValidCultureCode](README.md#const-isvalidculturecode)*

*Defined in [src/utilities/string-utils.ts:270](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L270)*

###  isValidEmail

• **isValidEmail**: *[isValidEmail](README.md#const-isvalidemail)*

*Defined in [src/utilities/string-utils.ts:271](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L271)*

###  join

• **join**: *[join](README.md#const-join)*

*Defined in [src/utilities/string-utils.ts:272](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L272)*

###  lowerFirst

• **lowerFirst**: *[lowerFirst](README.md#const-lowerfirst)*

*Defined in [src/utilities/string-utils.ts:273](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L273)*

###  pad

• **pad**: *[pad](README.md#const-pad)*

*Defined in [src/utilities/string-utils.ts:274](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L274)*

###  padEnd

• **padEnd**: *[padEnd](README.md#const-padend)*

*Defined in [src/utilities/string-utils.ts:275](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L275)*

###  padStart

• **padStart**: *[padStart](README.md#const-padstart)*

*Defined in [src/utilities/string-utils.ts:276](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L276)*

###  pluralize

• **pluralize**: *[pluralize](README.md#const-pluralize)*

*Defined in [src/utilities/string-utils.ts:277](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L277)*

###  repeat

• **repeat**: *[repeat](README.md#const-repeat)*

*Defined in [src/utilities/string-utils.ts:278](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L278)*

###  snakeCase

• **snakeCase**: *[snakeCase](README.md#const-snakecase)*

*Defined in [src/utilities/string-utils.ts:279](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L279)*

###  startCase

• **startCase**: *[startCase](README.md#const-startcase)*

*Defined in [src/utilities/string-utils.ts:280](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L280)*

###  template

• **template**: *[template](README.md#const-template)*

*Defined in [src/utilities/string-utils.ts:281](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L281)*

###  truncateRight

• **truncateRight**: *[truncateRight](README.md#const-truncateright)*

*Defined in [src/utilities/string-utils.ts:282](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L282)*

###  upperFirst

• **upperFirst**: *[upperFirst](README.md#const-upperfirst)*

*Defined in [src/utilities/string-utils.ts:283](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L283)*

###  words

• **words**: *[words](README.md#const-words)*

*Defined in [src/utilities/string-utils.ts:284](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/string-utils.ts#L284)*

___

### `Const` defaultInitOptions

### ▪ **defaultInitOptions**: *object*

*Defined in [src/utilities/localization-utils.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L34)*

###  debug

• **debug**: *boolean* = EnvironmentUtils.isDevelopment()

*Defined in [src/utilities/localization-utils.ts:35](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L35)*

###  detection

• **detection**: *DetectorOptions* = detectionOptions

*Defined in [src/utilities/localization-utils.ts:36](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L36)*

###  escapeValue

• **escapeValue**: *false* = false

*Defined in [src/utilities/localization-utils.ts:37](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L37)*

___

### `Const` defaultValues

### ▪ **defaultValues**: *object*

*Defined in [src/view-models/result-error-record.ts:5](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/view-models/result-error-record.ts#L5)*

*Defined in [src/view-models/result-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/view-models/result-record.ts#L8)*

###  errors

• **errors**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/view-models/result-record.ts#L9)*

###  key

• **key**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:6](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/view-models/result-error-record.ts#L6)*

###  message

• **message**: *undefined* = undefined

*Defined in [src/view-models/result-error-record.ts:7](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/view-models/result-error-record.ts#L7)*

###  resultObject

• **resultObject**: *undefined* = undefined

*Defined in [src/view-models/result-record.ts:10](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/view-models/result-record.ts#L10)*

###  type

• **type**: *[Error](enums/errortype.md#error)* = ErrorType.Error

*Defined in [src/view-models/result-error-record.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/view-models/result-error-record.ts#L8)*

___

### `Const` detectionOptions

### ▪ **detectionOptions**: *object*

*Defined in [src/utilities/localization-utils.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L28)*

Defaults detection options for i18next-browser-languageDetector

###  lookupFromPathIndex

• **lookupFromPathIndex**: *number* = 0

*Defined in [src/utilities/localization-utils.ts:29](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L29)*

###  lookupQuerystring

• **lookupQuerystring**: *string* = routeParam

*Defined in [src/utilities/localization-utils.ts:30](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L30)*

###  order

• **order**: *string[]* = ["path", "querystring"]

*Defined in [src/utilities/localization-utils.ts:31](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/utilities/localization-utils.ts#L31)*
