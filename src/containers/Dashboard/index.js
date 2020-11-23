import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import { hasLogged, renderIssuesSpinner } from '../../actions';

import IssuesTable from './IssuesTable';

import './Dashboard.css';

const Dashboard = () => {
  const isLoading = useSelector(state => state.issues.isLoading);
  const shouldRenderSpinner = useSelector(state => state.issues.shouldRenderSpinner);
  const results = useSelector(state => state.issues.results);

  const dispatch = useDispatch();

  // hack to prevent submission errors
  useEffect(() => {
    dispatch(hasLogged());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(renderIssuesSpinner())
    }, 800);

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (!isLoading && results?.length) {
    return (
      <>
        <IssuesTable results={results} />
      </>
    )
  }

  if (isLoading && shouldRenderSpinner) {
    return (
      <div className="loading-spinner">
        <div className="mb-4 loading-spinner__message">Loading issues..</div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return null;
};

export default Dashboard;
