const Blog = require('../Models/blogSchema');

exports.createBlog = (req, res) => {
    try {
        const { blogname, description, authorname, url } = req.body;
        Blog.create({
            blogname: blogname,
            description: description,
            authorname: authorname,
            url, url
        }).then((blog) => {
            res.status(201).json({ Message: "blog created successfully.", blog });
        }).catch((err) => {
            res.status(400).json({ Message: err })
        })
    } catch (err) {
        res.status(500).json({ Message: "Internal server issues." })
    }
}

exports.getAllBlog = (req, res) => {
    try {
        Blog.find().then((blog) => {
            res.status(200).json(blog)
        }).catch(() => {
            res.status(400).json({ Message: 'Something went wrong.' })
        })
    } catch (err) {
        res.status(500).json({ Message: "Internal server issues." })
    }
}

exports.getBlogById = (req, res) => {
    try {
        const { blogId } = req.params;
        Blog.findById(blogId).then((blog) => {
            res.status(200).json(blog)
        }).catch(() => {
            res.status(400).json({ Message: 'Something went wrong.' })
        })
    } catch (err) {
        res.status(500).json({ Message: "Internal server issues." })
    }
}

exports.updateBlog = (req, res) => {
    try {
        const { blogname, description, authorname, url } = req.body;
        const { blogId } = req.params;
        Blog.findByIdAndUpdate({ _id: blogId }, {
            $set: {
                blogname: blogname,
                description: description,
                authorname: authorname,
                url, url
            }
        }).then((blog) => {
            res.status(200).json({ Message: "Blog updated successfully." })
        }).catch(() => {
            res.status(400).json({ Message: 'Something went wrong.' })
        })
    } catch (err) {
        res.status(500).json({ Message: "Internal server issues." })
    }
}

exports.deleteBlog = (req, res) => {
    try {
        const { blogId } = req.params;
        Blog.deleteOne({ _id: blogId }).then(() => {
            res.status(200).json({ Message: "Blog deleted successfully." })
        }).catch(() => {
            res.status(400).json({ Message: 'Something went wrong.' })
        })
    } catch (err) {
        res.status(400).json({ Message: 'Something went wrong.' })
    }
}