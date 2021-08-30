import {
    body
} from 'express-validator';

const create = () => {
    return [
        body('listingsType', 'Listing Type should be Integer').isInt()
        ,body('listingsCategory', 'Listing Category should be Integer').isInt()
        ,body('listingsSubCategory', 'Listing Sub Category should be Integer').isInt()
        ,body('listingsCity', 'Listing City should be Integer').isInt()
        ,body('listingsState', 'Listing State should be Integer').isInt()
        ,body('listingsCountry', 'Listing Country should be Integer').isInt()
        ,body('listingsYearFrom', 'Listing Year From should be Integer').isInt()
        ,body('listingsDescription', 'Listing Description should be String').isString()
        ,body('listingsYearTo', 'Listing Year To should be Integer').isInt()
        ,body('listingsStatus', 'Listing Status should be Integer').isInt()
        ,body('listingsCompany', 'Listing Company should be Integer').isInt()
        ,body('listingsAccount', 'Listing Account should be Integer').isInt()
        ,body('createdBy', 'createdBy should be Integer').isInt()
        ,body('updatedBy', 'updatedBy should be Integer').isInt()
        ,body('listingsEnquiryEmail', 'Invalid email').exists().isEmail()
        ,body('createdBy', 'createdBy is required').exists()
    ]
};

export default {
    create
};