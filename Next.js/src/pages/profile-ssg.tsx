import React from 'react'

// api will return a list of dicts with keys: id, title, contet

type PostType = {
    id: number;
    title: string;
    content: string;
}

type ProfileProps = {
    posts: PostType[];
}


function Profile ({posts}: ProfileProps) {
    return (
        <div>
            <h1>Profile</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>

    )

}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()

    return {
        props: {posts: data}
    }
}

export default  Profile;