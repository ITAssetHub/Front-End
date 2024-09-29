import React from 'react';
import Barra_de_Navegacao from '../components/Navbar';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "../css/host_details.css";
import Tabela_Details from '../components/Tabela_Details';
import Grafico_CPU_Usage from '../components/Grafico_CPU_Usage';
import Grafico_Memoria_Usage from '../components/Grafico_Memoria_Usage';

function Host_Details() {

    const title1 = 'Hardware'
    const title2 = 'Usage'

    const data1 = {
        OS: 'Windowns',
        Arquitetura: ' -- ',
        BootTime: ' -- ',
        IPV4: ' -- ',
        CPUs: ' -- ',
        Memory: 'GB'
      };

      const data2 = {
        CPU: 'MHZ',
        Memory: 'MB',
        Storage: 'GB',
        Network: [
          { Upload: 'MB' },
          { Download: 'MB' }
        ]
      };

      const hostVirtuais = () => {
        window.location.href = '/hosts-virtuais';
    };


    return (
        <div>
            <Barra_de_Navegacao />
            <div className='hosts'>

                <div className='top-part'>

                    <Button className='button-tabela' variant="secondary" onClick={hostVirtuais}>
                        <FontAwesomeIcon icon={faChevronLeft} className='button-icon'/>
                    </Button>

                    <h2>rssp7000.ceub.com.br</h2> 
                    <h4>09/09/2024 - Último Relatório</h4>
                </div>

                <div className='middle-part'>

                    <Tabela_Details data={data1}/>

                    <Grafico_CPU_Usage />
                    <Grafico_Memoria_Usage />


                </div>


                <div className="bottom-part">

                    <Tabela_Details data={data2} title={title2} className={'tabela-usage'}/>

                    <div className='desc-div'>

                        <h1>Descrição</h1>
                        <textarea className='descInput'/>

                        <Button variant="danger" className='button-desc'>Salvar</Button>
                    </div>

                </div>

                    <Tabela />
            </div>
        </div>
    );
}

const Tabela = () => {

    // const { data, isLoading, error } = useQuery(
    //     "query-hosts",
    //     listarHosts,
    //     {
    //         retry: 5,
    //         refetchInterval: 120000,
    //         onSuccess: (data) => {
    //             setCheckboxes(new Array(data.length).fill(false));
    //         }
    //     }
    // );

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error fetching data: {error.message}</div>;
    // }

    // if (!data || !Array.isArray(data)) {
    //     return <div>No data available</div>;
    // }

    // const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleString('pt-BR', {
    //         day: '2-digit',
    //         month: '2-digit',
    //         year: 'numeric',
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         second: '2-digit',
    //         hour12: false,
    //     }).replace(',', ''); // Remove a vírgula
    // };

    return (
        <Table striped bordered hover className='tabela'>
            <thead>
                <tr>
                    <th className='label'>Partição</th>
                    <th className='label'>MountPoint</th>
                    <th className='label'>File System</th>
                    <th className='label'>Total</th>
                    <th className='label'>Utilizado</th>
                    <th className='label' style={{display: "flex", justifyContent: "center"}}>Disponível</th>
                </tr>
            </thead>
            <tbody>
            <td>/dev/sda1</td>
            <td>'/''</td>
            <td>XFS</td>
            <td>22 GB</td>
            <td>10.46 GB</td>
            <td className='descricao'>
                 <span className='texto'>11.97 GB</span>
                 <div className='button-table'>
                     <Button className='button-tabela'>
                         <FontAwesomeIcon icon={faChevronRight} className='button-icon'/>
                     </Button>
                 </div>
             </td>
                
            </tbody>
        </Table>
    );
}

export default Host_Details;

// {data.map((host, index) => {
//     // Formatar a data
//     const formattedDate = host[4] ? formatDate(host[4]) : "--";

//     return (
//         <tr key={index}>
//             <td>{host[0]}</td> {/* Nome do host */}
//             <td>{host[1] || "Desconhecido"}</td> {/* Sistema Operacional */}
//             <td>{host[2] || "--"}</td> {/* Ambiente */}
//             <td>{host[3] || "--"}</td> {/* Hardware */}
//             <td>{formattedDate}</td> {/* Último Relatório */}
//             <td className='descricao'>
//                 <span className='texto'>{host[5]}</span>
//                 <div className='button-table'>
//                     <Button className='button-tabela'>
//                         <FontAwesomeIcon icon={faChevronRight} className='button-icon'/>
//                     </Button>
//                 </div>
//             </td>
//         </tr>
//     );
// })}