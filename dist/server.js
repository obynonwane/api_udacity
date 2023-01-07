"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1["default"])();
var PORT = 5000;
app.use(body_parser_1["default"].json());
app.use("/api", index_1["default"]);
app.listen(PORT, function () {
    console.log("starting app on port:".concat(PORT));
});
