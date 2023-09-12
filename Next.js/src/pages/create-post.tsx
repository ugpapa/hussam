import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function CreatePost(){
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [errorAPI, setError] = useState<string>("");

    const handleSubmit = () => {

        const post = {
            title: title,
            content: content
        }

        axios.post('/api/create-post', post).then((response)=>{
            console.log(`Response: ${response.data}`)
            window.alert(`Success: ${JSON.stringify(response.data)}`)
        }).catch((error)=>{
            console.log(`Error: ${error.message}`)
            setError(error.message)
            window.alert(`Error: ${errorAPI}`)
        })
            
        
    }
    
    return (
        <div>
            <h1> Create a new post </h1>
            <div>
                <input type='text' placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            
            <div>
                <input type ='text' placeholder='Description' onChange={(e)=>{setContent(e.target.value)}}/>
            </div>

            <button onClick = {handleSubmit}>Submit</button>
            
        </div>
    )

}

export default CreatePost;