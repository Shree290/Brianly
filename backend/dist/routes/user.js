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
exports.userRouter = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const db_1 = require("../db");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        yield db_1.User.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: "User signed up"
        });
    }
    catch (e) {
        console.error("Signup error:", e.message);
        res.status(411).json({
            message: e.message
        });
    }
}));
exports.userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password required"
        });
    }
    const existinguser = yield db_1.User.findOne({
        username
    });
    if (!existinguser) {
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }
    if (existinguser.password !== password) {
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }
    const token = jsonwebtoken_1.default.sign({ id: existinguser._id }, config_1.JWT_PASS);
    // ✅ SUCCESS MUST BE 200
    res.status(200).json({ token });
}));
