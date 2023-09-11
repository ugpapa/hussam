import { NextApiRequest, NextApiResponse } from "next"

const posts = [
    { id: 1, title: 'Hello World' , content: 'Welcome to learning Next.js!' },
    { id: 2, title: 'Installation', content: 'You can install Next.js from npm.' },
    { id: 3, title: 'Usage', content: 'Next.js has a file-system based router built on the concept of pages.' },
    { id: 4, title: 'Learn More', content: 'You can check out the Next.js GitHub repository.' }
]

function postsAPI(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(posts)
}

export default postsAPI
