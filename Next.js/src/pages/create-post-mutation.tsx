import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient, QueryClientProvider } from "react-query";
import {createPost, PostDataType} from "@/apis/posts";
import Profile from "./profile-react-query";

const queryClient = useQueryClient();
function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation((postData: PostDataType) => createPost(postData), {

    onSuccess: () => {
      // Invalidate and refetch the 'posts' when mutation is successful
      queryClient.invalidateQueries('posts');
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ title: title, content: content });
  };
  
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <h1>Create New Post</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {mutation.isError && <div>An error occurred: {mutation.error.message}</div>}
      {mutation.isLoading && <div>Adding...</div>}
      <div>
        <Profile />
      </div>
    </div>
    </QueryClientProvider>
  );
}

export default CreatePost;
