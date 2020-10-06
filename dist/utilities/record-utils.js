"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------
/**
 * Function to ensure a given object is an instance of a specific Record `T`. If it is not, one will
 * be instantiated with the given constructor.
 *
 * If `maybeRecord` is already an instance of `T`, it returns that value.
 *
 * @param maybeRecord Object or Record to be coalesced into a Record.
 * @param record Type of the Record to be instantiated
 */
var _ensureRecord = function (maybeRecord, record) {
    return _isRecord(maybeRecord, record) ? maybeRecord : new record(maybeRecord);
};
/**
 * Function to verify a given object is an instance of a specific Record `T`.
 *
 * @param maybeRecord Object or Record to be checked as an instance of `T`
 * @param record Type of the Record to be checked
 */
var _isRecord = function (maybeRecord, record) {
    return immutable_1.Record.isRecord(maybeRecord) && maybeRecord instanceof record;
};
// #endregion Functions
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
var RecordUtils = {
    ensureRecord: _ensureRecord,
    isRecord: _isRecord,
};
exports.RecordUtils = RecordUtils;
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9yZWNvcmQtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBbUM7QUFHbkMsNEZBQTRGO0FBQzVGLG9CQUFvQjtBQUNwQiw0RkFBNEY7QUFFNUY7Ozs7Ozs7O0dBUUc7QUFDSCxJQUFNLGFBQWEsR0FBRyxVQUFJLFdBQWdCLEVBQUUsTUFBc0I7SUFDOUQsT0FBQSxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUF0RSxDQUFzRSxDQUFDO0FBRTNFOzs7OztHQUtHO0FBQ0gsSUFBTSxTQUFTLEdBQUcsVUFBSSxXQUFnQixFQUFFLE1BQXNCO0lBQzFELE9BQUEsa0JBQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxZQUFZLE1BQU07QUFBN0QsQ0FBNkQsQ0FBQztBQUVsRSx1QkFBdUI7QUFFdkIsNEZBQTRGO0FBQzVGLGtCQUFrQjtBQUNsQiw0RkFBNEY7QUFFNUYsSUFBTSxXQUFXLEdBQUc7SUFDaEIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsUUFBUSxFQUFFLFNBQVM7Q0FDdEIsQ0FBQztBQUVPLGtDQUFXO0FBRXBCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY29yZCB9IGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXMvY29uc3RydWN0b3JcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRnVuY3Rpb25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdG8gZW5zdXJlIGEgZ2l2ZW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIGEgc3BlY2lmaWMgUmVjb3JkIGBUYC4gSWYgaXQgaXMgbm90LCBvbmUgd2lsbFxyXG4gKiBiZSBpbnN0YW50aWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gY29uc3RydWN0b3IuXHJcbiAqXHJcbiAqIElmIGBtYXliZVJlY29yZGAgaXMgYWxyZWFkeSBhbiBpbnN0YW5jZSBvZiBgVGAsIGl0IHJldHVybnMgdGhhdCB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIG1heWJlUmVjb3JkIE9iamVjdCBvciBSZWNvcmQgdG8gYmUgY29hbGVzY2VkIGludG8gYSBSZWNvcmQuXHJcbiAqIEBwYXJhbSByZWNvcmQgVHlwZSBvZiB0aGUgUmVjb3JkIHRvIGJlIGluc3RhbnRpYXRlZFxyXG4gKi9cclxuY29uc3QgX2Vuc3VyZVJlY29yZCA9IDxUPihtYXliZVJlY29yZDogYW55LCByZWNvcmQ6IENvbnN0cnVjdG9yPFQ+KTogVCA9PlxyXG4gICAgX2lzUmVjb3JkKG1heWJlUmVjb3JkLCByZWNvcmQpID8gbWF5YmVSZWNvcmQgOiBuZXcgcmVjb3JkKG1heWJlUmVjb3JkKTtcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0byB2ZXJpZnkgYSBnaXZlbiBvYmplY3QgaXMgYW4gaW5zdGFuY2Ugb2YgYSBzcGVjaWZpYyBSZWNvcmQgYFRgLlxyXG4gKlxyXG4gKiBAcGFyYW0gbWF5YmVSZWNvcmQgT2JqZWN0IG9yIFJlY29yZCB0byBiZSBjaGVja2VkIGFzIGFuIGluc3RhbmNlIG9mIGBUYFxyXG4gKiBAcGFyYW0gcmVjb3JkIFR5cGUgb2YgdGhlIFJlY29yZCB0byBiZSBjaGVja2VkXHJcbiAqL1xyXG5jb25zdCBfaXNSZWNvcmQgPSA8VD4obWF5YmVSZWNvcmQ6IGFueSwgcmVjb3JkOiBDb25zdHJ1Y3RvcjxUPik6IGJvb2xlYW4gPT5cclxuICAgIFJlY29yZC5pc1JlY29yZChtYXliZVJlY29yZCkgJiYgbWF5YmVSZWNvcmQgaW5zdGFuY2VvZiByZWNvcmQ7XHJcblxyXG4vLyAjZW5kcmVnaW9uIEZ1bmN0aW9uc1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBFeHBvcnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBSZWNvcmRVdGlscyA9IHtcclxuICAgIGVuc3VyZVJlY29yZDogX2Vuc3VyZVJlY29yZCxcclxuICAgIGlzUmVjb3JkOiBfaXNSZWNvcmQsXHJcbn07XHJcblxyXG5leHBvcnQgeyBSZWNvcmRVdGlscyB9O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBFeHBvcnRzXHJcbiJdfQ==