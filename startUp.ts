import * as express from 'express';
import Database from './infra/db';





class StartUp {
    public app: express.Application;

    private _db: Database;


    constructor() {
        this.app = express();
        this.routes();
        this._db = new Database();
        this._db.createConnection();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' })
        })
    }
}

export default new StartUp();