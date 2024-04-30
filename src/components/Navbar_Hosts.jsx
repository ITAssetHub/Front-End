import React, { useState } from 'react';
import { Navbar, Container, Form, FormControl, Button, Dropdown, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass, faSortDown } from '@fortawesome/free-solid-svg-icons';
import "../css/navbar_hosts.css";

const Filtro = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary filtro">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex align-items-center search">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" style={{ color: 'gray'}}/>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Dropdown>
                <Dropdown.Toggle className='filter' style={{color: 'gray', backgroundColor: 'white', border: 'none'}}>
                  <FontAwesomeIcon icon={faFilter} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Hostname</Dropdown.Item>
                  <Dropdown.Item>Sistema Operacional</Dropdown.Item>
                  <Dropdown.Item>Ambiente</Dropdown.Item>
                  <Dropdown.Item>Hardware</Dropdown.Item>
                  <Dropdown.Item>Último Relatório</Dropdown.Item>
                  <Dropdown.Item>Descrição</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
            <div className="ms-auto me-2">
              <Button className="me-2" variant="secondary" onClick={handleOpenModal}>Ação</Button>
              <Button className="me-2" variant="secondary">Exportar</Button>
              <Button variant="danger">Registrar Host</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Selecione onde adicionar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="dropdown1" className='dropdown-acao'>
              <Form.Label>Hardware:</Form.Label>
              <div>
                <Form.Control as="select">
                  <option disabled selected value="">Selecione uma opção</option>
                  <option>Hardware Cadastrado</option>
                  <option>Organização Cadastrada</option>
                  <option>Ambiente Cadastrado</option>
                  <option>Site Cadastrado</option>
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group controlId="dropdown2" className='dropdown-acao'>
              <Form.Label>Ambiente:</Form.Label>
              <div>
                <Form.Control as="select">
                  <option disabled selected value="">Selecione uma opção</option>
                  <option>Hardware Cadastrado</option>
                  <option>Organização Cadastrada</option>
                  <option>Ambiente Cadastrado</option>
                  <option>Site Cadastrado</option>
                </Form.Control>
                {/* <span >
                  <FontAwesomeIcon icon={faSortDown} />
                </span> */}
              </div>
            </Form.Group>
            <Form.Group controlId="dropdown3" className='dropdown-acao'>
              <Form.Label>Organização:</Form.Label>
              <div >
                <Form.Control as="select">
                  <option disabled selected value="">Selecione uma opção</option>
                  <option>Hardware Cadastrado</option>
                  <option>Organização Cadastrada</option>
                  <option>Ambiente Cadastrado</option>
                  <option>Site Cadastrado</option>
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group controlId="dropdown4" className='dropdown-acao'>
              <Form.Label>Site:</Form.Label>
              <div>
                <Form.Control as="select">
                  <option disabled selected value="">Selecione uma opção</option>
                  <option>Hardware Cadastrado</option>
                  <option>Organização Cadastrada</option>
                  <option>Ambiente Cadastrado</option>
                  <option>Site Cadastrado</option>
                </Form.Control>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleCloseModal}>Enviar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Filtro;