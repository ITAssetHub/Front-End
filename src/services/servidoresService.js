export function qtdLinux(dados) {

    if (!dados) return 0;

    let qtdLinux = 0;

    dados.forEach((host) => {
        try {
            const hostInfo = JSON.parse(host[1]);
            const sistemaOperacional = hostInfo.systemInfo.OS_Type;
            
            if (sistemaOperacional === "Linux") {
                qtdLinux++;
            }
        } catch (error) {
            console.error(`Erro ao processar host: ${error.message}`);
            // Trate o erro conforme necessário
        }
    });

    return qtdLinux;
}

export function qtdWindows(dados) {

    if (!dados) return 0;

    let qtdWindows = 0;

    dados.forEach((host) => {
        try {
            const hostInfo = JSON.parse(host[1]);
            const sistemaOperacional = hostInfo.systemInfo.OS_Type;
            
            if (sistemaOperacional === "Windows") {
                qtdWindows++;
            }
        } catch (error) {
            console.error(`Erro ao processar host: ${error.message}`);
            // Trate o erro conforme necessário
        }
    });

    return qtdWindows;
}

export function totalServidoresVirtuais(dados) {

    let total = qtdWindows(dados) + qtdLinux(dados);

    return total;
}