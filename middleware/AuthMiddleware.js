const { check,validationResult } = require('express-validator');

const containsUppercaseLowercaseSymbolNumber = (value) => {
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(value)) {
      throw new Error('Password must contain at least one uppercase letter');
    }
  
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(value)) {
      throw new Error('Password must contain at least one lowercase letter');
    }
  
    // Check for at least one symbol (non-alphanumeric character)
    if (!/[^a-zA-Z0-9]/.test(value)) {
      throw new Error('Password must contain at least one symbol');
    }
  
    // Check for at least one number
    if (!/\d/.test(value)) {
      throw new Error('Password must contain at least one number');
    }
  
    return true;
  };

exports.validateUser = [
     check("email")
        .trim()
        .not()
        .isEmpty()
        .withMessage("please fill all fields!")
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid Email'),
    check("password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("please fill all fields!")
        .isLength({min:8,max:20})
        .withMessage("password must be 8 to 20 characters long")
        .custom(containsUppercaseLowercaseSymbolNumber)
];

exports.validate = (req,res,next) => {
    const error = validationResult(req).array()
    if(!error.length){
        return next()
    }
    res.status(400).json({success: false, error: error[0].msg})
}

