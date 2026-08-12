import {auth} from "express-oauth2-jwt-bearer";
import {Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';
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
    }catch (error){
        return res.status(401);
    }
}




