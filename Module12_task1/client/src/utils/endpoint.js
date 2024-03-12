import env from "react-dotenv";

export const getEndpointUrl = () => {
    return env.ENDPOINT;
} 