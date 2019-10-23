import React from "react";
import styled from 'styled-components';
import { X } from 'react-feather';
import faker from 'faker';
// import MainCarousel from './MainCarousel.jsx';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          currentPhoto: this.props.currentPhotoIndex
        }
        this.increaseCur = this.increaseCur.bind(this);
        this.decreaseCur = this.decreaseCur.bind(this);
    };
    increaseCur() {
      if (this.state.currentPhoto < this.props.list.length){
        this.setState({
          currentPhoto: this.state.currentPhoto + 1
        })
      }
    }

    decreaseCur() {
      if (this.state.currentPhoto > 0){
        this.setState({
          currentPhoto: this.state.currentPhoto - 1
        })
      }
    }

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
                    <div className="container" style={{
                      margin: 'auto', 
                      height: '200px',
                      width: '200px',
                      maxHeight: '200px', 
                      maxWidth: '200px'
                    }}>
                    <i className="fas fa-chevron-right" onClick={this.increaseCur} style={{
                      float:'right'
                    }}></i>
                    <Image><img src={this.props.list[this.state.currentPhoto].photoUrl}/></Image>
                    <i className="fas fa-chevron-left" onClick={this.decreaseCur} style={{
                      float: 'left'
                    }}></i>
                    </div>
                   
                    <Description>{`${this.state.currentPhoto + 1}/${this.props.list.length}`} {this.props.list[this.state.currentPhoto].description}Photo Verified by Airbnb
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
    background: white;
    border: 1px solid #ccc;
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
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;
    padding-left: 20px;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
    color: black;
    margin:0px 10px 10px 30px;
    
  `;

  const Image = styled.div`
    width: 420px;
    height: 200px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-block;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 22px;
    padding-right: 22px;
    background: rgb(255, 255, 255);
    margin: 10px auto 0 auto;
  `;

    