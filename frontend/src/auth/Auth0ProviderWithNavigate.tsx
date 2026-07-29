import {Auth0Provider} from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
 const domain = import.meta.env.VITE_AUTH0_DOMAIN;
 const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
 const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

 if(!domain || !clientId || !redirectUri)
     throw new Error("unable to initialise auth");

 return(
     <Auth0Provider
         domain={domain}
         clientId={clientId}
         authorizationParams={{
             redirect_uri: redirectUri,
         }}></Auth0Provider>
 )
}

export default Auth0ProviderWithNavigate