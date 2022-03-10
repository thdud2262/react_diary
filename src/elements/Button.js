import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text, _onClick, shape,
    width, height, margin, padding,
    F_size, F_color, F_weight, 
    border, B_radius, bg,  } = props;

  const styles = {
    width : width,
    height : height, 
    margin : margin, 
    padding: padding, 

    F_size: F_size,
    F_color : F_color,
    F_weight : F_weight,

    bg : bg, 
    border : border,
    B_radius : B_radius,

}
  if (shape === 'full'){
    return <FullBtn {...styles} onClick={_onClick} > {text} </FullBtn>
  }
  if (shape === 'half'){
    return <HalfBtn {...styles} onClick={_onClick} > {text} </HalfBtn>
  }

  return ( 
    <Btn {...styles} onClick={_onClick} > {text} </Btn>
  )
};

Button.defaultProps = {
  text : '버튼',
  _onClick: () => {},
}

const Btn = styled.button`  
  width : ${(props) => props.width};  
  height : 45px;
  margin : ${(props) => props.margin};  
  padding : ${(props) => props.padding};  
  box-sizing : border-box;
  
  font-size : ${(props) => props.F_size}; 
  color : ${(props) => props.F_color};  
  font-weight : ${(props) => props.F_weight};  

  border : ${(props) => props.border}; 
  border-radius : ${(props) => props.B_radius}; 
  background : ${(props) => props.bg};  
  cursor : pointer;
`;

const FullBtn = styled.button`
  width : 100%;  
  height : 45px; 
  margin : ${(props) => props.margin};  
  padding : ${(props) => props.padding};  
  box-sizing : border-box;
  border-radius :  ${(props) => props.B_radius}; 
  border :  ${(props) => props.border}; 
  cursor : pointer;
`;  

const HalfBtn = styled.button`
  width : 100%;  
  height : 45px; 
  margin : ${(props) => props.margin};  
  padding : ${(props) => props.padding};  
  box-sizing : border-box;
  cursor : pointer;
`;

export default Button;