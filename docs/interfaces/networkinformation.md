[andculturecode-javascript-core](../README.md) › [NetworkInformation](networkinformation.md)

# Interface: NetworkInformation

NetworkInformation - Network Information API
- Draft Community Group Report 11 May 2020
- https://wicg.github.io/netinfo/#networkinformation-interface

## Hierarchy

* object

  ↳ **NetworkInformation**

  ↳ [NetworkConnection](networkconnection.md)

## Index

### Properties

* [downlink](networkinformation.md#optional-downlink)
* [downlinkMax](networkinformation.md#optional-downlinkmax)
* [effectiveType](networkinformation.md#optional-effectivetype)
* [rtt](networkinformation.md#optional-rtt)
* [saveData](networkinformation.md#optional-savedata)
* [type](networkinformation.md#optional-type)

## Properties

### `Optional` downlink

• **downlink**? : *undefined | number*

*Defined in [src/interfaces/network-information.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L17)*

Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.

___

### `Optional` downlinkMax

• **downlinkMax**? : *undefined | number*

*Defined in [src/interfaces/network-information.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L22)*

Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.

___

### `Optional` effectiveType

• **effectiveType**? : *[EffectiveConnectionType](../enums/effectiveconnectiontype.md)*

*Defined in [src/interfaces/network-information.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L28)*

Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'.
This value is determined using a combination of recently observed round-trip time and downlink values.

___

### `Optional` rtt

• **rtt**? : *undefined | number*

*Defined in [src/interfaces/network-information.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L34)*

Returns the estimated effective round-trip time of the current connection, rounded to the
nearest multiple of 25 milliseconds.

___

### `Optional` saveData

• **saveData**? : *undefined | false | true*

*Defined in [src/interfaces/network-information.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L39)*

Returns true if the user has set a reduced data usage option on the user agent.

___

### `Optional` type

• **type**? : *[ConnectionType](../enums/connectiontype.md)*

*Defined in [src/interfaces/network-information.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L44)*

Returns the type of connection a device is using to communicate with the network
