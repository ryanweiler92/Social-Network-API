const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:id')
    .get(getThoughtById)

router
    .route('/:userId')
    .post(addThought)

router
    .route('/:thoughtId/:userId')
    .put(updateThought)
    .delete(removeThought)
    .post(addReaction)

router
    .route('/:thoughtId/:userId/:reactionId')
    .delete(removeReaction)

module.exports = router;