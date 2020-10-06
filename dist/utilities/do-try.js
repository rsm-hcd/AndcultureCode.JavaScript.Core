"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var result_record_1 = require("../view-models/result-record");
// -----------------------------------------------------------------------------------------
// #region Do
// -----------------------------------------------------------------------------------------
/**
 * Utility class to be able to use strong typing in a catch handler.
 * the Do.catch method takes a callback where the parameters are:
 * - result?: Result<TResourceType> -- if it's an error from the server, will not be null
 * - error?: any -- if it's a Javascript error, will not be null
 */
var Do = /** @class */ (function () {
    function Do(workload) {
        this.promise = workload().catch(function (err) {
            var _a, _b, _c, _d;
            if (err instanceof result_record_1.ResultRecord) {
                (_b = (_a = Do.config).defaultErrorHandler) === null || _b === void 0 ? void 0 : _b.call(_a, err, undefined);
                throw err; // rethrow so it doesn't interrupt call chain
            }
            (_d = (_c = Do.config).defaultErrorHandler) === null || _d === void 0 ? void 0 : _d.call(_c, undefined, err);
            throw err; // rethrow so it doesn't interrupt call chain
        });
    }
    /**
     * Handle errors from the workload.
     * If errors are in the shape of a {ResultRecord},
     * you will get a typed {ResultRecord} as the first parameter.
     * Otherwise, if it's an unknown error or Javascript error,
     * you'll get an {any} as the second parameter.
     * @param errorHandler handle errors, either as a {ResultRecord} or {any}
     * @returns this
     */
    Do.prototype.catch = function (errorHandler) {
        this.promise = this.promise.catch(function (err) {
            if (err instanceof result_record_1.ResultRecord) {
                errorHandler(err, undefined);
                return;
            }
            errorHandler(undefined, err);
        });
        return this;
    };
    /**
     * Sets the global configuration object for class {Do}
     * @param config the {DoTryConfig} object to set
     */
    Do.configure = function (config) {
        Do.config = config;
    };
    /**
     * Run some handler when the function completes, whether the
     * catch() was hit or not.
     * @param finallyHandler
     * @returns this
     */
    Do.prototype.finally = function (finallyHandler) {
        this.promise = this.promise.finally(finallyHandler);
        return this;
    };
    /**
     * Awaits the internal promise being tracked by the Do instance,
     * and returns the result. This way, you can await a Do.try
     * chain, if you need to await for the result inside of another scope,
     * such as tests.
     * @returns the result of the promise.
     */
    Do.prototype.getAwaiter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promise];
            });
        });
    };
    /**
     * Static factory method for Do class.
     * Start a workload (sync or async) that you can then
     * call .catch(catchHandler).finally(finallyHandler) on.
     * @param workload a sync or async method to wrap
     * @returns a new instance of Do
     */
    Do.try = function (workload) {
        return new Do(workload);
    };
    Do.config = {
        defaultErrorHandler: undefined,
    };
    return Do;
}());
exports.Do = Do;
// #endregion Do
// -----------------------------------------------------------------------------------------
// #region DoSync
// -----------------------------------------------------------------------------------------
var DoSync = /** @class */ (function () {
    function DoSync(workload) {
        this.workload = workload;
    }
    /**
     * Add a catch handler to the DoSync call chain.
     * If errors are in the shape of a {ResultRecord},
     * you will get a typed {ResultRecord} as the first parameter.
     * Otherwise, if it's an unknown error or Javascript error,
     * you'll get an {any} as the second parameter.
     * @param errorHandler handle errors, either as a {ResultRecord} or {any}
     */
    DoSync.prototype.catch = function (errorHandler) {
        this.catchHandler = function (err) {
            if (err instanceof result_record_1.ResultRecord) {
                errorHandler(err, undefined);
                return;
            }
            errorHandler(undefined, err);
        };
        return this;
    };
    /**
     * Sets the global configuration for class {DySync}.
     * @param config the {DoTryConfig} object to set
     */
    DoSync.configure = function (config) {
        DoSync.config = config;
    };
    /**
     * Execute the entire DoSync call chain. For the synchronous version, i.e. DoSync,
     * you must manually call .execute() for the call chain to be executed.
     * @returns TReturnVal the value returned from the workload, or undefined if an error occurred.
     */
    DoSync.prototype.execute = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            return this.workload();
        }
        catch (e) {
            if (e instanceof result_record_1.ResultRecord) {
                (_b = (_a = DoSync.config).defaultErrorHandler) === null || _b === void 0 ? void 0 : _b.call(_a, e, undefined);
                (_c = this.catchHandler) === null || _c === void 0 ? void 0 : _c.call(this, e);
                return;
            }
            (_e = (_d = DoSync.config).defaultErrorHandler) === null || _e === void 0 ? void 0 : _e.call(_d, undefined, e);
            (_f = this.catchHandler) === null || _f === void 0 ? void 0 : _f.call(this, e);
        }
        finally {
            (_g = this.finallyHandler) === null || _g === void 0 ? void 0 : _g.call(this);
        }
    };
    /**
     * Run some handler when the function completes, whether the
     * catch() was hit or not.
     * @param finallyHandler
     * @returns this
     */
    DoSync.prototype.finally = function (finallyHandler) {
        this.finallyHandler = finallyHandler;
        return this;
    };
    /**
     * Static factory method for DoSync. Creates a new DoSync
     * with the given workload.
     * @param workload
     */
    DoSync.try = function (workload) {
        return new DoSync(workload);
    };
    DoSync.config = {
        defaultErrorHandler: undefined,
    };
    return DoSync;
}());
exports.DoSync = DoSync;
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9kby10cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBNEQ7QUFPNUQsNEZBQTRGO0FBQzVGLGFBQWE7QUFDYiw0RkFBNEY7QUFFNUY7Ozs7O0dBS0c7QUFDSDtJQU9JLFlBQW9CLFFBQW1DO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUTs7WUFDckMsSUFBSSxHQUFHLFlBQVksNEJBQVksRUFBRTtnQkFDN0IsTUFBQSxNQUFBLEVBQUUsQ0FBQyxNQUFNLEVBQUMsbUJBQW1CLG1EQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUU7Z0JBQ2hELE1BQU0sR0FBRyxDQUFDLENBQUMsNkNBQTZDO2FBQzNEO1lBRUQsTUFBQSxNQUFBLEVBQUUsQ0FBQyxNQUFNLEVBQUMsbUJBQW1CLG1EQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUU7WUFDaEQsTUFBTSxHQUFHLENBQUMsQ0FBQyw2Q0FBNkM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxrQkFBSyxHQUFaLFVBQ0ksWUFBK0M7UUFFL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVE7WUFDdkMsSUFBSSxHQUFHLFlBQVksNEJBQVksRUFBRTtnQkFDN0IsWUFBWSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNWO1lBRUQsWUFBWSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQXdCLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNXLFlBQVMsR0FBdkIsVUFBd0IsTUFBbUI7UUFDdkMsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksb0JBQU8sR0FBZCxVQUNJLGNBQThCO1FBRTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNVLHVCQUFVLEdBQXZCOzs7Z0JBQ0ksc0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBQzs7O0tBQ3ZCO0lBRUQ7Ozs7OztPQU1HO0lBQ1csTUFBRyxHQUFqQixVQUNJLFFBQW1DO1FBRW5DLE9BQU8sSUFBSSxFQUFFLENBQTRCLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFuRmMsU0FBTSxHQUFnQjtRQUNqQyxtQkFBbUIsRUFBRSxTQUFTO0tBQ2pDLENBQUM7SUFrRk4sU0FBQztDQUFBLEFBdkZELElBdUZDO0FBeUdRLGdCQUFFO0FBdkdYLGdCQUFnQjtBQUVoQiw0RkFBNEY7QUFDNUYsaUJBQWlCO0FBQ2pCLDRGQUE0RjtBQUU1RjtJQVNJLGdCQUFvQixRQUFrQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLHNCQUFLLEdBQVosVUFDSSxZQUErQztRQUUvQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQUMsR0FBUTtZQUN6QixJQUFJLEdBQUcsWUFBWSw0QkFBWSxFQUFFO2dCQUM3QixZQUFZLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1Y7WUFFRCxZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDVyxnQkFBUyxHQUF2QixVQUF3QixNQUFtQjtRQUN2QyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdCQUFPLEdBQWQ7O1FBQ0ksSUFBSTtZQUNBLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixJQUFJLENBQUMsWUFBWSw0QkFBWSxFQUFFO2dCQUMzQixNQUFBLE1BQUEsTUFBTSxDQUFDLE1BQU0sRUFBQyxtQkFBbUIsbURBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRTtnQkFDbEQsTUFBQSxJQUFJLENBQUMsWUFBWSwrQ0FBakIsSUFBSSxFQUFnQixDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDVjtZQUVELE1BQUEsTUFBQSxNQUFNLENBQUMsTUFBTSxFQUFDLG1CQUFtQixtREFBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFO1lBQ2xELE1BQUEsSUFBSSxDQUFDLFlBQVksK0NBQWpCLElBQUksRUFBZ0IsQ0FBQyxFQUFFO1NBQzFCO2dCQUFTO1lBQ04sTUFBQSxJQUFJLENBQUMsY0FBYywrQ0FBbkIsSUFBSSxFQUFvQjtTQUMzQjtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHdCQUFPLEdBQWQsVUFDSSxjQUE4QjtRQUU5QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLFVBQUcsR0FBakIsVUFDSSxRQUFrQztRQUVsQyxPQUFPLElBQUksTUFBTSxDQUE0QixRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBbkZjLGFBQU0sR0FBZ0I7UUFDakMsbUJBQW1CLEVBQUUsU0FBUztLQUNqQyxDQUFDO0lBa0ZOLGFBQUM7Q0FBQSxBQXpGRCxJQXlGQztBQVFZLHdCQUFNO0FBRW5CLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3VsdFJlY29yZCB9IGZyb20gXCIuLi92aWV3LW1vZGVscy9yZXN1bHQtcmVjb3JkXCI7XHJcbmltcG9ydCB7IERvVHJ5Q29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZG8tdHJ5LWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBc3luY1dvcmtsb2FkIH0gZnJvbSBcIi4uL3R5cGVzL2FzeW5jLXdvcmtsb2FkXCI7XHJcbmltcG9ydCB7IENhdGNoUmVzdWx0SGFuZGxlciB9IGZyb20gXCIuLi90eXBlcy9jYXRjaC1yZXN1bHQtaGFuZGxlclwiO1xyXG5pbXBvcnQgeyBGaW5hbGx5SGFuZGxlciB9IGZyb20gXCIuLi90eXBlcy9maW5hbGx5LWhhbmRsZXJcIjtcclxuaW1wb3J0IHsgU3luY1dvcmtsb2FkIH0gZnJvbSBcIi4uL3R5cGVzL3N5bmMtd29ya2xvYWRcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRG9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGNsYXNzIHRvIGJlIGFibGUgdG8gdXNlIHN0cm9uZyB0eXBpbmcgaW4gYSBjYXRjaCBoYW5kbGVyLlxyXG4gKiB0aGUgRG8uY2F0Y2ggbWV0aG9kIHRha2VzIGEgY2FsbGJhY2sgd2hlcmUgdGhlIHBhcmFtZXRlcnMgYXJlOlxyXG4gKiAtIHJlc3VsdD86IFJlc3VsdDxUUmVzb3VyY2VUeXBlPiAtLSBpZiBpdCdzIGFuIGVycm9yIGZyb20gdGhlIHNlcnZlciwgd2lsbCBub3QgYmUgbnVsbFxyXG4gKiAtIGVycm9yPzogYW55IC0tIGlmIGl0J3MgYSBKYXZhc2NyaXB0IGVycm9yLCB3aWxsIG5vdCBiZSBudWxsXHJcbiAqL1xyXG5jbGFzcyBEbzxUUmVzb3VyY2VUeXBlLCBUUmV0dXJuVmFsID0gdm9pZD4ge1xyXG4gICAgcHJpdmF0ZSBwcm9taXNlOiBQcm9taXNlPFRSZXR1cm5WYWw+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNvbmZpZzogRG9UcnlDb25maWcgPSB7XHJcbiAgICAgICAgZGVmYXVsdEVycm9ySGFuZGxlcjogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHdvcmtsb2FkOiBBc3luY1dvcmtsb2FkPFRSZXR1cm5WYWw+KSB7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlID0gd29ya2xvYWQoKS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFJlc3VsdFJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgRG8uY29uZmlnLmRlZmF1bHRFcnJvckhhbmRsZXI/LihlcnIsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7IC8vIHJldGhyb3cgc28gaXQgZG9lc24ndCBpbnRlcnJ1cHQgY2FsbCBjaGFpblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBEby5jb25maWcuZGVmYXVsdEVycm9ySGFuZGxlcj8uKHVuZGVmaW5lZCwgZXJyKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyOyAvLyByZXRocm93IHNvIGl0IGRvZXNuJ3QgaW50ZXJydXB0IGNhbGwgY2hhaW5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBlcnJvcnMgZnJvbSB0aGUgd29ya2xvYWQuXHJcbiAgICAgKiBJZiBlcnJvcnMgYXJlIGluIHRoZSBzaGFwZSBvZiBhIHtSZXN1bHRSZWNvcmR9LFxyXG4gICAgICogeW91IHdpbGwgZ2V0IGEgdHlwZWQge1Jlc3VsdFJlY29yZH0gYXMgdGhlIGZpcnN0IHBhcmFtZXRlci5cclxuICAgICAqIE90aGVyd2lzZSwgaWYgaXQncyBhbiB1bmtub3duIGVycm9yIG9yIEphdmFzY3JpcHQgZXJyb3IsXHJcbiAgICAgKiB5b3UnbGwgZ2V0IGFuIHthbnl9IGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIGVycm9ySGFuZGxlciBoYW5kbGUgZXJyb3JzLCBlaXRoZXIgYXMgYSB7UmVzdWx0UmVjb3JkfSBvciB7YW55fVxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2F0Y2goXHJcbiAgICAgICAgZXJyb3JIYW5kbGVyOiBDYXRjaFJlc3VsdEhhbmRsZXI8VFJlc291cmNlVHlwZT5cclxuICAgICk6IERvPFRSZXNvdXJjZVR5cGUsIFRSZXR1cm5WYWw+IHtcclxuICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLnByb21pc2UuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBSZXN1bHRSZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihlcnIsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlcih1bmRlZmluZWQsIGVycik7XHJcbiAgICAgICAgfSkgYXMgUHJvbWlzZTxUUmV0dXJuVmFsPjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGNsYXNzIHtEb31cclxuICAgICAqIEBwYXJhbSBjb25maWcgdGhlIHtEb1RyeUNvbmZpZ30gb2JqZWN0IHRvIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ3VyZShjb25maWc6IERvVHJ5Q29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgRG8uY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVuIHNvbWUgaGFuZGxlciB3aGVuIHRoZSBmdW5jdGlvbiBjb21wbGV0ZXMsIHdoZXRoZXIgdGhlXHJcbiAgICAgKiBjYXRjaCgpIHdhcyBoaXQgb3Igbm90LlxyXG4gICAgICogQHBhcmFtIGZpbmFsbHlIYW5kbGVyXHJcbiAgICAgKiBAcmV0dXJucyB0aGlzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmaW5hbGx5KFxyXG4gICAgICAgIGZpbmFsbHlIYW5kbGVyOiBGaW5hbGx5SGFuZGxlclxyXG4gICAgKTogRG88VFJlc291cmNlVHlwZSwgVFJldHVyblZhbD4ge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS5maW5hbGx5KGZpbmFsbHlIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF3YWl0cyB0aGUgaW50ZXJuYWwgcHJvbWlzZSBiZWluZyB0cmFja2VkIGJ5IHRoZSBEbyBpbnN0YW5jZSxcclxuICAgICAqIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuIFRoaXMgd2F5LCB5b3UgY2FuIGF3YWl0IGEgRG8udHJ5XHJcbiAgICAgKiBjaGFpbiwgaWYgeW91IG5lZWQgdG8gYXdhaXQgZm9yIHRoZSByZXN1bHQgaW5zaWRlIG9mIGFub3RoZXIgc2NvcGUsXHJcbiAgICAgKiBzdWNoIGFzIHRlc3RzLlxyXG4gICAgICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldEF3YWl0ZXIoKTogUHJvbWlzZTxUUmV0dXJuVmFsPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXRpYyBmYWN0b3J5IG1ldGhvZCBmb3IgRG8gY2xhc3MuXHJcbiAgICAgKiBTdGFydCBhIHdvcmtsb2FkIChzeW5jIG9yIGFzeW5jKSB0aGF0IHlvdSBjYW4gdGhlblxyXG4gICAgICogY2FsbCAuY2F0Y2goY2F0Y2hIYW5kbGVyKS5maW5hbGx5KGZpbmFsbHlIYW5kbGVyKSBvbi5cclxuICAgICAqIEBwYXJhbSB3b3JrbG9hZCBhIHN5bmMgb3IgYXN5bmMgbWV0aG9kIHRvIHdyYXBcclxuICAgICAqIEByZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIERvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJ5PFRSZXNvdXJjZVR5cGUsIFRSZXR1cm5WYWwgPSB2b2lkPihcclxuICAgICAgICB3b3JrbG9hZDogQXN5bmNXb3JrbG9hZDxUUmV0dXJuVmFsPlxyXG4gICAgKTogRG88VFJlc291cmNlVHlwZSwgVFJldHVyblZhbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgRG88VFJlc291cmNlVHlwZSwgVFJldHVyblZhbD4od29ya2xvYWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAjZW5kcmVnaW9uIERvXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAjcmVnaW9uIERvU3luY1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY2xhc3MgRG9TeW5jPFRSZXNvdXJjZVR5cGUsIFRSZXR1cm5WYWwgPSB2b2lkPiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdvcmtsb2FkOiBTeW5jV29ya2xvYWQ8VFJldHVyblZhbD47XHJcbiAgICBwcml2YXRlIGNhdGNoSGFuZGxlcj86IChlcnI6IGFueSkgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgZmluYWxseUhhbmRsZXI/OiBGaW5hbGx5SGFuZGxlcjtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjb25maWc6IERvVHJ5Q29uZmlnID0ge1xyXG4gICAgICAgIGRlZmF1bHRFcnJvckhhbmRsZXI6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih3b3JrbG9hZDogU3luY1dvcmtsb2FkPFRSZXR1cm5WYWw+KSB7XHJcbiAgICAgICAgdGhpcy53b3JrbG9hZCA9IHdvcmtsb2FkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgY2F0Y2ggaGFuZGxlciB0byB0aGUgRG9TeW5jIGNhbGwgY2hhaW4uXHJcbiAgICAgKiBJZiBlcnJvcnMgYXJlIGluIHRoZSBzaGFwZSBvZiBhIHtSZXN1bHRSZWNvcmR9LFxyXG4gICAgICogeW91IHdpbGwgZ2V0IGEgdHlwZWQge1Jlc3VsdFJlY29yZH0gYXMgdGhlIGZpcnN0IHBhcmFtZXRlci5cclxuICAgICAqIE90aGVyd2lzZSwgaWYgaXQncyBhbiB1bmtub3duIGVycm9yIG9yIEphdmFzY3JpcHQgZXJyb3IsXHJcbiAgICAgKiB5b3UnbGwgZ2V0IGFuIHthbnl9IGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIGVycm9ySGFuZGxlciBoYW5kbGUgZXJyb3JzLCBlaXRoZXIgYXMgYSB7UmVzdWx0UmVjb3JkfSBvciB7YW55fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2F0Y2goXHJcbiAgICAgICAgZXJyb3JIYW5kbGVyOiBDYXRjaFJlc3VsdEhhbmRsZXI8VFJlc291cmNlVHlwZT5cclxuICAgICk6IERvU3luYzxUUmVzb3VyY2VUeXBlLCBUUmV0dXJuVmFsPiB7XHJcbiAgICAgICAgdGhpcy5jYXRjaEhhbmRsZXIgPSAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFJlc3VsdFJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyKGVyciwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyKHVuZGVmaW5lZCwgZXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIGZvciBjbGFzcyB7RHlTeW5jfS5cclxuICAgICAqIEBwYXJhbSBjb25maWcgdGhlIHtEb1RyeUNvbmZpZ30gb2JqZWN0IHRvIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ3VyZShjb25maWc6IERvVHJ5Q29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgRG9TeW5jLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgdGhlIGVudGlyZSBEb1N5bmMgY2FsbCBjaGFpbi4gRm9yIHRoZSBzeW5jaHJvbm91cyB2ZXJzaW9uLCBpLmUuIERvU3luYyxcclxuICAgICAqIHlvdSBtdXN0IG1hbnVhbGx5IGNhbGwgLmV4ZWN1dGUoKSBmb3IgdGhlIGNhbGwgY2hhaW4gdG8gYmUgZXhlY3V0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBUUmV0dXJuVmFsIHRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSB3b3JrbG9hZCwgb3IgdW5kZWZpbmVkIGlmIGFuIGVycm9yIG9jY3VycmVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZSgpOiBUUmV0dXJuVmFsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53b3JrbG9hZCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBSZXN1bHRSZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgIERvU3luYy5jb25maWcuZGVmYXVsdEVycm9ySGFuZGxlcj8uKGUsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGNoSGFuZGxlcj8uKGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBEb1N5bmMuY29uZmlnLmRlZmF1bHRFcnJvckhhbmRsZXI/Lih1bmRlZmluZWQsIGUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhdGNoSGFuZGxlcj8uKGUpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxseUhhbmRsZXI/LigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1biBzb21lIGhhbmRsZXIgd2hlbiB0aGUgZnVuY3Rpb24gY29tcGxldGVzLCB3aGV0aGVyIHRoZVxyXG4gICAgICogY2F0Y2goKSB3YXMgaGl0IG9yIG5vdC5cclxuICAgICAqIEBwYXJhbSBmaW5hbGx5SGFuZGxlclxyXG4gICAgICogQHJldHVybnMgdGhpc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmluYWxseShcclxuICAgICAgICBmaW5hbGx5SGFuZGxlcjogRmluYWxseUhhbmRsZXJcclxuICAgICk6IERvU3luYzxUUmVzb3VyY2VUeXBlLCBUUmV0dXJuVmFsPiB7XHJcbiAgICAgICAgdGhpcy5maW5hbGx5SGFuZGxlciA9IGZpbmFsbHlIYW5kbGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhdGljIGZhY3RvcnkgbWV0aG9kIGZvciBEb1N5bmMuIENyZWF0ZXMgYSBuZXcgRG9TeW5jXHJcbiAgICAgKiB3aXRoIHRoZSBnaXZlbiB3b3JrbG9hZC5cclxuICAgICAqIEBwYXJhbSB3b3JrbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyeTxUUmVzb3VyY2VUeXBlLCBUUmV0dXJuVmFsID0gdm9pZD4oXHJcbiAgICAgICAgd29ya2xvYWQ6IFN5bmNXb3JrbG9hZDxUUmV0dXJuVmFsPlxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEb1N5bmM8VFJlc291cmNlVHlwZSwgVFJldHVyblZhbD4od29ya2xvYWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAjZW5kcmVnaW9uIERvU3luY1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gI3JlZ2lvbiBFeHBvcnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgeyBEbywgRG9TeW5jIH07XHJcblxyXG4vLyAjZW5kcmVnaW9uIEV4cG9ydHNcclxuIl19