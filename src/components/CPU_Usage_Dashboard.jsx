import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

// Componente reutilizável
const CPUUsageChart = ({ lowUsageServers, attentionServers, criticalServers }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Inicializa o gráfico ECharts
    const myChart = echarts.init(chartRef.current);

    // Dados para o gráfico
    const dataAxis = ['Sem Risco', 'Atenção', 'Crítico'];
    const data = [lowUsageServers.length, attentionServers.length, criticalServers.length];
    const barColors = ['#52c41a', '#faad14', '#ff4d4f']; // Cores para as categorias

    // Opções do gráfico
    const option = {
      title: {
        text: 'Monitoramento de Uso de CPU',
        subtext: 'Quantidade de servidores por estado',
        left: 'center',
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          color: '#333',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#aaa',
          },
        },
      },
      yAxis: {
        max: Math.max(...data) + 2, // Ajusta o eixo Y para acomodar os valores
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#999',
        },
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: (params) => barColors[params.dataIndex],
          },
          data: data,
        },
      ],
    };

    // Renderiza o gráfico
    myChart.setOption(option);

    // Limpeza ao desmontar o componente
    return () => {
      myChart.dispose();
    };
  }, [lowUsageServers, attentionServers, criticalServers]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
      }}
    >
      <div
        ref={chartRef}
        style={{
          width: '400px',
          height: '400px', // Define o tamanho do gráfico
        }}
      ></div>
      <div
        style={{
          width: '400px', // Mesma largura que o gráfico
          textAlign: 'center', // Centraliza o texto
          fontSize: '15px', // Deixa o texto menor
        }}
      >
      </div>
    </div>
  );
};

export default CPUUsageChart;
