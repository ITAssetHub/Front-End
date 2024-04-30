import React, { useState } from 'react';
import Barra_de_Navegacao from '../components/Navbar';
import Filtro from '../components/Navbar_Hosts';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../css/hosts_virtuais.css";

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
                {[1, 2, 3, 4, 5].map((row, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="checkbox"
                                checked={checkboxes[index]}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </td>
                        <td>Hostname {row}</td>
                        <td>Sistema Operacional {row}</td>
                        <td>Ambiente {row}</td>
                        <td>Hardware {row}</td>
                        <td>Último Relatório {row}</td>
                        <td className='descricao'>
                            <span className='texto'>Descrição {row}</span>
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
