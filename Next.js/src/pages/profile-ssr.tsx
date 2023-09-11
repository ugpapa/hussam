import React from "react"
import { GetServerSidePropsContext } from "next"

type UserMessageType = {
    message: string;
};

type ProfileProps = {
    user: UserMessageType;
};


function Profile ({user}: ProfileProps) {
    return (
        <div>
            <h1>Profile</h1>
            <p className="main-message"> {user.message}</p>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const res = await fetch('http://localhost:3000/api/user')
    const data = await res.json()

    return {
        props: { user: data  }, // will be passed to the page component as props
    }
}

export default Profile;