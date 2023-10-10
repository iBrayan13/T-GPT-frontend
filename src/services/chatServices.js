const API_URI = "https://t-gpt-backend.onrender.com";

// Getting access to API by secrets keys
const getAccessToken = async() => {
    const response = await fetch(
        `${API_URI}/auth/get-access`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Public keys to get access to T-GPT's API :D
                key: "WMa1pVzzFUKEwKbwZ2XCGiq69HoXIpai",
                engine: "text-davinci-003",
                provideer: "T-GPT",
                jwt_algorithm: "HS256"
            })
        }
    );

    if (response.status === 202){
        const data = await response.json();
        return data.access_token;
    }

    return "";
}

// Chatting with GPT
export const getAnswerGPT = async(question) => {
    const access_token = await getAccessToken();

    const response = await fetch(
        `${API_URI}/chat/get-answer`,
        {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: `${question}`
            })
        }
    );

    if (response.status === 200){
        const data = await response.json();
        let answer = data.answer;

        return answer
    }

    return "Hubo un problema al obtener la respuesta. Intentalo de nuevo."
}