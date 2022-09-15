import auth from "../middleware/auth";
import account from "../controllers/Account";
import AccountValidator from "../validators/AccountValidator";

export default (app) => {
    /* Route for User Registration  */
    app.route("/account/create/step1").post(AccountValidator.create(), account.createAccount);

    return app;
};