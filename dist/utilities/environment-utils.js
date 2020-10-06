"use strict";
// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function to return whether or not the current environment is development.
 *
 * @returns {boolean}
 */
var isDevelopment = function () {
    return process.env.NODE_ENV === "development";
};
/**
 * Conditionally runs the given function, depending on whether the current environment is development or not.
 *
 * @param {() => any} fn Function to be run in a development environment only.
 */
var runIfDevelopment = function (fn) {
    if (!isDevelopment()) {
        return;
    }
    fn();
};
// #endregion Functions
// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------
exports.EnvironmentUtils = {
    isDevelopment: isDevelopment,
    runIfDevelopment: runIfDevelopment,
};
// #endregion Export
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQtdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL2Vudmlyb25tZW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0Rjs7QUFFNUY7Ozs7R0FJRztBQUNILElBQU0sYUFBYSxHQUFHO0lBQ2xCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFBYTtJQUNuQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7UUFDbEIsT0FBTztLQUNWO0lBRUQsRUFBRSxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUM7QUFFRix1QkFBdUI7QUFFdkIsNEZBQTRGO0FBQzVGLGlCQUFpQjtBQUNqQiw0RkFBNEY7QUFFL0UsUUFBQSxnQkFBZ0IsR0FBRztJQUM1QixhQUFhLGVBQUE7SUFDYixnQkFBZ0Isa0JBQUE7Q0FDbkIsQ0FBQztBQUVGLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRnVuY3Rpb25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdG8gcmV0dXJuIHdoZXRoZXIgb3Igbm90IHRoZSBjdXJyZW50IGVudmlyb25tZW50IGlzIGRldmVsb3BtZW50LlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzRGV2ZWxvcG1lbnQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb25kaXRpb25hbGx5IHJ1bnMgdGhlIGdpdmVuIGZ1bmN0aW9uLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCBpcyBkZXZlbG9wbWVudCBvciBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmbiBGdW5jdGlvbiB0byBiZSBydW4gaW4gYSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBvbmx5LlxyXG4gKi9cclxuY29uc3QgcnVuSWZEZXZlbG9wbWVudCA9IChmbjogKCkgPT4gYW55KTogdm9pZCA9PiB7XHJcbiAgICBpZiAoIWlzRGV2ZWxvcG1lbnQoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmbigpO1xyXG59O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBGdW5jdGlvbnNcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gRXhwb3J0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgRW52aXJvbm1lbnRVdGlscyA9IHtcclxuICAgIGlzRGV2ZWxvcG1lbnQsXHJcbiAgICBydW5JZkRldmVsb3BtZW50LFxyXG59O1xyXG5cclxuLy8gI2VuZHJlZ2lvbiBFeHBvcnRcclxuIl19