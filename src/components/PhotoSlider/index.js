import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import capitalizeFirstLetter from '../../assets/capitalizeFirstLetter';

import { ReactComponent as CloseWindowIcon } from '../../assets/images/close-window-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/heart-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/images/add-icon.svg';

import { openAddToCollectionModal } from '../../store/featured/featuredActions';

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

class PhotoSlider extends React.Component {
  state = {
    currentIndex: this.props.index,
  };

  handleAfterChange = index => {
    this.setState({
      currentIndex: index,
    });
  };

  render() {
    const sliderSettings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.props.index,
    };

    const currentPhoto = this.props.arrayOfPhotos[this.state.currentIndex];

    if (!currentPhoto) return null;

    return (
      <Container>
        <ModalHeader>
          {/*this.props.match.params.username === currentPhoto.user.username ? <div></div> : <StyledLink></StyledLink> */}
          <StyledLink to={`/users/${currentPhoto.user.username}`}>
            <AuthorImage
              src={currentPhoto.user.profile_image.medium}
              alt={currentPhoto.user.username}
            />
            <span>{currentPhoto.user.name}</span>
          </StyledLink>
          <div>
            <CloseWindowIcon onClick={this.props.handleCloseClick} />
          </div>
        </ModalHeader>
        <StyledSlider afterChange={this.handleAfterChange} {...sliderSettings}>
          {this.props.arrayOfPhotos.map(item => {
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
          <span>
            <HeartIcon />
            {currentPhoto.likes}
          </span>
          <span>
            <i>
              {capitalizeFirstLetter(
                currentPhoto.alt_description ??
                  `${currentPhoto.user.name} photo.`
              )}
            </i>
          </span>
          <div
            onClick={() => this.props.openAddToCollectionModal(currentPhoto)}
          >
            <AddIcon />
          </div>
        </ModalFooter>
      </Container>
    );
  }
}

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
