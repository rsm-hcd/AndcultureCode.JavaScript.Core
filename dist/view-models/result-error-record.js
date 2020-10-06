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
var immutable_1 = __importDefault(require("immutable"));
var error_type_1 = require("../enumerations/error-type");
var defaultValues = {
    key: undefined,
    message: undefined,
    type: error_type_1.ErrorType.Error,
};
var ResultErrorRecord = /** @class */ (function (_super) {
    __extends(ResultErrorRecord, _super);
    // Do NOT set properties on immutable records due to babel and typescript transpilation issue
    // See https://github.com/facebook/create-react-app/issues/6506
    // -----------------------------------------------------------------------------------------
    // #region Constructor
    // -----------------------------------------------------------------------------------------
    function ResultErrorRecord(params) {
        var _this = this;
        if (params == null) {
            params = {};
        }
        if (params.type == null) {
            params.type = error_type_1.ErrorType.Error;
        }
        _this = _super.call(this, params) || this;
        return _this;
    }
    // #endregion Constructor
    // -----------------------------------------------------------------------------------------
    // #region Public Methods
    // -----------------------------------------------------------------------------------------
    /**
     * Display error key and message
     */
    ResultErrorRecord.prototype.fullError = function () {
        return this.key + ": " + this.message;
    };
    /**
     * Merges new values into the record and returns a new instance.
     *
     * @param {Partial<ResultError>} values
     * @returns {ResultErrorRecord}
     * @memberof ResultErrorRecord
     */
    ResultErrorRecord.prototype.with = function (values) {
        return new ResultErrorRecord(Object.assign(this.toJS(), values));
    };
    return ResultErrorRecord;
}(immutable_1.default.Record(defaultValues)));
exports.ResultErrorRecord = ResultErrorRecord;
// #endregion Export
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWVycm9yLXJlY29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3LW1vZGVscy9yZXN1bHQtZXJyb3ItcmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFrQztBQUVsQyx5REFBdUQ7QUFFdkQsSUFBTSxhQUFhLEdBQWdCO0lBQy9CLEdBQUcsRUFBRSxTQUFTO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsSUFBSSxFQUFFLHNCQUFTLENBQUMsS0FBSztDQUN4QixDQUFDO0FBRUY7SUFBZ0MscUNBQStCO0lBRTNELDZGQUE2RjtJQUM3RiwrREFBK0Q7SUFFL0QsNEZBQTRGO0lBQzVGLHNCQUFzQjtJQUN0Qiw0RkFBNEY7SUFFNUYsMkJBQVksTUFBb0I7UUFBaEMsaUJBVUM7UUFURyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNmO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNyQixNQUFNLENBQUMsSUFBSSxHQUFHLHNCQUFTLENBQUMsS0FBSyxDQUFDO1NBQ2pDO1FBRUQsUUFBQSxrQkFBTSxNQUFNLENBQUMsU0FBQzs7SUFDbEIsQ0FBQztJQUVELHlCQUF5QjtJQUV6Qiw0RkFBNEY7SUFDNUYseUJBQXlCO0lBQ3pCLDRGQUE0RjtJQUU1Rjs7T0FFRztJQUNJLHFDQUFTLEdBQWhCO1FBQ0ksT0FBVSxJQUFJLENBQUMsR0FBRyxVQUFLLElBQUksQ0FBQyxPQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGdDQUFJLEdBQVgsVUFBWSxNQUE0QjtRQUNwQyxPQUFPLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBR0wsd0JBQUM7QUFBRCxDQUFDLEFBOUNELENBQWdDLG1CQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQThDOUQ7QUFNUSw4Q0FBaUI7QUFFMUIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7IFJlc3VsdEVycm9yIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcmVzdWx0LWVycm9yXCI7XHJcbmltcG9ydCB7IEVycm9yVHlwZSB9IGZyb20gXCIuLi9lbnVtZXJhdGlvbnMvZXJyb3ItdHlwZVwiO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlczogUmVzdWx0RXJyb3IgPSB7XHJcbiAgICBrZXk6IHVuZGVmaW5lZCxcclxuICAgIG1lc3NhZ2U6IHVuZGVmaW5lZCxcclxuICAgIHR5cGU6IEVycm9yVHlwZS5FcnJvcixcclxufTtcclxuXHJcbmNsYXNzIFJlc3VsdEVycm9yUmVjb3JkIGV4dGVuZHMgaW1tdXRhYmxlLlJlY29yZChkZWZhdWx0VmFsdWVzKVxyXG4gICAgaW1wbGVtZW50cyBSZXN1bHRFcnJvciB7XHJcbiAgICAvLyBEbyBOT1Qgc2V0IHByb3BlcnRpZXMgb24gaW1tdXRhYmxlIHJlY29yZHMgZHVlIHRvIGJhYmVsIGFuZCB0eXBlc2NyaXB0IHRyYW5zcGlsYXRpb24gaXNzdWVcclxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvNjUwNlxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcz86IFJlc3VsdEVycm9yKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy50eXBlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnR5cGUgPSBFcnJvclR5cGUuRXJyb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlcihwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgZXJyb3Iga2V5IGFuZCBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmdWxsRXJyb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5rZXl9OiAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVyZ2VzIG5ldyB2YWx1ZXMgaW50byB0aGUgcmVjb3JkIGFuZCByZXR1cm5zIGEgbmV3IGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UGFydGlhbDxSZXN1bHRFcnJvcj59IHZhbHVlc1xyXG4gICAgICogQHJldHVybnMge1Jlc3VsdEVycm9yUmVjb3JkfVxyXG4gICAgICogQG1lbWJlcm9mIFJlc3VsdEVycm9yUmVjb3JkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aXRoKHZhbHVlczogUGFydGlhbDxSZXN1bHRFcnJvcj4pOiBSZXN1bHRFcnJvclJlY29yZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHRFcnJvclJlY29yZChPYmplY3QuYXNzaWduKHRoaXMudG9KUygpLCB2YWx1ZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRXhwb3J0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgeyBSZXN1bHRFcnJvclJlY29yZCB9O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBFeHBvcnRcclxuIl19