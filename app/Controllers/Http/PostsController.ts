import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from '../../Models/Post';
export default class PostsController {
    public async index() {
        return await Post.all();
    }

    public async store(context: HttpContextContract) {
        const newPost = context.request.only(['title', 'content']);
        const post = await Post.create(newPost);
        return post;
    }
}
