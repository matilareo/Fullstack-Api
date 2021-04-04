import {Query, Resolver,Mutation , Arg} from 'type-graphql';
import {Post} from '../entities/Post';

@Resolver()

class PostResolver{ 
  @Mutation(()=> Post)
  async createPost(@Arg('title') title:string){
    try{
      const post = await Post.create({
        title:title
      }).save();
      return post;
    }
    catch(e){
      return e;
    }
  }

  @Mutation(()=> Boolean)
  async updatePost(@Arg('id') id:string, @Arg('title') title:string ){
    try{
      await Post.update(
        {id:id},
        {title:title}
      )
      return true;
    }
    catch(e){
      return e;
    }
  }

  @Mutation(()=> Boolean)
  async deletePost(@Arg('id') id:string){
    try{
      await Post.delete({
        id:id
      })
      return true;
    }
    catch(e){
      return e;
    }
  }
  
  @Query(()=>[Post])
  async getPosts(){
    try{
      return await Post.find();
    }
    catch(e){
      console.log(e)
      return e;
    }
  }
}

export default PostResolver;