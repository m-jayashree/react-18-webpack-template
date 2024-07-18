import styles from './HomePage.module.scss';

import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import * as ShowsAction from '../../stores/shows/ShowsAction';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage(props) {
  const isRequesting = useSelector((state) => selectRequesting(state, [ShowsAction.REQUEST_SHOW, ShowsAction.REQUEST_CAST]));

  return (
    <div className={styles.wrapper}>
      <LoadingIndicator isActive={isRequesting}>
        QR code reader component test
        <Container>
          <Row>
            <Col md={4}>
              {' '}
              <div></div>
            </Col>
          </Row>
        </Container>
      </LoadingIndicator>
    </div>
  );
}
