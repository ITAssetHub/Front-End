// src/components/GraficoMemoria.js

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Grafico_Memoria_Usage = () => {
    
  useEffect(() => {
    // Configurando gráfico de Memória
    var chartDom = document.getElementById('memory-chart');
    var myChart = echarts.init(chartDom);

    // Valor total de memória realista (16 GB de RAM)
    const totalMemoriaGB = 16; // 16 GB

    // Simulando uso de memória realista
    let dataMemory = [];
    let timeData = [];
    let value = Math.random() * totalMemoriaGB * 0.5 + totalMemoriaGB * 0.2; // Uso inicial entre 20% e 70%

    for (let i = 0; i < 60; i++) {
      timeData.push(60 - i + 's');  // Exibe 60s até 1s

      // Simula uma oscilação de uso entre 40% e 70% do total de memória
      value = Math.max(
        totalMemoriaGB * 0.4,  // Limite mínimo 40%
        Math.min(totalMemoriaGB * 0.7, value + (Math.random() - 0.5) * totalMemoriaGB * 0.02) // Oscilações de até 2% do total
      );
      
      dataMemory.push(value.toFixed(2)); // Arredonda para duas casas decimais (GB)
    }

    // Opções para o gráfico de Memória
    const option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: 'Memória',
        textStyle: {
          color: '#fff',
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: timeData.reverse(), // Exibe de 60s até 0s
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
        max: totalMemoriaGB, // Limita o valor máximo à quantidade total de memória em GB
        boundaryGap: [0, '100%'],
        name: 'Memória',
        axisLabel: {
          color: '#aaa',
          formatter: '{value} GB',  // Formata os valores como GB
        },
        axisLine: {
          lineStyle: {
            color: '#555',
          },
        },
      },
      series: [
        {
          name: 'Memória',
          type: 'line',
          symbol: 'none',
          data: dataMemory,
          itemStyle: {
            color: 'rgb(255, 158, 68, 0.8)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(255, 158, 68, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(255, 70, 131, 0.1)'
              }
            ])
          }
        }
      ],
      grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true,
      },
      backgroundColor: '#1e1e1e',
    };

    option && myChart.setOption(option);
  }, []);

  return <div id="memory-chart" style={{ width: '40%', height: '300px' }}></div>;
};

export default Grafico_Memoria_Usage;