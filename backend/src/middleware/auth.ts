import {auth} from "express-oauth2-jwt-bearer";
import {Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';
import User from "../model/user";

declare global

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});

export const jwtParse = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401);
    }

    // bearer --token
    const token = authorization.split(" ")[1];

    try{
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;

        const user = await User.find({ auth0Id });

        if(!user){
            return res.sendStatus(401);
        }

        req.auth0Id = auth0Id;
        req.userId = user._id.toString();
        next();
    }catch (error){
        return res.status(401);
    }
}




