import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        let token = req.body.token;

        console.log("headers : ", req.headers);
        if(!token && req.headers.Authorization){
            token = req.headers.Authorization.split(" ")[1];
        }
        if(!token && req.headers.cookie){
            token = req.headers.cookie.split("=")[1];
            console.log("cookie : ", req.headers.cookie);
        }
        console.log(token);
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;