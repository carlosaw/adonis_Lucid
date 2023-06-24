import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from 'App/Models/Post';

export default class PostsController {
  
  async index({}: HttpContextContract) { 
    let allPosts = await Post.all();
    return allPosts;
  }

  async store({request}: HttpContextContract) {

    const myData = request.only(['title', 'content']);

    const postagem = await Post.create(myData);
    return postagem;

  }

}
