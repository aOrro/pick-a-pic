import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Container,
  BlurryDiv,
  OuterDiv,
  OuterSlider,
  CenteringDiv,
  NumberDiv,
  InnerSlider,
} from './styles';

class Stories extends React.Component {
  state = {
    currentInnerSliderIndex: 0,
    currentOuterSliderIndex: 0,
    autoPlayInnerSlider: false,
    autoPlayOuterSlider: false,
  };

  handleInnerSliderAfterChange = index => {
    console.log(index, 'inner');
    this.setState({
      currentInnerSliderIndex: index,
    });
  };

  handleOuterSliderAfterChange = index => {
    console.log(index, 'outer');

    this.setState({
      currentOuterSliderIndex: index,
    });
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentInnerSliderIndex !==
        this.state.currentInnerSliderIndex &&
      this.state.currentInnerSliderIndex === 2
    ) {
      setTimeout(() => {
        this.outerSlider.current.slickNext();
      }, 2000);
    }

    if (
      prevState.currentOuterSliderIndex !== this.state.currentOuterSliderIndex
    ) {
      const currentSliderName = Object.keys(this.sliders).filter(
        (item, index) => index === this.state.currentOuterSliderIndex
      );
      console.log(this.sliders[currentSliderName]);
      this.sliders[currentSliderName].current.slickPlay();
    }
  }

  sliders = this.props.arrayOfCollections.reduce((acc, curr) => {
    return { ...acc, [curr.title]: React.createRef() };
  }, {});
  outerSlider = React.createRef();
  innerSlider = React.createRef();

  render() {
    const outerSliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: this.state.autoPlayOuterSlider,
      autoplaySpeed: 6000,
      pauseOnHover: false,
    };

    const innerSliderSettings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      pauseOnHover: false,
    };

    return (
      <Container>
        <BlurryDiv />
        <OuterDiv>
          <OuterSlider
            {...outerSliderSettings}
            ref={this.outerSlider}
            afterChange={this.handleOuterSliderAfterChange}
          >
            {this.props.arrayOfCollections.map((item, index) => {
              return (
                <CenteringDiv key={item.title}>
                  <div>
                    <h2>{item.title}</h2>
                    <InnerSlider
                      {...innerSliderSettings}
                      ref={this.sliders[item.title]}
                      afterChange={this.handleInnerSliderAfterChange}
                      autoplay={index === this.state.currentOuterSliderIndex}
                    >
                      {item.photos.map(photo => {
                        return <NumberDiv>{photo}</NumberDiv>;
                      })}
                    </InnerSlider>
                  </div>
                </CenteringDiv>
              );
            })}
          </OuterSlider>
        </OuterDiv>
      </Container>
    );
  }
}

export default Stories;
