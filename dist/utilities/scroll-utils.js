"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_utils_1 = require("./environment-utils");
var string_utils_1 = require("./string-utils");
// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------
exports.DefaultScrollOptions = {
    behavior: "auto",
    block: "start",
    inline: "nearest",
};
// #endregion Constants
// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------
/**
 * Attempts to scroll to the element specified by the given ID.
 * In the event of a slow page render, the element may not be immediately available.
 * This method will retry up to 50 times every 100ms to find the element before
 * giving up.
 */
var _scrollToElementById = function (id, options) {
    if (options === void 0) { options = exports.DefaultScrollOptions; }
    var retryCount = 0;
    var tryToScroll = function () {
        retryCount += 1;
        if (retryCount > 50) {
            environment_utils_1.EnvironmentUtils.runIfDevelopment(function () {
                return console.warn("Could not find element with ID " + id + " in the page.");
            });
            // couldn't find element in 50 loops, give up.
            return;
        }
        var el = document.getElementById(id);
        if (el != null) {
            el.scrollIntoView(options);
            return;
        }
        setTimeout(tryToScroll, 100);
    };
    if (options.initialDelay != null) {
        setTimeout(tryToScroll, options.initialDelay);
        return;
    }
    tryToScroll();
};
/**
 * Attempts to scroll to the element specified in the hash of the current path.
 * In the event of a slow page render, the element may not be immediately available.
 * This method will retry up to 50 times every 100ms to find the element before
 * giving up.
 *
 * Reference:
 * https://stackoverflow.com/a/54042987
 * https://stackoverflow.com/a/48195222
 */
var _scrollToHash = function (location, options) {
    if (options === void 0) { options = exports.DefaultScrollOptions; }
    if (string_utils_1.StringUtils.isEmpty(location.hash)) {
        return;
    }
    var id = location.hash.replace("#", "");
    _scrollToElementById(id, options);
};
// #endregion Functions
// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------
exports.ScrollUtils = {
    scrollToHash: _scrollToHash,
};
// #endregion Exports
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9zY3JvbGwtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBdUQ7QUFFdkQsK0NBQTZDO0FBRTdDLDRGQUE0RjtBQUM1RixvQkFBb0I7QUFDcEIsNEZBQTRGO0FBRS9FLFFBQUEsb0JBQW9CLEdBQWtCO0lBQy9DLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsTUFBTSxFQUFFLFNBQVM7Q0FDcEIsQ0FBQztBQUVGLHVCQUF1QjtBQUV2Qiw0RkFBNEY7QUFDNUYsb0JBQW9CO0FBQ3BCLDRGQUE0RjtBQUU1Rjs7Ozs7R0FLRztBQUNILElBQU0sb0JBQW9CLEdBQUcsVUFDekIsRUFBVSxFQUNWLE9BQTZDO0lBQTdDLHdCQUFBLEVBQUEsVUFBeUIsNEJBQW9CO0lBRTdDLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixJQUFNLFdBQVcsR0FBRztRQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDO1FBRWhCLElBQUksVUFBVSxHQUFHLEVBQUUsRUFBRTtZQUNqQixvQ0FBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDOUIsT0FBQSxPQUFPLENBQUMsSUFBSSxDQUNSLG9DQUFrQyxFQUFFLGtCQUFlLENBQ3REO1lBRkQsQ0FFQyxDQUNKLENBQUM7WUFFRiw4Q0FBOEM7WUFDOUMsT0FBTztTQUNWO1FBRUQsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDWixFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLE9BQU87U0FDVjtRQUVELFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtRQUM5QixVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QyxPQUFPO0tBQ1Y7SUFFRCxXQUFXLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxJQUFNLGFBQWEsR0FBRyxVQUNsQixRQUFhLEVBQ2IsT0FBNkM7SUFBN0Msd0JBQUEsRUFBQSxVQUF5Qiw0QkFBb0I7SUFFN0MsSUFBSSwwQkFBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEMsT0FBTztLQUNWO0lBRUQsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFRix1QkFBdUI7QUFFdkIsNEZBQTRGO0FBQzVGLGtCQUFrQjtBQUNsQiw0RkFBNEY7QUFFL0UsUUFBQSxXQUFXLEdBQUc7SUFDdkIsWUFBWSxFQUFFLGFBQWE7Q0FDOUIsQ0FBQztBQUVGLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50VXRpbHMgfSBmcm9tIFwiLi9lbnZpcm9ubWVudC11dGlsc1wiO1xyXG5pbXBvcnQgeyBTY3JvbGxPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvc2Nyb2xsLW9wdGlvbnNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi9zdHJpbmctdXRpbHNcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICNyZWdpb24gQ29uc3RhbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdFNjcm9sbE9wdGlvbnM6IFNjcm9sbE9wdGlvbnMgPSB7XHJcbiAgICBiZWhhdmlvcjogXCJhdXRvXCIsXHJcbiAgICBibG9jazogXCJzdGFydFwiLFxyXG4gICAgaW5saW5lOiBcIm5lYXJlc3RcIixcclxufTtcclxuXHJcbi8vICNlbmRyZWdpb24gQ29uc3RhbnRzXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAjcmVnaW9uIEZ1bmN0aW9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqXHJcbiAqIEF0dGVtcHRzIHRvIHNjcm9sbCB0byB0aGUgZWxlbWVudCBzcGVjaWZpZWQgYnkgdGhlIGdpdmVuIElELlxyXG4gKiBJbiB0aGUgZXZlbnQgb2YgYSBzbG93IHBhZ2UgcmVuZGVyLCB0aGUgZWxlbWVudCBtYXkgbm90IGJlIGltbWVkaWF0ZWx5IGF2YWlsYWJsZS5cclxuICogVGhpcyBtZXRob2Qgd2lsbCByZXRyeSB1cCB0byA1MCB0aW1lcyBldmVyeSAxMDBtcyB0byBmaW5kIHRoZSBlbGVtZW50IGJlZm9yZVxyXG4gKiBnaXZpbmcgdXAuXHJcbiAqL1xyXG5jb25zdCBfc2Nyb2xsVG9FbGVtZW50QnlJZCA9IChcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBTY3JvbGxPcHRpb25zID0gRGVmYXVsdFNjcm9sbE9wdGlvbnNcclxuKSA9PiB7XHJcbiAgICBsZXQgcmV0cnlDb3VudCA9IDA7XHJcbiAgICBjb25zdCB0cnlUb1Njcm9sbCA9ICgpID0+IHtcclxuICAgICAgICByZXRyeUNvdW50ICs9IDE7XHJcblxyXG4gICAgICAgIGlmIChyZXRyeUNvdW50ID4gNTApIHtcclxuICAgICAgICAgICAgRW52aXJvbm1lbnRVdGlscy5ydW5JZkRldmVsb3BtZW50KCgpID0+XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICAgICAgYENvdWxkIG5vdCBmaW5kIGVsZW1lbnQgd2l0aCBJRCAke2lkfSBpbiB0aGUgcGFnZS5gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb3VsZG4ndCBmaW5kIGVsZW1lbnQgaW4gNTAgbG9vcHMsIGdpdmUgdXAuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbEludG9WaWV3KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KHRyeVRvU2Nyb2xsLCAxMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5pbml0aWFsRGVsYXkgIT0gbnVsbCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQodHJ5VG9TY3JvbGwsIG9wdGlvbnMuaW5pdGlhbERlbGF5KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5VG9TY3JvbGwoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBdHRlbXB0cyB0byBzY3JvbGwgdG8gdGhlIGVsZW1lbnQgc3BlY2lmaWVkIGluIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IHBhdGguXHJcbiAqIEluIHRoZSBldmVudCBvZiBhIHNsb3cgcGFnZSByZW5kZXIsIHRoZSBlbGVtZW50IG1heSBub3QgYmUgaW1tZWRpYXRlbHkgYXZhaWxhYmxlLlxyXG4gKiBUaGlzIG1ldGhvZCB3aWxsIHJldHJ5IHVwIHRvIDUwIHRpbWVzIGV2ZXJ5IDEwMG1zIHRvIGZpbmQgdGhlIGVsZW1lbnQgYmVmb3JlXHJcbiAqIGdpdmluZyB1cC5cclxuICpcclxuICogUmVmZXJlbmNlOlxyXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQwNDI5ODdcclxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4MTk1MjIyXHJcbiAqL1xyXG5jb25zdCBfc2Nyb2xsVG9IYXNoID0gKFxyXG4gICAgbG9jYXRpb246IGFueSxcclxuICAgIG9wdGlvbnM6IFNjcm9sbE9wdGlvbnMgPSBEZWZhdWx0U2Nyb2xsT3B0aW9uc1xyXG4pID0+IHtcclxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KGxvY2F0aW9uLmhhc2gpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICAgIF9zY3JvbGxUb0VsZW1lbnRCeUlkKGlkLCBvcHRpb25zKTtcclxufTtcclxuXHJcbi8vICNlbmRyZWdpb24gRnVuY3Rpb25zXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAjcmVnaW9uIEV4cG9ydHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBjb25zdCBTY3JvbGxVdGlscyA9IHtcclxuICAgIHNjcm9sbFRvSGFzaDogX3Njcm9sbFRvSGFzaCxcclxufTtcclxuXHJcbi8vICNlbmRyZWdpb24gRXhwb3J0c1xyXG4iXX0=