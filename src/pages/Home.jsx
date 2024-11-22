import React, { useState, useEffect } from 'react';
import Barra_de_Navegacao from '../components/Navbar'
import "../css/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardDrive, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Grafico_Sistemas_Operacionais from '../components/Grafico_Sistemas_Operacionais';
import Grafico_Servidores from '../components/Grafico_Servidores';
import Grafico_Servidores_Ambiente from '../components/Grafico_Servidores_Ambiente';
import { useQuery } from "react-query";
import { listarHosts, qtdHardware } from '../api';
import { qtdLinux, qtdWindows, totalServidoresVirtuais } from '../services/servidoresService';
import CPUsageDashboard from '../components/CPU_Usage_Dashboard';

function Home() {

    const [linux, setLinux] = useState(null);
    const [windows, setWindows] = useState(null);

    useEffect(() => {
        const fetchLinux = async () => {
            const result = await qtdLinux();
            setLinux(result);
        };

        fetchLinux();
    }, []);

    useEffect(() => {
        const fetchWindows = async () => {
            const result = await qtdWindows();
            setWindows(result);
        };

        fetchWindows();
    }, []);

    const { data } = useQuery(
        "query-hosts",
        listarHosts,
        {
            retry: 5,
            refetchInterval: 120000,
        }
    );

    const { data: dataHardware } = useQuery(
        "query-qtd-hardware",
        qtdHardware,
        {
            retry: 5,
            refetchInterval: 120000,
        }
    );

    const lowUsageServers = ['Server3', 'Server6', 'Server9'];
    const attentionServers = ['Server2', 'Server5', 'Server7', 'Server10'];
    const criticalServers = ['Server1', 'Server4', 'Server8'];

    return (
        <div className='home'>
            <Barra_de_Navegacao />

            <div className='servidores'>
                <div className='servidores-windows'>
                    <div className='x'>
                        <p className='valor'>{windows}</p>
                        <img src="./src/assets/windows.png" className='serverIcon'/>
                    </div>
                    <p className='chave'>Windows</p>
                    <p className='texto'>Total de Servidores Windows</p>
                </div>
                <div className='servidores-linux'>
                    <div className='x'>
                        <p className='valor'>{linux}</p>
                        <img src="./src/assets/linux.png" className='serverIcon'/>
                    </div>
                    <p className='chave'>Linux</p>
                    <p className='texto'>Total de Servidores Linux</p>
                </div>
                <div className='total-servidores'>
                    <div className='x'>
                        <p className='valor'>{linux + windows}</p>
                        <FontAwesomeIcon icon={faDesktop} id='icon'/>
                    </div>
                    <p className='chave'>Servidores</p>
                    <p className='texto'>Total de Servidores Virtuais</p>
                </div>
                <div className='servidores-fisicos'>
                    <div className='x'> 
                        <p className='valor'>{dataHardware?.Hardware_Count}</p>
                        <FontAwesomeIcon icon={faHardDrive} id='icon'/>
                    </div>
                    <p className='chave'>Hardwares</p>
                    <p className='texto'>Total de Servidores Físicos</p>
                </div>
            </div>
            <div className='graficos'>
                <div className='grafico-so'>
                    <h4>Total de Sistemas Operacionais</h4>
                    <Grafico_Sistemas_Operacionais />
                </div>
                <div className='grafico-site'>
                    <h4>Total de Servidores por Site</h4>
                    <Grafico_Servidores />
                </div>
                <div className='grafico-ambiente'>
                    <h4>Total de Servidores por Ambiente</h4>
                    <Grafico_Servidores_Ambiente />
                </div>
            </div>

            <div>

                <div style={{justifyContent: 'center', textAlign: 'center'}}>

                    <CPUsageDashboard lowUsageServers={lowUsageServers}
                        attentionServers={attentionServers}
                        criticalServers={criticalServers}
                    />

                    <h6 style={{justifyContent: 'center', textAlign: 'center'}}>Servidores Críticos:</h6>

                    {criticalServers.length > 0 ? (
                        <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                            {criticalServers.map((server, index) => (
                            <a
                                key={index}
                                href={`http://monitoring.local/${server}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#1890ff', textDecoration: 'none', fontSize: '12px' }} // Define o tamanho dos links
                            >
                                {server}
                            </a>
                            ))}
                        </span>
                        ) : (
                        <p style={{ fontSize: '12px' }}>Nenhum servidor crítico no momento.</p>
                    )}
                    
                </div>

            </div>
        </div>
    );
}

export default Home;