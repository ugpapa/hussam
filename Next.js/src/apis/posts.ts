import axios from 'axios';

export async function getPosts() {
    try {
        const response = await axios.get('/api/posts');
        return response.data;
    } catch (error){
        throw new Error('API Error occurred.');
    } 
}