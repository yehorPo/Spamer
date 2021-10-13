import Post from "./post.js"

class Controllers {
    async add(req, res) {
        try {
            const { name, surname, patronymic, email } = req.body;
            const post = await Post.create({ name, surname, patronymic, email });
            console.log(req.body);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }

    }
    async getAll(req, res) {
        try {
            const post = await Post.find();
            return res.json(post);
        } catch {
            res.status(500).json(e);
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("Error!");
            }
            const post = await Post.findById(id);
            return res.json(post);
        } catch {
            res.status(500).json(e);
        }
    }
    async update(req, res) {
        try {
            const post = req.body;
            if (!post._id) {
                res.status(400).json("Error!");
            }
            const newPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
            return res.json(newPost);
        } catch {
            res.status(500).json(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json("Error!");
            }
            const post = await Post.findByIdAndDelete(id);
            return res.json(post);
        } catch {
            res.status(500).json(e);
        }
    }
}

export default new Controllers();