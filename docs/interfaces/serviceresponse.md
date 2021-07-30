[andculturecode-javascript-core](../README.md) › [ServiceResponse](serviceresponse.md)

# Interface: ServiceResponse <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **ServiceResponse**

## Index

### Properties

* [result](serviceresponse.md#optional-result)
* [resultObject](serviceresponse.md#optional-resultobject)
* [resultObjects](serviceresponse.md#resultobjects)
* [results](serviceresponse.md#optional-results)
* [rowCount](serviceresponse.md#rowcount)
* [status](serviceresponse.md#status)

## Properties

### `Optional` result

• **result**? : *[ResultRecord](../classes/resultrecord.md)‹T›*

*Defined in [src/interfaces/service-response.ts:8](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/service-response.ts#L8)*

Result object containing detailed response information,
such as; errors, result data, etc...

___

### `Optional` resultObject

• **resultObject**? : *T*

*Defined in [src/interfaces/service-response.ts:14](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/service-response.ts#L14)*

Convenience property to read result's nested record

___

###  resultObjects

• **resultObjects**: *T[]*

*Defined in [src/interfaces/service-response.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/service-response.ts#L15)*

___

### `Optional` results

• **results**? : *[ResultRecord](../classes/resultrecord.md)‹T[]›*

*Defined in [src/interfaces/service-response.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/service-response.ts#L9)*

___

###  rowCount

• **rowCount**: *number*

*Defined in [src/interfaces/service-response.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/service-response.ts#L22)*

Totoal possible records available for the initial service request. If greater
than total results in this response, additional pages of results can be
requested from the API

___

###  status

• **status**: *number*

*Defined in [src/interfaces/service-response.ts:27](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/service-response.ts#L27)*

HTTP status code of the response
