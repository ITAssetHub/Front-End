import axios from "axios";

const baseUrl = 'http://192.168.192.237:6969/';

const listarHosts = async () => {
    try {
        const response = await axios.get(baseUrl + 'hosts/get_hosts');
        console.log("Api: ", response.data.message);
    
        return response.data.message;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};

const qtdHardware = async () => {
    try {
        const response = await axios.get(baseUrl + 'hardware/get_hardware_count');
        console.log("Resposta completa da API Hardware: ", response);

        if (response.data && 'message' in response.data) {
            console.log("Api Hardware: ", response.data.message);
            return response.data.message;
        } else {
            console.error("Estrutura de dados inesperada: ", response.data);
            throw new Error("A resposta da API não contém o campo 'message'.");
        }
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        throw error;
    }
};


export {
    listarHosts, qtdHardware
}