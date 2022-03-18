"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HomePage = function () {
    console.log(process.env);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", null,
            "Buil en cours :",
            process.env.REACT_APP_BUILD_TYPE),
        react_1["default"].createElement("p", null, "HomePage")));
};
exports["default"] = HomePage;
