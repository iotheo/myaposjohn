import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { useDispatch } from 'react-redux';

const IssuesTable = ({ results }) => {
  const [showModal, setShowModal] = useState();
  const [selectedIssueToClose, setSelectedIssueToClose] = useState('');

  const dispatch = useDispatch();

  function handleCloseAction({ title, id }) {
    setSelectedIssueToClose(title);
    setShowModal(true);
  }

  function handleCloseModal () {
    setShowModal(false);
  }

  function handleCloseAction ({ title, id }) {

  }

  const columns = [{
    dataField: 'title',
    text: 'Title'
    },
    {
      dataField: 'body',
      text: 'Body',
      filter: textFilter(),
    },
    {
      dataField: 'state',
      text: 'State'
    },
    {
      dataField: 'labels',
      text: 'Labels',
      formatter: cell => {
      return <>{cell.map((label, idx) => <div key={idx}>{label && label.name}</div>)}</>
    },
    },
    {
      dataField: 'assignee',
      text: 'Assignee',
    },
    {
      dataField: 'id',
      text: 'Actions',
      formatter: (cell, { title, id }, rowIndex, formatExtraData) => {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="cog">
              <FontAwesomeIcon icon={faCog} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCloseAction({ title, id })}>Close Issue</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )
      }
    },
  ];

  return (
    <>
      <BootstrapTable
          filter={filterFactory({
            delay: 200,
          })}
          striped
          hover
          keyField="id"
          data={results}
          classes="issues-table"
          columns={columns} />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>You are about to close this issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to close this issue with title <em></em></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
};

export default IssuesTable;
