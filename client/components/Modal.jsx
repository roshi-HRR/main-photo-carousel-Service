import React from "react";
import styled from 'styled-components';
import { X } from 'react-feather';
import faker from 'faker';
import MainCarousel from './MainCarousel.jsx';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    };

    onClose(e) { 
      if (this.props.onClose) {
        this.props.onClose(e);
      }
      };

    render() {
        if(!this.props.showPhotoModal) {
            return null;
        };
        return (
            <Container>
              <div>{this.props.children}</div>
                <Contents>
                    <Ax>
                        <X onClick={e => this.onClose(e)} size={30}/>
                    </Ax>
                    <Google><img src={this.props.photoOne}/></Google>
                    <MainCarousel></MainCarousel>
                    <Description>3/30     
                    ${faker.lorem.paragraph()}Photo Verified by Airbnb
                    </Description>
                </Contents>
            </Container>
          );
    }
  }

  
 const Carousel = styled.div`
    
  `;



  const Container = styled.div`
    position: fixed;
    width: 1400px;
    height: 700px;
    top: 1;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    align-items: center;
    backface-visibility: hidden;
    background: white;
    border: 1px solid #ccc;
    -webkit-box-shadow: -1px 1px 5000px 900px rgba(0,0,0,0.75);
    /* -moz-box-shadow: -1px 1px 5px 9px rgba(0,0,0,0.75); */
    /* box-shadow: -1px 1px 5px 9px rgba(0,0,0,0.75); */
  `;

  const Contents = styled.div`
    display: flex;
    flex-direction: column;
  `;

  

  const Ax = styled.span`
    display: inline-block;
    margin-top: 25px;
    margin-left: 30px;
    cursor: pointer;
    width: 30px;
  `

  const Description = styled.div`
    width: 420px;
    height: 200px;
    cursor: pointer !important;
    transition-property: background, border-color, color !important;
    transition-duration: 0.2s !important;
    transition-timing-function: ease-out !important;
    position: relative !important;
    display: inline-block !important;
    text-align: left !important;    
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: normal !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    font-weight: 800 !important;
    padding-left: 22px !important;
    padding-right: 22px !important;
    color: black !important;
    text-decoration: none !important;
    border-radius: 4px !important;
    border-width: 2px !important;
    border-style: solid !important;
    background: white !important;
    border-color: transparent !important;
    margin:400px 10px 10px 0px;
    
  `;

  const Google = styled.div`
    width: 420px;
    height: 23px;
    cursor: pointer !important;
    transition-property: background, border-color, color !important;
    transition-duration: 0.2s !important;
    transition-timing-function: ease-out !important;
    position: relative !important;
    display: inline-block !important;
    text-align: center !important;
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: normal !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    font-weight: 800 !important;
    padding-left: 22px !important;
    padding-right: 22px !important;
    color: rgb(72, 72, 72) !important;
    text-decoration: none !important;
    
    background: rgb(255, 255, 255) !important;
    border-color: rgb(118, 118, 118) !important;
    margin: 10px auto 0 auto;
  `;

    