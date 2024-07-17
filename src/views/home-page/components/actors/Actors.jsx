import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import * as ShowsAction from '../../../../stores/shows/ShowsAction';
import ActorCard from './components/actor-card/ActorCard';
 
export default function Actors(props) {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(ShowsAction.requestCast());
  }, [dispatch]);
 
  const actors = useSelector((state) => state.shows.actors);
 
  return (
    <ListGroup>
      {actors.map((model) => (
        <ActorCard key={model.person.name} cardData={model} />
      ))}
    </ListGroup>
  );
}