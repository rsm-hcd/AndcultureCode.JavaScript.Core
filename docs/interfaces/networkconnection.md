[andculturecode-javascript-core](../README.md) › [NetworkConnection](networkconnection.md)

# Interface: NetworkConnection

## Hierarchy

  ↳ [NetworkInformation](networkinformation.md)

  ↳ **NetworkConnection**

## Index

### Properties

* [downlink](networkconnection.md#optional-downlink)
* [downlinkMax](networkconnection.md#optional-downlinkmax)
* [effectiveType](networkconnection.md#optional-effectivetype)
* [isOnline](networkconnection.md#isonline)
* [rtt](networkconnection.md#optional-rtt)
* [saveData](networkconnection.md#optional-savedata)
* [type](networkconnection.md#optional-type)

## Properties

### `Optional` downlink

• **downlink**? : *undefined | number*

*Inherited from [NetworkInformation](networkinformation.md).[downlink](networkinformation.md#optional-downlink)*

*Defined in [src/interfaces/network-information.ts:17](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L17)*

Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.

___

### `Optional` downlinkMax

• **downlinkMax**? : *undefined | number*

*Inherited from [NetworkInformation](networkinformation.md).[downlinkMax](networkinformation.md#optional-downlinkmax)*

*Defined in [src/interfaces/network-information.ts:22](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L22)*

Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.

___

### `Optional` effectiveType

• **effectiveType**? : *[EffectiveConnectionType](../enums/effectiveconnectiontype.md)*

*Inherited from [NetworkInformation](networkinformation.md).[effectiveType](networkinformation.md#optional-effectivetype)*

*Defined in [src/interfaces/network-information.ts:28](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L28)*

Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'.
This value is determined using a combination of recently observed round-trip time and downlink values.

___

###  isOnline

• **isOnline**: *boolean*

*Defined in [src/interfaces/network-connection.ts:11](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-connection.ts#L11)*

Returns a true or false indicating whether the browser is working online.

___

### `Optional` rtt

• **rtt**? : *undefined | number*

*Inherited from [NetworkInformation](networkinformation.md).[rtt](networkinformation.md#optional-rtt)*

*Defined in [src/interfaces/network-information.ts:34](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L34)*

Returns the estimated effective round-trip time of the current connection, rounded to the
nearest multiple of 25 milliseconds.

___

### `Optional` saveData

• **saveData**? : *undefined | false | true*

*Inherited from [NetworkInformation](networkinformation.md).[saveData](networkinformation.md#optional-savedata)*

*Defined in [src/interfaces/network-information.ts:39](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L39)*

Returns true if the user has set a reduced data usage option on the user agent.

___

### `Optional` type

• **type**? : *[ConnectionType](../enums/connectiontype.md)*

*Inherited from [NetworkInformation](networkinformation.md).[type](networkinformation.md#optional-type)*

*Defined in [src/interfaces/network-information.ts:44](https://github.com/AndcultureCode/AndcultureCode.JavaScript.Core/blob/fbcbf56/src/interfaces/network-information.ts#L44)*

Returns the type of connection a device is using to communicate with the network
