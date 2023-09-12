import { NextApiRequest, NextApiResponse } from "next";
import {posts} from '@/pages/api/posts'

function createPostAPI (req: NextApiRequest, response: NextApiResponse){
    if (req.method === 'POST') {
        const newPost = {
            id: posts.length + 1,
            title: req.body.title,
            content: req.body.content
        }
        posts.push(newPost);
        response.status(201).json(newPost);
    }else{
        response.status(405).json({message: 'Only support POST'});
    }
}

export default createPostAPI;