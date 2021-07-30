[andculturecode-javascript-core](../README.md) › [PagedQuery](pagedquery.md)

# Interface: PagedQuery

## Hierarchy

* **PagedQuery**

## Index

### Properties

* [skip](pagedquery.md#optional-skip)
* [take](pagedquery.md#optional-take)

## Properties

### `Optional` skip

• **skip**? : *undefined | number*

*Defined in [src/interfaces/paged-query.ts:9](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/paged-query.ts#L9)*

Number of records to skip before retrieving rows.

___

### `Optional` take

• **take**? : *undefined | number*

*Defined in [src/interfaces/paged-query.ts:15](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/paged-query.ts#L15)*

Number of records to take in the request. (_Up_ to this number of records will be returned,
if available)
