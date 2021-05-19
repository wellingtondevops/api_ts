"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./infra/db");
class StartUp {
    constructor() {
        this.app = express();
        this.routes();
        this._db = new db_1.default();
        this._db.createConnection();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
    }
}
exports.default = new StartUp();
