import { ReactComponent as BinIcon } from '../../assets/images/bin-icon.svg';

import { Container, HeaderDiv, StyledSlider, StyledImg } from './styles';

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
    <Container onClick={props.handleClick}>
      <HeaderDiv>
        <h4>{props.title}</h4>
        <BinIcon />
      </HeaderDiv>
      <StyledSlider {...settings}>
        {props.collectionPhotos.map(item => {
          return (
            <StyledImg
              src={item.urls.small}
              alt={item.alt_description}
              key={item}
            />
          );
        })}
      </StyledSlider>
    </Container>
  );
};

export default FeaturedCollection;
