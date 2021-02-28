const Router = require('express')
const router = new Router()
const postController = require('../controllers/post.controller')

router.post('/post',postController.createPost)
router.post('/post/:num',postController.createNPost)
router.get('/post',postController.getPostsByUser)

module.exports = router