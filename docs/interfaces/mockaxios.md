[andculturecode-javascript-core](../README.md) › [MockAxios](mockaxios.md)

# Interface: MockAxios

## Hierarchy

* **MockAxios**

## Index

### Properties

* [delete](mockaxios.md#delete)
* [deleteSuccess](mockaxios.md#deletesuccess)
* [get](mockaxios.md#get)
* [getSuccess](mockaxios.md#getsuccess)
* [listSuccess](mockaxios.md#listsuccess)
* [post](mockaxios.md#post)
* [postSuccess](mockaxios.md#postsuccess)
* [put](mockaxios.md#put)
* [putSuccess](mockaxios.md#putsuccess)

## Properties

###  delete

• **delete**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L17)*

___

###  deleteSuccess

• **deleteSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:24](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L24)*

Simple way to mock a successful axios delete request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record?`: any, `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record?` | any |
`delay?` | undefined &#124; number |

___

###  get

• **get**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:26](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L26)*

___

###  getSuccess

• **getSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:33](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L33)*

Simple way to mock a successful axios get/find request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record`: any, `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

___

###  listSuccess

• **listSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:40](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L40)*

Simple way to mock a successful axios get/list request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`records`: any[], `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`records` | any[] |
`delay?` | undefined &#124; number |

___

###  post

• **post**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:42](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L42)*

___

###  postSuccess

• **postSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:49](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L49)*

Simple way to mock a successful axios post request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record`: any, `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |

___

###  put

• **put**: *[AxiosJestMock](../README.md#axiosjestmock)*

*Defined in [src/tests/mocks/mock-axios.ts:51](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L51)*

___

###  putSuccess

• **putSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:58](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/2bc0049/src/tests/mocks/mock-axios.ts#L58)*

Simple way to mock a successful axios put request

**`param`** value to return when resolved

**`param`** milliseconds to delay before resolving the promise

#### Type declaration:

▸ (`record`: any, `delay?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`record` | any |
`delay?` | undefined &#124; number |
