import React from 'react';
import styled from 'styled-components';
import SliderPhoto from './SliderPhoto.jsx';

//NEED TO MAP THROUGH PHOTOS

export default class MiniSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    //
  }
  componentDidMount() {
    const slider = document.querySelector('.slider');
    const cards = Array.from(slider.children);
    console.log(cards)
  }

  render() {
    return (
    <div className="slider" style={{
      display: 'flex',
      width: '300px',
      height: '90px',
      display: 'flex',
      overflowX: 'hidden',
      margin: '20px 10px 10px 0px',
      border: '1px solid white'

  }}>
    {this.props.list.map((photo, index) => <SliderPhoto photo={photo} key={index} list={this.props.list} homepagePhotos={this.props.homepagePhotos} currentPhoto={this.props.currentPhoto}/> )}
</div>
    )
  }
}



