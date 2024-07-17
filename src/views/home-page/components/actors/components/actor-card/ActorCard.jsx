import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
export default function ActorCard(props) {
  const { cardData } = props;
  const image = cardData?.character?.image?.original;
  const missingImage = 'https://react.semantic-ui.com/images/wireframe/image.png';
console.log(cardData)
  return (
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={cardData.person.name}>
      <div className="ms-2 me-auto">
        <Image src={image ?? missingImage} roundedCircle  />
        <div className="fw-bold">{cardData.person.name}</div>
        {cardData.character.name}
      </div>

    </ListGroup.Item>

  );
}
