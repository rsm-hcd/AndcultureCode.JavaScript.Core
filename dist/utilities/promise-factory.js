"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------------------------------------------------------------------
// #region Public Methods
// -----------------------------------------------------------------------------------------
var PromiseFactory = {
    cancellable: function (promise) {
        var isCanceled = false;
        var wrappedPromise = new Promise(function (resolve, reject) {
            return promise
                .then(function (value) {
                return isCanceled ? PromiseFactory.pending() : resolve(value);
            })
                .catch(function (error) {
                return isCanceled ? PromiseFactory.pending() : reject(error);
            });
        });
        return {
            promise: wrappedPromise,
            cancel: function () {
                isCanceled = true;
            },
        };
    },
    /**
     * Creates a new and empty/unfullfilled promise to cancel further
     * chained promise operations
     */
    pending: function () {
        return new Promise(function () { });
    },
};
exports.PromiseFactory = PromiseFactory;
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9wcm9taXNlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw0RkFBNEY7QUFDNUYseUJBQXlCO0FBQ3pCLDRGQUE0RjtBQUU1RixJQUFNLGNBQWMsR0FBRztJQUNuQixXQUFXLEVBQVgsVUFBcUIsT0FBbUI7UUFDcEMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQU0sY0FBYyxHQUFHLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEQsT0FBQSxPQUFPO2lCQUNGLElBQUksQ0FBQyxVQUFDLEtBQVE7Z0JBQ1gsT0FBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUF0RCxDQUFzRCxDQUN6RDtpQkFDQSxLQUFLLENBQUMsVUFBQyxLQUFVO2dCQUNkLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFBckQsQ0FBcUQsQ0FDeEQ7UUFOTCxDQU1LLENBQ1IsQ0FBQztRQUVGLE9BQU87WUFDSCxPQUFPLEVBQUUsY0FBYztZQUN2QixNQUFNO2dCQUNGLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsT0FBTztRQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0osQ0FBQztBQVFPLHdDQUFjO0FBRXZCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbmNlbGxhYmxlUHJvbWlzZSB9IGZyb20gXCIuLi90eXBlcy9jYW5jZWxsYWJsZS1wcm9taXNlXCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBQcm9taXNlRmFjdG9yeSA9IHtcclxuICAgIGNhbmNlbGxhYmxlPFQgPSBhbnk+KHByb21pc2U6IFByb21pc2U8VD4pOiBDYW5jZWxsYWJsZVByb21pc2U8VD4ge1xyXG4gICAgICAgIGxldCBpc0NhbmNlbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZWRQcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgICAgICAgcHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBUKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2FuY2VsZWQgPyBQcm9taXNlRmFjdG9yeS5wZW5kaW5nKCkgOiByZXNvbHZlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2FuY2VsZWQgPyBQcm9taXNlRmFjdG9yeS5wZW5kaW5nKCkgOiByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvbWlzZTogd3JhcHBlZFByb21pc2UsXHJcbiAgICAgICAgICAgIGNhbmNlbCgpIHtcclxuICAgICAgICAgICAgICAgIGlzQ2FuY2VsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGFuZCBlbXB0eS91bmZ1bGxmaWxsZWQgcHJvbWlzZSB0byBjYW5jZWwgZnVydGhlclxyXG4gICAgICogY2hhaW5lZCBwcm9taXNlIG9wZXJhdGlvbnNcclxuICAgICAqL1xyXG4gICAgcGVuZGluZygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pO1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8vICNlbmRyZWdpb24gUHVibGljIE1ldGhvZHNcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRXhwb3J0c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IHsgUHJvbWlzZUZhY3RvcnkgfTtcclxuXHJcbi8vICNlbmRyZWdpb24gRXhwb3J0c1xyXG4iXX0=