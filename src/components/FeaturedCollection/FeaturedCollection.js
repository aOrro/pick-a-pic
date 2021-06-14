import {
  Container,
  HeaderDiv,
  StyledBinIcon,
  StyledSlider,
  StyledImg,
} from './FeaturedCollection.styles';

const FeaturedCollection = props => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <Container>
      <HeaderDiv>
        <h4 onClick={props.handleClick}>{props.title}</h4>
        <StyledBinIcon /* onClick={props.deleteCollection} */ />
      </HeaderDiv>
      {props.collectionPhotos.length > 0 && (
        <StyledSlider {...settings} onClick={props.handleClick}>
          {props.collectionPhotos.map(item => {
            return (
              <StyledImg
                src={item.urls.small}
                alt={item.alt_description}
                key={item.id}
              />
            );
          })}
        </StyledSlider>
      )}
    </Container>
  );
};

export default FeaturedCollection;
