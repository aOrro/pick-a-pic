import React from 'react';
import { Photo } from '../Photo';
import { Container } from './styles';

export const UserPhotos = props => {
  const showData = props.userPhotos && props.showPhotos;

  return (
    <Container>
      {showData &&
        props.userPhotos.map(photo => {
          return (
            <Photo
              src={photo.urls.small}
              alt={photo.alt_description}
              key={photo.id}
            />
          );
        })}
    </Container>
  );
};
