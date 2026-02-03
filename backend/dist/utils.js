"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
function random(len) {
    let options = "esdgdfsfsgw214534";
    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += options[Math.random() * length];
    }
}
