import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import capitalizeFirstLetter from '../../assets/capitalizeFirstLetter';
import { ReactComponent as CloseWindowIcon } from '../../assets/images/close-window-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/heart-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/images/add-icon.svg';
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
} from './styles';

const PhotoSlider = ({ index, arrayOfPhotos, handleCloseClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {arrayOfPhotos.map(item => {
          return (
            <div key={item.id}>
              <CenteringDiv>
                <ModalDiv key={item.id}>
                  <ModalHeader>
                    <StyledLink to={`/users/${item.user.username}`}>
                      <AuthorImage
                        src={item.user.profile_image.medium}
                        alt={item.user.username}
                      />
                      <span>{item.user.name}</span>
                    </StyledLink>
                    <div>
                      <CloseWindowIcon onClick={handleCloseClick} />
                    </div>
                  </ModalHeader>
                  <ModalMain>
                    <div></div>
                    <ImageDiv>
                      <StyledModalPhoto
                        src={item.urls.regular}
                        alt={item.alt_description}
                      />
                    </ImageDiv>
                    <div></div>
                  </ModalMain>
                  <ModalFooter>
                    <span>
                      <HeartIcon />
                      {item.likes}
                    </span>
                    <span>
                      <i>
                        {capitalizeFirstLetter(
                          item.alt_description ?? `${item.user.name} photo.`
                        )}
                      </i>
                    </span>
                    <div>
                      <AddIcon />
                    </div>
                  </ModalFooter>
                </ModalDiv>
              </CenteringDiv>
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
};

export default PhotoSlider;
