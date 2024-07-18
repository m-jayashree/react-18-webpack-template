import styles from './AboutPage.module.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorText } from '../../selectors/error/ErrorSelector';
import * as ShowsAction from '../../stores/shows/ShowsAction';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AboutPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowsAction.requestError());
  }, [dispatch]);

  const isRequesting = useSelector((state) => selectRequesting(state, [ShowsAction.REQUEST_ERROR]));
  const requestErrorText = useSelector((state) => selectErrorText(state, [ShowsAction.REQUEST_ERROR_FINISHED]));

  return (
    <LoadingIndicator isActive={isRequesting}>
      <h2>About</h2>

      <Container>
        <p>
          This page is only to show how to handle API errors on the page. You will also notice a popup indicator with the actual error text. Below we
          create a custom error message.
        </p>
      </Container>
      {requestErrorText && (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Sorry there was an error requesting this content."</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </LoadingIndicator>
  );
}
