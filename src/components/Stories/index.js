import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReactComponent as CloseWindowIcon } from '../../assets/images/close-window-icon.svg';

import {
  Container,
  BlurryDiv,
  OuterDiv,
  OuterSlider,
  CenteringDiv,
  SliderHeader,
  StyledImg,
  InnerSlider,
} from './styles';

class Stories extends React.Component {
  state = {
    currentInnerSliderIndex: 0,
    currentOuterSliderIndex: 0,
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
      const currentInnerSlider = this.arrayOfRefs.find(
        (item, index) => index === this.state.currentOuterSliderIndex
      );
      console.log(currentInnerSlider);
      currentInnerSlider.current.slickPlay();
    }
  }

  innerSlider0 = React.createRef();
  innerSlider1 = React.createRef();
  innerSlider2 = React.createRef();
  arrayOfRefs = [this.innerSlider0, this.innerSlider1, this.innerSlider2];

  /*   sliders = this.props.arrayOfCollections.reduce((acc, curr) => {
    return { ...acc, [curr.title]: React.createRef() };
  }, {}); */
  outerSlider = React.createRef();
  innerSlider = React.createRef();

  render() {
    const outerSliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      initialSlide: this.props.collectionClicked,
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
                    <SliderHeader>
                      <h2>{item.title}</h2>
                      <CloseWindowIcon onClick={this.props.handleCloseClick} />
                    </SliderHeader>
                    <InnerSlider
                      {...innerSliderSettings}
                      ref={this.arrayOfRefs.find((item, i) => i === index)}
                      afterChange={this.handleInnerSliderAfterChange}
                      autoplay={index === this.state.currentOuterSliderIndex}
                    >
                      {item.photos.map(item => {
                        return (
                          <StyledImg
                            src={item.urls.regular}
                            alt={item.alt_description}
                            key={item.id}
                          />
                        );
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
