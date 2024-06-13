import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useQuery } from "react-query";
import { listarHosts } from '../api';

function Grafico_Sistemas_Operacionais() {
    const chartRef = useRef(null);

    const { data, isLoading, error } = useQuery(
        "query-hosts",
        listarHosts,
        {
            retry: 5,
            refetchInterval: 120000,
        }
    );

    useEffect(() => {
        if (!data) return; // Retorna se não houver dados ainda

        // Processar os dados para contar os sistemas operacionais
        const sistemasOperacionais = [];
        data.forEach((host) => {
            try {
                const hostInfo = JSON.parse(host[1]);
                const sistemaOperacional = hostInfo.systemInfo.OS_Name;
                const sistemaExistente = sistemasOperacionais.find(item => item.nome_sistema_operacional === sistemaOperacional);
                
                if (sistemaExistente) {
                    sistemaExistente.qtd++;
                } else {
                    sistemasOperacionais.push({ nome_sistema_operacional: sistemaOperacional, qtd: 1 });
                }
            } catch (error) {
                console.error(`Erro ao processar host: ${error.message}`);
            }
        });

        // Configurar e atualizar o gráfico com os novos dados
        const myChart = echarts.init(chartRef.current);
        const option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: true,
                top: '85%',
                orient: 'horizontal',
                bottom: 0,
                left: 'center',
            },
            series: [
                {
                    name: 'Total de Sistemas Operacionais',
                    type: 'pie',
                    radius: ['35%', '65%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    // Usar os dados dinâmicos de sistemasOperacionais
                    data: sistemasOperacionais.map(item => ({
                        value: item.qtd,
                        name: item.nome_sistema_operacional,
                    }))
                }
            ]
        };
        myChart.setOption(option);

        // Limpar o gráfico ao desmontar o componente
        return () => {
            myChart.dispose();
        };

    }, [data]); // Executar o useEffect sempre que 'data' mudar

    return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
}

export default Grafico_Sistemas_Operacionais;