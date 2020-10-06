"use strict";
// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Promise.finally is not natively supported in Internet Explorer.
 */
/* tslint:disable */
var registerPromiseFinallyPolyfill = function () {
    var _a;
    Promise.prototype.finally = (_a = Promise.prototype.finally) !== null && _a !== void 0 ? _a : function (callback) {
        // @ts-ignore
        return this.then(function (value) { return Promise.resolve(callback()).then(function () { return value; }); }, function (reason) {
            return Promise.resolve(callback()).then(function () {
                throw reason;
            });
        });
    };
};
/* tslint:enable */
// #endregion Functions
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
var PolyfillUtils = {
    registerPromiseFinallyPolyfill: registerPromiseFinallyPolyfill,
};
exports.PolyfillUtils = PolyfillUtils;
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGwtdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL3BvbHlmaWxsLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0Rjs7QUFFNUY7O0dBRUc7QUFDSCxvQkFBb0I7QUFDcEIsSUFBTSw4QkFBOEIsR0FBRzs7SUFDbkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLFNBQ3JCLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxtQ0FDekIsVUFBUyxRQUFtQjtRQUN4QixhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNaLFVBQUMsS0FBVSxJQUFLLE9BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQyxFQUE3QyxDQUE2QyxFQUM3RCxVQUFDLE1BQVc7WUFDUixPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLE1BQU0sTUFBTSxDQUFDO1lBQ2pCLENBQUMsQ0FBQztRQUZGLENBRUUsQ0FDVCxDQUFDO0lBQ04sQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBQ0YsbUJBQW1CO0FBRW5CLHVCQUF1QjtBQUV2Qiw0RkFBNEY7QUFDNUYsa0JBQWtCO0FBQ2xCLDRGQUE0RjtBQUU1RixJQUFNLGFBQWEsR0FBRztJQUNsQiw4QkFBOEIsZ0NBQUE7Q0FDakMsQ0FBQztBQUVPLHNDQUFhO0FBRXRCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRnVuY3Rpb25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vKipcclxuICogUHJvbWlzZS5maW5hbGx5IGlzIG5vdCBuYXRpdmVseSBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXHJcbiAqL1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5jb25zdCByZWdpc3RlclByb21pc2VGaW5hbGx5UG9seWZpbGwgPSAoKSA9PiB7XHJcbiAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID1cclxuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID8/XHJcbiAgICAgICAgZnVuY3Rpb24oY2FsbGJhY2s6ICgpID0+IGFueSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAodmFsdWU6IGFueSkgPT4gUHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgKHJlYXNvbjogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxufTtcclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBGdW5jdGlvbnNcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRXhwb3J0c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgUG9seWZpbGxVdGlscyA9IHtcclxuICAgIHJlZ2lzdGVyUHJvbWlzZUZpbmFsbHlQb2x5ZmlsbCxcclxufTtcclxuXHJcbmV4cG9ydCB7IFBvbHlmaWxsVXRpbHMgfTtcclxuXHJcbi8vICNlbmRyZWdpb24gRXhwb3J0c1xyXG4iXX0=