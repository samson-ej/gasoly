"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "(api)/./pages/api/form.js":
/*!***************************!*\
  !*** ./pages/api/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    // Get data submitted in request's body.\n    const body = req.body;\n    // Optional logging to see the responses\n    // in the command line where next.js app is running.\n    console.log(\"body: \", body);\n    // Guard clause checks for miles, volume, price, date,\n    // and returns early if they are not found\n    if (!body.miles || !body.volume || !body.price || !body.date) {\n        // Sends a HTTP bad request error code\n        return res.status(400).json({\n            data: \"Check if form fully filled out.\"\n        });\n    }\n    // Found the name.\n    // Sends a HTTP success code\n    res.status(200).json({\n        data: `${body.miles} ${body.volume} ${body.price} ${body.date}`\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0Qyx3Q0FBd0M7SUFDeEMsTUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQUk7SUFFckIsd0NBQXdDO0lBQ3hDLG9EQUFvRDtJQUNwREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFRixJQUFJLENBQUM7SUFFM0Isc0RBQXNEO0lBQ3RELDBDQUEwQztJQUMxQyxJQUFJLENBQUNBLElBQUksQ0FBQ0csS0FBSyxJQUFJLENBQUNILElBQUksQ0FBQ0ksTUFBTSxJQUFJLENBQUNKLElBQUksQ0FBQ0ssS0FBSyxJQUFJLENBQUNMLElBQUksQ0FBQ00sSUFBSSxFQUFFO1FBQzVELHNDQUFzQztRQUN0QyxPQUFPUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLElBQUksRUFBRSxpQ0FBaUM7U0FBRSxDQUFDO0tBQ3pFO0lBRUQsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QlYsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsQ0FBQyxFQUFFVCxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDLENBQUMsRUFBRUosSUFBSSxDQUFDSyxLQUFLLENBQUMsQ0FBQyxFQUFFTCxJQUFJLENBQUNNLElBQUksQ0FBQyxDQUFDO0tBQUUsQ0FBQztDQUMxRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9mb3JtLmpzPzExOTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIC8vIEdldCBkYXRhIHN1Ym1pdHRlZCBpbiByZXF1ZXN0J3MgYm9keS5cbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHlcbiAgXG4gICAgLy8gT3B0aW9uYWwgbG9nZ2luZyB0byBzZWUgdGhlIHJlc3BvbnNlc1xuICAgIC8vIGluIHRoZSBjb21tYW5kIGxpbmUgd2hlcmUgbmV4dC5qcyBhcHAgaXMgcnVubmluZy5cbiAgICBjb25zb2xlLmxvZygnYm9keTogJywgYm9keSlcbiAgXG4gICAgLy8gR3VhcmQgY2xhdXNlIGNoZWNrcyBmb3IgbWlsZXMsIHZvbHVtZSwgcHJpY2UsIGRhdGUsXG4gICAgLy8gYW5kIHJldHVybnMgZWFybHkgaWYgdGhleSBhcmUgbm90IGZvdW5kXG4gICAgaWYgKCFib2R5Lm1pbGVzIHx8ICFib2R5LnZvbHVtZSB8fCAhYm9keS5wcmljZSB8fCAhYm9keS5kYXRlKSB7XG4gICAgICAvLyBTZW5kcyBhIEhUVFAgYmFkIHJlcXVlc3QgZXJyb3IgY29kZVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZGF0YTogJ0NoZWNrIGlmIGZvcm0gZnVsbHkgZmlsbGVkIG91dC4nIH0pXG4gICAgfVxuICBcbiAgICAvLyBGb3VuZCB0aGUgbmFtZS5cbiAgICAvLyBTZW5kcyBhIEhUVFAgc3VjY2VzcyBjb2RlXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiBgJHtib2R5Lm1pbGVzfSAke2JvZHkudm9sdW1lfSAke2JvZHkucHJpY2V9ICR7Ym9keS5kYXRlfWAgfSlcbiAgfSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJtaWxlcyIsInZvbHVtZSIsInByaWNlIiwiZGF0ZSIsInN0YXR1cyIsImpzb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/form.js"));
module.exports = __webpack_exports__;

})();