import axios from 'axios';

const API_MACHINES = "https://wrk.acronex.com/api/challenge/machines";

export const getMachines = async (id) => await GET(`${API_MACHINES}`);
export const getMachineDetail = async (id) => await GET(`${API_MACHINES}${id}`);

// --- GENERAL METHODS ---
const GET = async (postfixUrl) => {
    const URL = `${postfixUrl}`;
    const method = `GET ${URL}`
    console.debug({ request: method })

    return await axios.get(URL)
        .then(response => {
            const { data } = response
            console.info({ response: data })
            return data;
        })
        .catch(err => console.error(err))
}
