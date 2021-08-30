import {
    body
} from 'express-validator';

const create = () => {
    return [
        body('accountName', 'Name Is required').exists(),
        body('accountEmail', 'Invalid email').exists().isEmail(),
        body('accountPassword', 'Password Must Exists and Length Should be minimum 6 Characters').exists().isLength({
            min: 6
        }),
        body('accountZIP', 'accountZIP is required').exists().isLength({
            max: 6
        })
    ]
};

export default {
    create
};