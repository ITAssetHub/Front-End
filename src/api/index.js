import axios from "axios";

const baseUrl = 'http://192.168.192.237:6969/';

const listarHosts = async () => {
    try {
        const response = await axios.get(baseUrl + 'hosts/get_hosts');
        console.log("Api: ", response.data.Hosts);
        return response.data.Hosts;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};

const qtdHardware = async () => {
    try {
        const response = await axios.get(baseUrl + 'hardware/get_hardware_count');
        console.log("Resposta completa da API Hardware: ", response);

        if (response.data && 'Hardware_Count' in response.data) {
            console.log("Api Hardware: ", response.data.Hardware_Count);
            return response.data;
        } else {
            console.error("Estrutura de dados inesperada: ", response.data);
            throw new Error("A resposta da API não contém o campo 'Hardware_Count'.");
        }
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        throw error;
    }
};

const qtdServidores = async () => {
    try {
        const response = await axios.get(baseUrl + 'hosts/get_host_ostype_count');

        if (response.data && 'Linux_Hosts' in response.data && 'Windows_Hosts' in response.data) {
            console.log("Api Servidores - Linux Hosts: ", response.data.Linux_Hosts);
            console.log("Api Servidores - Windows Hosts: ", response.data.Windows_Hosts);
            return response.data;
        } else {
            console.error("Estrutura de dados inesperada: ", response.data);
            throw new Error("A resposta da API não contém os campos 'Linux_Hosts' ou 'Windows_Hosts'.");
        }
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        throw error;
    }
};



export {
    listarHosts, qtdHardware, qtdServidores
}