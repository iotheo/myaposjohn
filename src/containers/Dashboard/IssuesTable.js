import React, { useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBan } from '@fortawesome/free-solid-svg-icons';


import { useDispatch } from 'react-redux';
import { issueCloseRequested } from '../../actions';

const IssuesTable = ({ results }) => {
  const [showModal, setShowModal] = useState();
  const [selectedIssueToClose, setSelectedIssueToClose] = useState({
    title: '',
    id: '',
  });

  const dispatch = useDispatch();

  function handleCloseAction({ title, number }) {
    setSelectedIssueToClose(prevState => ({
      ...prevState,
      title,
      number,
    }));

    setShowModal(true);
  }

  function handleCloseModal () {
    setShowModal(false);
  }

  function handleCloseIssue (data) {
    handleCloseModal();

    dispatch(issueCloseRequested(data));
  }

  const columns = [{
    dataField: 'title',
    text: 'Title'
    },
    {
      dataField: 'body',
      text: 'Body',
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
      formatter: (_, { title, number }) => {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="cog">
              <FontAwesomeIcon icon={faCog} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCloseAction({ title, number })}>Close Issue</Dropdown.Item>
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
          <Modal.Title>Close Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faBan} size="5x" className="text-danger mb-4" />
          <p>
            You are about to close the issue with title <strong>{selectedIssueToClose.title}.</strong>
            &nbsp;Do you wish to continue?
          </p>
        </Modal.Body>
        <Modal.Footer className="close-issue-modal__footer">
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleCloseIssue(selectedIssueToClose)}>
            Close issue
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
};

export default IssuesTable;
