import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/transactions';

export const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response;
};