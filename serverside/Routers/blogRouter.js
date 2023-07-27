const express = require('express');
const { authMiddleware } = require('../Utils/GlobalFunctions');
const { createBlog, updateBlog, getAllBlog, getBlogById, deleteBlog } = require('../Controllers/blogController');
const router = express.Router();

router.post('/create/blog',authMiddleware,createBlog);
router.put('/update-blog/:blogId',authMiddleware,updateBlog);
router.get('/get-all/blog',authMiddleware,getAllBlog);
router.get('/get-blog/:blogId',authMiddleware,getBlogById);
router.delete('/delete-blog/:blogId',authMiddleware,deleteBlog);

module.exports = router;