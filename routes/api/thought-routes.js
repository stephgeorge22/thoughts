const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought, 
    addReaction, 
    removeReaction
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

// /api/thought/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .put(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;