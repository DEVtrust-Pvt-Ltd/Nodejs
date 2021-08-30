import db from "../db";
import errorHandler from "../lib/util";

export default class BaseAPIController {
    constructor() {
        this._db = db;
    }

    handleErrorResponse(res, err, status) {
         res.status(status || 400).send(errorHandler(err));
    }

    handleSuccessResponse(req, res, next, data) {
        res.json(data)
    }
}