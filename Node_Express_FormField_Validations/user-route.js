var express = require("express");
var router = express.Router();
const W = require("../utils/winston");
const response = require("../utils/response");
const user = require("./user-modal");
const { body } = require('express-validator/check');


/** Middleware to check each POST request should have phone Number and token */

router.validator = (method) => {
  
  return [

    body('phoneNumber', 'Valid Phone Number is required').exists(),
    body('phoneNumber', 'Valid Phone Number length is required').isLength({min:10,max:10}),
    body('token', 'Invalid token').exists(),
    
  ]
};

const validationHandler = next => result => {
  
  if (result.isEmpty()) return
  if (!next)
    throw new Error(
      result.array().map(i => `'${i.param}' has error.${i.msg}`).join(' ')
    )
else
  return next(
    new Error(
     result.array().map(i => `'${i.param}' has error.${i.msg}`).join('')
    )
  )
}

/** This will register the user and updated the token every time called */
router.post("/", router.validator() ,async (req, res, next) => {
  let params = req.body;
  req.getValidationResult().then(validationHandler()).then(async () => {
    try {
      let result = "";
      const existingUser = await user.findByNumber(params.phoneNumber);
      if (!existingUser) {
        const userObj = new user({
          phoneNumber: req.body.phoneNumber,
          deviceToken: req.body.token
        });
        result = await user.createUser(userObj);
        W.info(`user creation success:${result}`);
      } else {
        W.info(`user exists : ${JSON.stringify(existingUser)}`);
        result = await user.updateToken(params.phoneNumber, params.token);
      }

      W.info(`user update success:${result}`);
      res.send(response.success(result));
    } catch (error) {
      W.info(`user creation error:${error}`);
      res.send(response.failure(error));
    }
  }, (error) => {
    res.send(response.failure(error.toString()));
  });
});




module.exports = router;
