[andculturecode-javascript-core](../README.md) › [DoTryConfig](dotryconfig.md)

# Interface: DoTryConfig

## Hierarchy

* **DoTryConfig**

## Index

### Properties

* [defaultErrorHandler](dotryconfig.md#optional-defaulterrorhandler)

## Properties

### `Optional` defaultErrorHandler

• **defaultErrorHandler**? : *[CatchHandler](../README.md#catchhandler)‹any›*

*Defined in [src/types/do-try-types.ts:19](https://github.com/mrjones2014/AndcultureCode.JavaScript.Core/blob/7c31cdb/src/types/do-try-types.ts#L19)*

A default handler that will always run on error, if configured,
even if a `catch()` does not exist in the call chain.
This is useful for adding default error handling in the
development environment, such as `console.error(err)`.
