import React, { useState } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import capitalizeFirstLetter from '../../assets/capitalizeFirstLetter';

import { openAddToCollectionModal } from 'store/featured';

import {
  Container,
  StyledSlider,
  CenteringDiv,
  ModalDiv,
  ModalHeader,
  StyledLink,
  AuthorImage,
  ModalMain,
  ImageDiv,
  StyledModalPhoto,
  ModalFooter,
  Likes,
  StyledHeartIcon,
  StyledAddIcon,
  StyledCloseWindowIcon,
} from './PhotoSlider.styles';

const PhotoSlider = props => {
  const [photoIndex, setPhotoIndex] = useState(props.index);

  const handleAfterChange = index => setPhotoIndex(index);

  const sliderSettings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: photoIndex,
  };

  const currentPhoto = props.arrayOfPhotos[photoIndex];
  if (!currentPhoto) return null;

  return (
    <Container>
      <ModalHeader>
        <StyledLink
          to={`/users/${currentPhoto.user.username}`}
          onClick={props.handleCloseClick}
        >
          <AuthorImage
            src={currentPhoto.user.profile_image.medium}
            alt={currentPhoto.user.username}
          />
          <span>{currentPhoto.user.name}</span>
        </StyledLink>
        <div>
          <StyledCloseWindowIcon onClick={props.handleCloseClick} />
        </div>
      </ModalHeader>
      <StyledSlider afterChange={handleAfterChange} {...sliderSettings}>
        {props.arrayOfPhotos.map(item => {
          return (
            <div key={item.id}>
              <CenteringDiv>
                <ModalDiv key={item.id}>
                  <ModalMain>
                    <ImageDiv>
                      <StyledModalPhoto
                        src={item.urls.regular}
                        alt={item.alt_description}
                      />
                    </ImageDiv>
                  </ModalMain>
                </ModalDiv>
              </CenteringDiv>
            </div>
          );
        })}
      </StyledSlider>
      <ModalFooter>
        <Likes>
          <StyledHeartIcon />
          {currentPhoto.likes}
        </Likes>
        <span>
          <i>
            {capitalizeFirstLetter(
              currentPhoto.alt_description ?? `${currentPhoto.user.name} photo.`
            )}
          </i>
        </span>
        <div onClick={() => props.openAddToCollectionModal(currentPhoto)}>
          <StyledAddIcon />
        </div>
      </ModalFooter>
    </Container>
  );
};

const mapStateToProps = state => ({
  featured: state.featured,
});

const mapDispatchToProps = {
  openAddToCollectionModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PhotoSlider));
