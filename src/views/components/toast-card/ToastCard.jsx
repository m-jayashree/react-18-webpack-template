// import styles from './ToastCard.module.scss';

import React, { useCallback,useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as ToastsAction from '../../../stores/toasts/ToastsAction';
import buttonColorMap from '../../../constants/buttonColorMap';

export default function ToastCard(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const onClickRemoveNotification = useCallback(
    (event, data) => {
      dispatch(ToastsAction.removeById(props.item.id));
      setShow(false)
      console.log(show)
    },
    [dispatch, props.item.id]
  );

  const buttonColor = buttonColorMap[props.item.type];

  return (
   <Modal show={show} onHide={() => setShow(false)}>
   <Modal.Header closeButton>
     <Modal.Title>{props.item.type}</Modal.Title>
   </Modal.Header>
   <Modal.Body>{props.item.message}</Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={() => onClickRemoveNotification}>
       Close
     </Button>
   </Modal.Footer>
 </Modal>
  );
}
