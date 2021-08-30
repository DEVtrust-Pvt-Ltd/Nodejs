import BaseAPIController from "./BaseAPIController";
import {
    validationResult
} from 'express-validator';
import md5 from 'md5';

export class UserController extends BaseAPIController {
    createAccount = async (req, res, next) => {
        try {
            const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

            if (!errors.isEmpty()) {
                this.handleErrorResponse(res, {
                    err: errors.array()
                }, 422)
                return
            }
            let bodyData ={
                "accountName": req.body.accountName,
                "accountEmail": req.body.accountEmail,
                "accountPassword": md5(req.body.accountPassword),
                "accountZIP": req.body.accountZIP
            }
            let step1 = await this._db.account.createAccountStep1(bodyData);
            this.handleSuccessResponse(req, res, next, step1);
        } catch (err) {
            this.handleErrorResponse(res, err, next)
        }
    }
}

const controller = new UserController();
export default controller;