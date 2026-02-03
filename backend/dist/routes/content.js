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
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRouter = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const db_1 = require("../db");
exports.contentRouter = (0, express_1.Router)();
exports.contentRouter.post("/", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { link, title, type } = req.body;
        const content = yield db_1.Content.create({
            link: link,
            title,
            type,
            userId: req.userId,
            tags: []
        });
        console.log("saved content ", content);
        return res.json({
            message: " Content added"
        });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
}));
exports.contentRouter.get("/", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const content = yield db_1.Content.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content
    });
}));
exports.contentRouter.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_1.Content.deleteMany({
        contentId,
        userId: req.userId
    });
}));
