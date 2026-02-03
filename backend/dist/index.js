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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const content_1 = require("./routes/content");
const user_1 = require("./routes/user");
const utils_1 = require("./utils");
const cors_1 = __importDefault(require("cors"));
const express = require('express');
const app = express();
app.use(express.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // Vite frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false
}));
app.use((req, res, next) => {
    console.log("REQ:", req.method, req.url);
    next();
});
app.use("/api/v1/user", user_1.userRouter);
app.use("/api/v1/content", content_1.contentRouter);
app.post("/api/v1/brain/share", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { share } = req.body;
    if (share) {
        yield db_1.Link.create({
            //@ts-ignore
            userId: req.userId,
            hash: (0, utils_1.random)(10)
        });
    }
    else {
        yield db_1.Link.deleteOne({
            //@ts-ignore
            userId: req.userId
        });
    }
    res.json({
        message: "Update Shareable link"
    });
}));
app.listen(5000);
