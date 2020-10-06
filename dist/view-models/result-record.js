"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var collection_utils_1 = require("../utilities/collection-utils");
var immutable_1 = __importDefault(require("immutable"));
var result_error_record_1 = require("./result-error-record");
var error_type_1 = require("../enumerations/error-type");
var record_utils_1 = require("../utilities/record-utils");
var defaultValues = {
    errors: undefined,
    resultObject: undefined,
};
var ResultRecord = /** @class */ (function (_super) {
    __extends(ResultRecord, _super);
    // Do NOT set properties on Immutable records due to babel and typescript transpilation issue
    // See https://github.com/facebook/create-react-app/issues/6506
    // -----------------------------------------------------------------------------------------
    // #region Constructor
    // -----------------------------------------------------------------------------------------
    function ResultRecord(params) {
        var _this = this;
        if (params == null) {
            params = Object.assign(defaultValues, params);
        }
        if (collection_utils_1.CollectionUtils.hasValues(params.errors)) {
            var errors = params.errors;
            params.errors = errors.map(function (error) {
                return record_utils_1.RecordUtils.ensureRecord(error, result_error_record_1.ResultErrorRecord);
            });
        }
        _this = _super.call(this, params) || this;
        return _this;
    }
    // #endregion Constructor
    // -----------------------------------------------------------------------------------------
    // #region Public Methods
    // -----------------------------------------------------------------------------------------
    /**
     * Adds a new error with the supplied details and returns a new ResultRecord
     * @param key error key value (typically property name)
     * @param message error message value
     * @param type type of error (default of 'Error')
     */
    ResultRecord.prototype.addError = function (key, message) {
        return this._addErrorByType(key, message, error_type_1.ErrorType.Error);
    };
    /**
     * Adds a new validation error with the supplied details and returns a new ResultRecord
     * @param key error key value (typically property name)
     * @param message error message value
     * @param type type of error (default of 'Error')
     */
    ResultRecord.prototype.addValidationError = function (key, message) {
        return this._addErrorByType(key, message, error_type_1.ErrorType.ValidationError);
    };
    /**
     * Evaluates whether there are any errors on the result
     */
    ResultRecord.prototype.doesNotHaveErrors = function () {
        return !this.hasErrors();
    };
    /**
     * Returns total number of errors
     */
    ResultRecord.prototype.errorCount = function () {
        if (this.doesNotHaveErrors()) {
            return 0;
        }
        return this.errors.length;
    };
    /**
     * Returns an error message for a given key
     * @param key
     */
    ResultRecord.prototype.getErrorMessageFor = function (key) {
        var _a, _b;
        return (_b = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.find(function (e) { return e.key === key; })) === null || _b === void 0 ? void 0 : _b.message;
    };
    /**
     * Determines if the result contains an error for the supplied key(s)
     * @param keys error keys for which to search
     */
    ResultRecord.prototype.hasErrorFor = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        if (this.doesNotHaveErrors()) {
            return false;
        }
        return this.errors.some(function (error) {
            return keys.some(function (key) { return key === error.key; });
        });
    };
    /**
     * Evaluates whether there are any errors on the result
     */
    ResultRecord.prototype.hasErrors = function () {
        return collection_utils_1.CollectionUtils.hasValues(this.errors);
    };
    /**
     * Map all errors into simple string array
     */
    ResultRecord.prototype.listErrors = function () {
        if (this.doesNotHaveErrors()) {
            return [];
        }
        var errors = this.errors;
        return errors.map(function (e) { return e.fullError(); });
    };
    /**
     * Map all error messages into a simple string array.
     */
    ResultRecord.prototype.listErrorMessages = function () {
        if (this.doesNotHaveErrors()) {
            return [];
        }
        var errors = this.errors;
        return errors
            .map(function (e) { return String(e.message) || ""; })
            .filter(function (e) { return e !== ""; });
    };
    /**
     * Merges new values into the record and returns a new instance.
     *
     * @param {Partial<Result<T>>} values
     * @returns {ResultRecord<T>}
     * @memberof ResultRecord
     */
    ResultRecord.prototype.with = function (values) {
        return new ResultRecord(Object.assign(this.toJS(), values));
    };
    // #endregion Public Methods
    // -----------------------------------------------------------------------------------------
    // #region Private Methods
    // -----------------------------------------------------------------------------------------
    ResultRecord.prototype._addErrorByType = function (key, message, errorType) {
        var result = this.errors != null ? this.errors : [];
        result.push(new result_error_record_1.ResultErrorRecord({
            key: key,
            message: message,
            type: errorType,
        }));
        return this.with({ errors: result });
    };
    return ResultRecord;
}(immutable_1.default.Record(defaultValues)));
exports.ResultRecord = ResultRecord;
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LXJlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3LW1vZGVscy9yZXN1bHQtcmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUFnRTtBQUNoRSx3REFBa0M7QUFDbEMsNkRBQTBEO0FBRTFELHlEQUF1RDtBQUN2RCwwREFBd0Q7QUFFeEQsSUFBTSxhQUFhLEdBQWdCO0lBQy9CLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFlBQVksRUFBRSxTQUFTO0NBQzFCLENBQUM7QUFFRjtJQUE4QixnQ0FBK0I7SUFFekQsNkZBQTZGO0lBQzdGLCtEQUErRDtJQUUvRCw0RkFBNEY7SUFDNUYsc0JBQXNCO0lBQ3RCLDRGQUE0RjtJQUU1RixzQkFBWSxNQUFrQjtRQUE5QixpQkFhQztRQVpHLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDakQ7UUFFRCxJQUFJLGtDQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBZSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7Z0JBQzdCLE9BQUEsMEJBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLHVDQUFpQixDQUFDO1lBQWxELENBQWtELENBQ3JELENBQUM7U0FDTDtRQUVELFFBQUEsa0JBQU0sTUFBTSxDQUFDLFNBQUM7O0lBQ2xCLENBQUM7SUFFRCx5QkFBeUI7SUFFekIsNEZBQTRGO0lBQzVGLHlCQUF5QjtJQUN6Qiw0RkFBNEY7SUFFNUY7Ozs7O09BS0c7SUFDSSwrQkFBUSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxPQUFlO1FBQ3hDLE9BQU8sSUFBSSxDQUFD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SSxHQUFXLEVBQ1gsT0FBZSxFQUNmLFNBQW9CO1FBRXBCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FDUCxJQUFJLHVDQUFpQixDQUFDO1lBQ2xCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUNMLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0wsbUJBQUM7QUFBRCxDQUFDLEFBOUpELENBQThCLG1CQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQThKNUQ7QUFNUSxvQ0FBWTtBQUVyQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uVXRpbHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbGxlY3Rpb24tdXRpbHNcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7IFJlc3VsdEVycm9yUmVjb3JkIH0gZnJvbSBcIi4vcmVzdWx0LWVycm9yLXJlY29yZFwiO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9yZXN1bHRcIjtcclxuaW1wb3J0IHsgRXJyb3JUeXBlIH0gZnJvbSBcIi4uL2VudW1lcmF0aW9ucy9lcnJvci10eXBlXCI7XHJcbmltcG9ydCB7IFJlY29yZFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yZWNvcmQtdXRpbHNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IFJlc3VsdDxhbnk+ID0ge1xyXG4gICAgZXJyb3JzOiB1bmRlZmluZWQsXHJcbiAgICByZXN1bHRPYmplY3Q6IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmNsYXNzIFJlc3VsdFJlY29yZDxUPiBleHRlbmRzIEltbXV0YWJsZS5SZWNvcmQoZGVmYXVsdFZhbHVlcylcclxuICAgIGltcGxlbWVudHMgUmVzdWx0PFQ+IHtcclxuICAgIC8vIERvIE5PVCBzZXQgcHJvcGVydGllcyBvbiBJbW11dGFibGUgcmVjb3JkcyBkdWUgdG8gYmFiZWwgYW5kIHR5cGVzY3JpcHQgdHJhbnNwaWxhdGlvbiBpc3N1ZVxyXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9jcmVhdGUtcmVhY3QtYXBwL2lzc3Vlcy82NTA2XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zPzogUmVzdWx0PFQ+KSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdFZhbHVlcywgcGFyYW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDb2xsZWN0aW9uVXRpbHMuaGFzVmFsdWVzKHBhcmFtcy5lcnJvcnMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHBhcmFtcy5lcnJvcnMgYXMgYW55W107XHJcbiAgICAgICAgICAgIHBhcmFtcy5lcnJvcnMgPSBlcnJvcnMubWFwKChlcnJvcikgPT5cclxuICAgICAgICAgICAgICAgIFJlY29yZFV0aWxzLmVuc3VyZVJlY29yZChlcnJvciwgUmVzdWx0RXJyb3JSZWNvcmQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBuZXcgZXJyb3Igd2l0aCB0aGUgc3VwcGxpZWQgZGV0YWlscyBhbmQgcmV0dXJucyBhIG5ldyBSZXN1bHRSZWNvcmRcclxuICAgICAqIEBwYXJhbSBrZXkgZXJyb3Iga2V5IHZhbHVlICh0eXBpY2FsbHkgcHJvcGVydHkgbmFtZSlcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIGVycm9yIG1lc3NhZ2UgdmFsdWVcclxuICAgICAqIEBwYXJhbSB0eXBlIHR5cGUgb2YgZXJyb3IgKGRlZmF1bHQgb2YgJ0Vycm9yJylcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEVycm9yKGtleTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBSZXN1bHRSZWNvcmQ8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRFcnJvckJ5VHlwZShrZXksIG1lc3NhZ2UsIEVycm9yVHlwZS5FcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgbmV3IHZhbGlkYXRpb24gZXJyb3Igd2l0aCB0aGUgc3VwcGxpZWQgZGV0YWlscyBhbmQgcmV0dXJucyBhIG5ldyBSZXN1bHRSZWNvcmRcclxuICAgICAqIEBwYXJhbSBrZXkgZXJyb3Iga2V5IHZhbHVlICh0eXBpY2FsbHkgcHJvcGVydHkgbmFtZSlcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIGVycm9yIG1lc3NhZ2UgdmFsdWVcclxuICAgICAqIEBwYXJhbSB0eXBlIHR5cGUgb2YgZXJyb3IgKGRlZmF1bHQgb2YgJ0Vycm9yJylcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFZhbGlkYXRpb25FcnJvcihrZXk6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUmVzdWx0UmVjb3JkPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkRXJyb3JCeVR5cGUoa2V5LCBtZXNzYWdlLCBFcnJvclR5cGUuVmFsaWRhdGlvbkVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2YWx1YXRlcyB3aGV0aGVyIHRoZXJlIGFyZSBhbnkgZXJyb3JzIG9uIHRoZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvZXNOb3RIYXZlRXJyb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5oYXNFcnJvcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdG90YWwgbnVtYmVyIG9mIGVycm9yc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXJyb3JDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLmRvZXNOb3RIYXZlRXJyb3JzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gZXJyb3IgbWVzc2FnZSBmb3IgYSBnaXZlbiBrZXlcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEVycm9yTWVzc2FnZUZvcihrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzPy5maW5kKChlKSA9PiBlLmtleSA9PT0ga2V5KT8ubWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgaWYgdGhlIHJlc3VsdCBjb250YWlucyBhbiBlcnJvciBmb3IgdGhlIHN1cHBsaWVkIGtleShzKVxyXG4gICAgICogQHBhcmFtIGtleXMgZXJyb3Iga2V5cyBmb3Igd2hpY2ggdG8gc2VhcmNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNFcnJvckZvciguLi5rZXlzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRvZXNOb3RIYXZlRXJyb3JzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzIS5zb21lKChlcnJvcjogUmVzdWx0RXJyb3JSZWNvcmQpID0+XHJcbiAgICAgICAgICAgIGtleXMuc29tZSgoa2V5OiBzdHJpbmcpID0+IGtleSA9PT0gZXJyb3Iua2V5KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmFsdWF0ZXMgd2hldGhlciB0aGVyZSBhcmUgYW55IGVycm9ycyBvbiB0aGUgcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIENvbGxlY3Rpb25VdGlscy5oYXNWYWx1ZXModGhpcy5lcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIGFsbCBlcnJvcnMgaW50byBzaW1wbGUgc3RyaW5nIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0RXJyb3JzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBpZiAodGhpcy5kb2VzTm90SGF2ZUVycm9ycygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5lcnJvcnMgYXMgUmVzdWx0RXJyb3JSZWNvcmRbXTtcclxuICAgICAgICByZXR1cm4gZXJyb3JzLm1hcCgoZSkgPT4gZS5mdWxsRXJyb3IoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXAgYWxsIGVycm9yIG1lc3NhZ2VzIGludG8gYSBzaW1wbGUgc3RyaW5nIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdEVycm9yTWVzc2FnZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmRvZXNOb3RIYXZlRXJyb3JzKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5lcnJvcnMgYXMgUmVzdWx0RXJyb3JSZWNvcmRbXTtcclxuICAgICAgICByZXR1cm4gZXJyb3JzXHJcbiAgICAgICAgICAgIC5tYXAoKGUpID0+IFN0cmluZyhlLm1lc3NhZ2UpIHx8IFwiXCIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGUpID0+IGUgIT09IFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVyZ2VzIG5ldyB2YWx1ZXMgaW50byB0aGUgcmVjb3JkIGFuZCByZXR1cm5zIGEgbmV3IGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UGFydGlhbDxSZXN1bHQ8VD4+fSB2YWx1ZXNcclxuICAgICAqIEByZXR1cm5zIHtSZXN1bHRSZWNvcmQ8VD59XHJcbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0UmVjb3JkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aXRoKHZhbHVlczogUGFydGlhbDxSZXN1bHQ8VD4+KTogUmVzdWx0UmVjb3JkPFQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlc3VsdFJlY29yZDxUPihPYmplY3QuYXNzaWduKHRoaXMudG9KUygpLCB2YWx1ZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vICNyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIHByaXZhdGUgX2FkZEVycm9yQnlUeXBlKFxyXG4gICAgICAgIGtleTogc3RyaW5nLFxyXG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZyxcclxuICAgICAgICBlcnJvclR5cGU6IEVycm9yVHlwZVxyXG4gICAgKTogUmVzdWx0UmVjb3JkPFQ+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmVycm9ycyAhPSBudWxsID8gdGhpcy5lcnJvcnMgOiBbXTtcclxuXHJcbiAgICAgICAgcmVzdWx0LnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBSZXN1bHRFcnJvclJlY29yZCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBlcnJvclR5cGUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l0aCh7IGVycm9yczogcmVzdWx0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRXhwb3J0c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IHsgUmVzdWx0UmVjb3JkIH07XHJcblxyXG4vLyAjZW5kcmVnaW9uIEV4cG9ydHNcclxuIl19