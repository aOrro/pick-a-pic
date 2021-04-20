import React from 'react';
import { Container, StyledPhoto } from './styles';

export const UserPhotos = props => {
  const showData =
    props.userPhotos.length > 0 && props.showPhotos && !props.isLoading;

  return (
    <Container>
      {props.isLoading && <div>Loading photos...</div>}
      {showData &&
        props.userPhotos.map(photo => {
          return (
            <StyledPhoto
              src={photo.urls.small}
              alt={photo.alt_description}
              key={photo.id}
            />
          );
        })}
    </Container>
  );
};
