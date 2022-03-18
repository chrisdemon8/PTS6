"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_1 = require("../components/table/Table");
var utils_1 = require("../utils");
var ClientPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        "ClientPage",
        react_1["default"].createElement(Table_1.Table, { randData: utils_1.data })));
};
exports["default"] = ClientPage;
