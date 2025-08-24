const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url:{
            type: String,
            default: "https://images.unsplash.com/photo-1610106109549-5813ab87ae88?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0"
        }
    },
    price:String,
    location:String,
    country:String,
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;


