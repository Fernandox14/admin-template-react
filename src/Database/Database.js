export const URL = "https://localhost:7248/api/";
export const User = "User";

export const Headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': 'https://localhost:7248',
    'Access-Control-Allow-Methods': 'POST, GET',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Max-Age': 86400
};

export function GetParam(value){
    const query = new URLSearchParams(window.location.search);
    return query.get(value);
}