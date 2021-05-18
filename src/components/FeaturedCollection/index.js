import Slider from 'react-slick';

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
    <div onClick={props.handleClick}>
      <h4>{props.title}</h4>
      <Slider {...settings}>
        {props.collectionPhotos.map(item => {
          return <div key={item}>{item}</div>;
        })}
      </Slider>
    </div>
  );
};

export default FeaturedCollection;