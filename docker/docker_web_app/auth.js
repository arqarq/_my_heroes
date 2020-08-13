"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthService {
    constructor(admin) {
        this.admin = admin;
    }
    createToken(uid) {
        return this.admin.auth().createCustomToken(uid);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.js.map