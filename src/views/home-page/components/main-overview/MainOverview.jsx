import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as ShowsAction from '../../../../stores/shows/ShowsAction';

export default function MainOverview(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowsAction.requestShow());
  }, [dispatch]);

  const show = useSelector((state) => state.shows.show);

  if (!show) {
    return null;
  }

  const image = show?.image?.medium ?? '';
  const network = show?.network?.name ?? '';

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{show.name}</Card.Title>
        <Card.Text>{network}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
