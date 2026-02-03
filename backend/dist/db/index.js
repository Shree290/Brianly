"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Tag = exports.Content = exports.User = void 0;
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/");
//userschema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 10,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 20,
        required: true
    }
});
exports.User = mongoose.model('User', userSchema);
//content schema
const contentTypes = ['image', 'video', 'article', 'audio', 'youtube', 'twitter'];
const contentSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: contentTypes,
        required: true
    },
    tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag'
        }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
exports.Content = mongoose.model('Content', contentSchema);
//tagschema
const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
});
exports.Tag = mongoose.model('Tag', tagSchema);
const linkSchema = new mongoose.Schema({
    hash: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    }
});
exports.Link = mongoose.model('Link', linkSchema);
