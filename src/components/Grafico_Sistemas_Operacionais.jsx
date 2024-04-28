import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function Grafico_Sistemas_Operacionais() {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        const option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: true,
                top: '85%',
                orient: 'horizontal', // Orientação da legenda
                bottom: 0, // Posição da legenda
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
                    data: [
                        { value: 1550, name: 'Red Hat Enterprise Linux 9' },
                        { value: 3750, name: 'Red Hat Enterprise Linux 8' },
                        { value: 2200, name: 'Oracle Linux 8' },
                        { value: 2500, name: 'Windows Server 2022' }
                    ]
                }
            ]
        };
        myChart.setOption(option);

        // Limpar o gráfico ao desmontar o componente
        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
}

export default Grafico_Sistemas_Operacionais;
