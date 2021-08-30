import auth from "../middleware/auth";
import listings from "../controllers/Listings";
import ListingValidator from "../validators/ListingValidator";

export default (app) => {
    /* Route for User Registration  */
    app.route("/listings/create").post(ListingValidator.create(), listings.createListings);

    return app;
};