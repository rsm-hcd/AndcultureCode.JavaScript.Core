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

*Defined in [src/tests/mocks/mock-axios.ts:16](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L16)*

___

###  deleteSuccess

• **deleteSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:23](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L23)*

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

*Defined in [src/tests/mocks/mock-axios.ts:25](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L25)*

___

###  getSuccess

• **getSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:32](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L32)*

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

*Defined in [src/tests/mocks/mock-axios.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L39)*

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

*Defined in [src/tests/mocks/mock-axios.ts:41](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L41)*

___

###  postSuccess

• **postSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:48](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L48)*

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

*Defined in [src/tests/mocks/mock-axios.ts:50](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L50)*

___

###  putSuccess

• **putSuccess**: *function*

*Defined in [src/tests/mocks/mock-axios.ts:57](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/47e6187/src/tests/mocks/mock-axios.ts#L57)*

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
