const mongoose = require('mongoose');
let Reviews = require('../model/Review');
let Movies = require('../model/Movie');

const getAllReview = async ()=>{
    return Reviews.find();
}
const getReviewById = async(reviewId)=>{
    return Reviews.findById(reviewId).populate("movie");
}
const getReviewByMovieId = async(movieId)=>{
    return Reviews.find({movie:movieId}).populate("movie");
}
const saveReview = async (review) => {
    try {
        const newReview = new Reviews({
            movie: mongoose.Types.ObjectId.createFromHexString(review.movie),
            rating: review.rating,
            review: review.review,
        });

        await newReview.save();

        // Log the new review object to ensure it's created correctly
        console.log('New Review:', newReview);

        return newReview.populate('movie'); // This should work as expected
    } catch (error) {
        // Log the error for debugging
        console.error('Error in saveReview:', error);
        throw error; // Rethrow the error to be caught by the calling function
    }
}
const updateReview = async (reviewId, review) => {
    try {
        review.movie = mongoose.Types.ObjectId.createFromHexString(review.movie);

        const updatedReview = await Reviews.findByIdAndUpdate(reviewId, review, { new: true }).populate("movie");

        return updatedReview;
    } catch (error) {
        console.error('Error in updateReview:', error);
        throw error;
    }
}
const deleteReview= async(reviewId)=>{
    const deletedReview = await Reviews.findByIdAndDelete(reviewId);
    return deletedReview;
}
module.exports = {
    getAllReview,
    getReviewById,
    saveReview,
    getReviewByMovieId,
    updateReview,
    deleteReview,

}