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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// export default function Form() {\n//   return (\n//     <form action='/api/form' method='post'>\n//       <label htmlFor='miles'>Miles</label>\n//       <input type='number' id='miles' name='miles' required />\n//       <label htmlFor='volume'>Volume</label>\n//       <input type='number' id='volume' name='volume' required />\n//       <label htmlFor='price'>Price at Pump</label>\n//       <input type='number' id='price' name='price' required />\n//       <label htmlFor='date'>Date</label>\n//       <input type='date' id='date' name='date' required />\n//       <button type='submit'>Submit</button>\n//     </form>\n//   )\n// }\nfunction handler(req, res) {\n    // Get data submitted in request's body.\n    const body = req.body;\n    // Optional logging to see the responses\n    // in the command line where next.js app is running.\n    console.log(\"body: \", body);\n    // Guard clause checks for miles, volume, price, date,\n    // and returns early if they are not found\n    if (!body.miles || !body.volume || !body.price || !body.date) {\n        // Sends a HTTP bad request error code\n        return res.status(400).json({\n            data: \"Check if the form is fully filled out.\"\n        });\n    }\n    // Found the name.\n    // Sends a HTTP success code\n    res.status(200).json({\n        data: `${body.miles} ${body.volume} ${body.price} ${body.date}`\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUNBQW1DO0FBQ25DLGFBQWE7QUFDYiw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQzdDLGlFQUFpRTtBQUVqRSwrQ0FBK0M7QUFDL0MsbUVBQW1FO0FBRW5FLHFEQUFxRDtBQUNyRCxpRUFBaUU7QUFFakUsMkNBQTJDO0FBQzNDLDZEQUE2RDtBQUU3RCw4Q0FBOEM7QUFDOUMsY0FBYztBQUNkLE1BQU07QUFDTixJQUFJO0FBSVcsU0FBU0EsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0Qyx3Q0FBd0M7SUFDeEMsTUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQUk7SUFFckIsd0NBQXdDO0lBQ3hDLG9EQUFvRDtJQUNwREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFRixJQUFJLENBQUM7SUFFM0Isc0RBQXNEO0lBQ3RELDBDQUEwQztJQUMxQyxJQUFJLENBQUNBLElBQUksQ0FBQ0csS0FBSyxJQUFJLENBQUNILElBQUksQ0FBQ0ksTUFBTSxJQUFJLENBQUNKLElBQUksQ0FBQ0ssS0FBSyxJQUFJLENBQUNMLElBQUksQ0FBQ00sSUFBSSxFQUFFO1FBQzVELHNDQUFzQztRQUN0QyxPQUFPUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLElBQUksRUFBRSx3Q0FBd0M7U0FBRSxDQUFDO0tBQ2hGO0lBRUQsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QlYsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsQ0FBQyxFQUFFVCxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDLENBQUMsRUFBRUosSUFBSSxDQUFDSyxLQUFLLENBQUMsQ0FBQyxFQUFFTCxJQUFJLENBQUNNLElBQUksQ0FBQyxDQUFDO0tBQUUsQ0FBQztDQUMxRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9mb3JtLmpzPzExOTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Zm9ybSBhY3Rpb249Jy9hcGkvZm9ybScgbWV0aG9kPSdwb3N0Jz5cbi8vICAgICAgIDxsYWJlbCBodG1sRm9yPSdtaWxlcyc+TWlsZXM8L2xhYmVsPlxuLy8gICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgaWQ9J21pbGVzJyBuYW1lPSdtaWxlcycgcmVxdWlyZWQgLz5cblxuLy8gICAgICAgPGxhYmVsIGh0bWxGb3I9J3ZvbHVtZSc+Vm9sdW1lPC9sYWJlbD5cbi8vICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIGlkPSd2b2x1bWUnIG5hbWU9J3ZvbHVtZScgcmVxdWlyZWQgLz5cblxuLy8gICAgICAgPGxhYmVsIGh0bWxGb3I9J3ByaWNlJz5QcmljZSBhdCBQdW1wPC9sYWJlbD5cbi8vICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIGlkPSdwcmljZScgbmFtZT0ncHJpY2UnIHJlcXVpcmVkIC8+XG5cbi8vICAgICAgIDxsYWJlbCBodG1sRm9yPSdkYXRlJz5EYXRlPC9sYWJlbD5cbi8vICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyBpZD0nZGF0ZScgbmFtZT0nZGF0ZScgcmVxdWlyZWQgLz5cblxuLy8gICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuLy8gICAgIDwvZm9ybT5cbi8vICAgKVxuLy8gfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIC8vIEdldCBkYXRhIHN1Ym1pdHRlZCBpbiByZXF1ZXN0J3MgYm9keS5cbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHlcbiAgXG4gICAgLy8gT3B0aW9uYWwgbG9nZ2luZyB0byBzZWUgdGhlIHJlc3BvbnNlc1xuICAgIC8vIGluIHRoZSBjb21tYW5kIGxpbmUgd2hlcmUgbmV4dC5qcyBhcHAgaXMgcnVubmluZy5cbiAgICBjb25zb2xlLmxvZygnYm9keTogJywgYm9keSlcbiAgXG4gICAgLy8gR3VhcmQgY2xhdXNlIGNoZWNrcyBmb3IgbWlsZXMsIHZvbHVtZSwgcHJpY2UsIGRhdGUsXG4gICAgLy8gYW5kIHJldHVybnMgZWFybHkgaWYgdGhleSBhcmUgbm90IGZvdW5kXG4gICAgaWYgKCFib2R5Lm1pbGVzIHx8ICFib2R5LnZvbHVtZSB8fCAhYm9keS5wcmljZSB8fCAhYm9keS5kYXRlKSB7XG4gICAgICAvLyBTZW5kcyBhIEhUVFAgYmFkIHJlcXVlc3QgZXJyb3IgY29kZVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZGF0YTogJ0NoZWNrIGlmIHRoZSBmb3JtIGlzIGZ1bGx5IGZpbGxlZCBvdXQuJyB9KVxuICAgIH1cbiAgXG4gICAgLy8gRm91bmQgdGhlIG5hbWUuXG4gICAgLy8gU2VuZHMgYSBIVFRQIHN1Y2Nlc3MgY29kZVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogYCR7Ym9keS5taWxlc30gJHtib2R5LnZvbHVtZX0gJHtib2R5LnByaWNlfSAke2JvZHkuZGF0ZX1gIH0pXG4gIH0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwibWlsZXMiLCJ2b2x1bWUiLCJwcmljZSIsImRhdGUiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/form.js\n");

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