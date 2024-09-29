// src/components/GraficoCPU.js

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Grafico_CPU_Usage = () => {
    useEffect(() => {
        var chartDom = document.getElementById('cpu-chart');
        var myChart = echarts.init(chartDom);
    
        // Função para gerar os dados simulados
        let data = [];
        let timeData = [];
        let value = Math.random() * 100;
    
        // Simulando dados para 60 segundos (sem atualização)
        for (let i = 0; i < 60; i++) {
          timeData.push(60 - i + 's');  // Exibe 60s até 1s
          value = Math.max(0, Math.min(100, value + (Math.random() - 0.5) * 10)); // Simula valores entre 0 e 100
          data.push(Math.round(value));
        }
    
        // Configuração do gráfico ECharts
        const option = {
          title: {
            text: 'CPU',  // Título do gráfico apenas como "CPU"
            left: 'center',
            textStyle: {
              color: '#fff',
            },
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeData.reverse(),  // Reverter para mostrar na ordem correta (0s até 60s)
            axisLabel: {
              color: '#aaa',
            },
            axisLine: {
              lineStyle: {
                color: '#555',
              },
            },
          },
          yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            axisLabel: {
              color: '#aaa',
              formatter: '{value} %',
            },
            axisLine: {
              lineStyle: {
                color: '#555',
              },
            },
          },
          series: [
            {
              name: 'Uso de CPU',
              type: 'line',
              data: data,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(0, 123, 255, 0.8)' },
                  { offset: 1, color: 'rgba(0, 123, 255, 0.1)' },
                ]),
              },
              lineStyle: {
                color: 'rgba(0, 123, 255, 1)',
                width: 2,
              },
              itemStyle: {
                color: '#007bff',
              },
            },
          ],
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true,
          },
          backgroundColor: '#1e1e1e',
        };
    
        myChart.setOption(option);
      }, []);
    
      return <div id="cpu-chart" style={{ width: '40%', height: '300px' }}></div>;
};

export default Grafico_CPU_Usage;
