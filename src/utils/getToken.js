import { v4 as uuidv4 } from "uuid";

const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_ROOM_ID;
const usr_id = uuidv4();

export default async function getToken(role) {
    const response = await fetch(`${endPoint}api/token`, {
        method: "POST",
        body: JSON.stringify({
            user_id: usr_id, // User ID assigned by you (different from 100ms' assigned id)
            role: role, // listener , speaker , moderator
            room_id,
        }),
        headers: {
            "content-type": "application/json",
        },
    });

    const { token } = await response.json();

    return token;
}
