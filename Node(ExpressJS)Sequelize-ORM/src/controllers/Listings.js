import BaseAPIController from "./BaseAPIController";
import {
    validationResult
} from 'express-validator';


export class ListingController extends BaseAPIController {
    createListings = async (req, res, next) => {
        try {
            const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
            
            if (!errors.isEmpty()) {
                this.handleErrorResponse(res, {
                    err: errors.array()
                }, 422)
                return
            }
            let bodyData ={
                "listingsType": req.body.listingsType
                ,"listingsCategory": req.body.listingsCategory
                ,"listingsSubCategory": req.body.listingsSubCategory
                ,"listingsUnpublish": req.body.listingsUnpublish

                ,"listingsCity": req.body.listingsCity
                ,"listingsState": req.body.listingsState
                ,"listingsCountry": req.body.listingsCountry

                ,"listingsDescription": req.body.listingsDescription
                ,"listingsYearFrom": req.body.listingsYearFrom
                ,"listingsYearTo": req.body.listingsYearTo

                ,"listingsEnquiryEmail": req.body.listingsEnquiryEmail
                ,"listingsStatus": req.body.listingsStatus
                ,"listingsCompany": req.body.listingsCompany

                ,"listingsAccount": req.body.listingsAccount
                ,"updateTime": req.body.updateTime
                ,"createdBy": req.body.createdBy
                ,"updatedBy": req.body.updatedBy
                
            }
            
            let step1 = await this._db.listings.createListingStep1(bodyData);
            this.handleSuccessResponse(req, res, next, step1);
        } catch (err) {
            this.handleErrorResponse(res, err, next)
        }
    }
}

const controller = new ListingController();
export default controller;