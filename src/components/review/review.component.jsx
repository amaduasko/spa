import React, { Component } from "react";
import Slider from "react-slick";
import { reviewInfo } from "../../constants/constants";
import reviewIcon from "../../images/review-icon.png";
import {} from "reactstrap";
import "./review.styles.scss";

class CustomSlide extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div className="carousel-reviewer">
        <img className="" src={props.icon} alt="reviewer icon" />
      </div>
    );
  }
}

export class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    const setting_1 = {
      style: { marginBottom: "1%" },
      asNavFor: this.state.nav2,
      ref: slider => (this.slider1 = slider),
      arrows: false,
      autoplay: true,
      speed: 500
    };
    const setting_2 = {
      dots: false,
      arrows: false,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: this.state.nav1,
      ref: slider => (this.slider2 = slider),
      swipeToSlide: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <div id="review" className="review-container">
        <div className="review-background" />
        <div className="container">
          <Slider {...setting_1}>
            {reviewInfo.map((item, index) => (
              <div key={index}>
                <img
                  className="d-block m-auto"
                  src={reviewIcon}
                  alt="review icon"
                />
                <p className="carousel-review mt-4">{item.review}</p>
                <h5 className="reviewer-name mt-4">{item.name}</h5>
                <p className="reviewer-post">{item.post}</p>
              </div>
            ))}
          </Slider>
          <div className="bottom-Slider-container mt-2">
            <Slider {...setting_2}>
              {reviewInfo.map((item, index) => (
                <CustomSlide key={index} {...item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
