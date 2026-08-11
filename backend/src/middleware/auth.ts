import {auth} from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: 'mern-food-ordering-app-api',
    issuerBaseURL: 'https://dev-ar51zhzxhw8v8cp2.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});


