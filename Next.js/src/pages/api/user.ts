import { NextApiRequest, NextApiResponse } from "next";

function userAPI(req: NextApiRequest, res:NextApiResponse){
    res.status(200).json({"message": "Welcome Hussam!"})
}

export default userAPI;