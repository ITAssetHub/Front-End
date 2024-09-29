import React, { useState, useEffect } from 'react';
import Barra_de_Navegacao from '../components/Navbar';
import Filtro_Hosts from '../components/Filtro_Hosts';
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
                <Filtro_Hosts />
                <Tabela />
            </div>
        </div>
    );
}

const Tabela = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState([]);

    const { data, isLoading, error } = useQuery(
        "query-hosts",
        listarHosts,
        {
            retry: 5,
            refetchInterval: 120000,
            onSuccess: (data) => {
                setCheckboxes(new Array(data.length).fill(false));
            }
        }
    );

    console.log("Dados recebidos da API:", data);

    useEffect(() => {
        if (data) {
            setCheckboxes(new Array(data.length).fill(false));
        }
    }, [data]);

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

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao buscar dados: {error.message}</div>;
    }

    if (!data || !Array.isArray(data)) {
        return <div>No data available</div>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).replace(',', ''); // Remove a vírgula
    };

    const hostDetails = () => {
        window.location.href = '/host-details';
    };

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
                    <th className='label' style={{ display: "flex", justifyContent: "center" }}>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {data.map((host, index) => {
                    // Formatar a data
                    const formattedDate = host.last_report_date ? formatDate(host.last_report_date) : "--";

                    return (
                        <tr key={host.uuid}> {/* Use UUID como key para evitar duplicatas */}
                            <td>
                                <input
                                    type="checkbox"
                                    checked={checkboxes[index] || false}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            </td>
                            <td>{host.hostname}</td> {/* Nome do host */}
                            <td>{host.os_pretty_name || "Desconhecido"}</td> {/* Sistema Operacional */}
                            <td>{host.ambiente || "--"}</td> {/* Ambiente */}
                            <td>{host.hardware || "--"}</td> {/* Hardware */}
                            <td>{formattedDate}</td> {/* Último Relatório */}
                            <td className='descricao'>
                                <span className='texto'>{host.description || "--"}</span>
                                <div className='button-table'>
                                    <Button className='button-tabela' variant="secondary" onClick={hostDetails}>
                                        <FontAwesomeIcon icon={faChevronRight} className='button-icon' />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default Hosts_Virtuais;