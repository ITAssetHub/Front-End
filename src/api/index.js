import axios from "axios";

const baseUrl = 'http://192.168.192.211:6969';

const listarHosts = async () => {
    try {
        const response = await axios.get(baseUrl + '/hosts/get_hosts');
        console.log("Api: ", response.data.message);
    
        return response.data.message;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};

const qtdHardware = async () => {
    try {
        const response = await axios.get(baseUrl + '/hardware/get_hardware_count');
        console.log("Api Hardware: ", response.data.message);
    
        return response.data.message;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};

export {
    listarHosts, qtdHardware
}