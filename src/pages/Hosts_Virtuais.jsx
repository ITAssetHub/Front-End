import React, { useState } from 'react';
import Barra_de_Navegacao from '../components/Navbar';
import Filtro from '../components/Navbar_Hosts';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../css/hosts_virtuais.css";
import { useQuery } from 'react-query';
import { listarHosts } from '../api';

function Hosts_Virtuais() {

    return (
        <div>
            <Barra_de_Navegacao />
            <div className='hosts'>
                <h1>Hosts</h1>
                <Filtro />
                <Tabela />
            </div>
        </div>
    );
}

const Tabela = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState([false, false, false, false, false, false]);

    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setCheckboxes(newCheckboxes);
    };

    const handleSelectAllChange = () => {
        const newCheckboxes = checkboxes.map(() => !selectAll);
        setCheckboxes(newCheckboxes);
        setSelectAll(!selectAll);
    };

    const {data, isLoading, error} = useQuery(
        "query-hosts",
        listarHosts,
        {
            retry: 5,
            refetchInterval: 120000,
        }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    console.log(data);

    if (!data || !Array.isArray(data)) {
        return <div>No data available</div>;
    }

    return (
        <Table striped bordered hover className='tabela'>
            <thead>
                <tr>
                    <th className='label'>
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAllChange}
                        />
                    </th>
                    <th className='label'>Hostname</th>
                    <th className='label'>Sistema Operacional</th>
                    <th className='label'>Ambiente</th>
                    <th className='label'>Hardware</th>
                    <th className='label'>Último Relatório</th>
                    <th className='label'>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {data.map((host, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="checkbox"
                                checked={checkboxes[index] || false}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </td>
                        <td>{host[0]}</td> {/* Nome do host */}
                        <td>{JSON.parse(host[1]).systemInfo.OS_Name}</td> {/* Sistema Operacional */}
                        <td>--</td>
                        <td>--</td>
                        <td>{JSON.parse(host[1]).date.day}/{JSON.parse(host[1]).date.month}/{JSON.parse(host[1]).date.year} {JSON.parse(host[1]).date.hour}:{JSON.parse(host[1]).date.minutes}:{JSON.parse(host[1]).date.seconds}</td>

                        <td className='descricao'>
                            <span className='texto'>Descrição {index + 1}</span>
                            <div className='button-table'>
                                <Button className='button-tabela'>
                                    <FontAwesomeIcon icon={faChevronRight} className='button-icon'/>
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Hosts_Virtuais;
