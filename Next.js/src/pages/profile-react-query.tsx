import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "@/apis/posts";
import { QueryClient, QueryClientProvider } from "react-query";

interface PostType {
  id: number;
  title: string;
  content: string;
}

const queryClient = new QueryClient();

function ProfileReactQuery() {
  const { data, isLoading, error } = useQuery("posts", getPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <ul>
        {data.map((post: PostType) => (
          <li key={post.id}>
            <div>{post.title}</div>  
            <div>{[post.content]}</div>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

function Profile() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileReactQuery />
    </QueryClientProvider>
  );
}

export default Profile;
