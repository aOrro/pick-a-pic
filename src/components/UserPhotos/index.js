import React from 'react';
import { Photo } from '../Photo';

export const UserPhotos = props => {
  return (
    <div>
      <h2 onClick={props.handleClick}>Photos</h2>
      {props.userPhotos.map(photo => {
        return (
          <Photo
            src={photo.urls.small}
            alt={photo.alt_description}
            key={photo.id}
          />
        );
      })}
    </div>
  );
};
