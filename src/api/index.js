import axios from "axios";

const baseUrl = 'http://192.168.192.211:6969/hosts/get_hosts';

const listarHosts = async () => {
    try {
        const response = await axios.get(baseUrl);
        console.log("Api: ", response.data.message);
    
        return response.data.message;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};
export {
    listarHosts
}