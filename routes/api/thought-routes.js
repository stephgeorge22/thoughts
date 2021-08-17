const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thought
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thought/:thoughtId/:reactionId
    router
    .route('/:thoughtId/:reactionId')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;