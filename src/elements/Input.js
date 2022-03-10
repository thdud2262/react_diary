import React from "react";
import styled from "styled-components";
import { Text, Grid } from './index';

const Input = (props) => {
  const {
    label, type, placeholder, _onChange, 
    width, height, margin, border, B_radius } = props;
  
    const styles = {
    width : width,
    heigth : height,
    margin : margin,
    border : border,
    B_radius :B_radius, 
}

  return (
    <React.Fragment>
      <Text margin = '0 0 7px 2px' bold>{label}</Text>
      <InBox 
        type={type} placeholder={placeholder} onChange={_onChange} 
        {...styles}
      />
    </React.Fragment>
  )
};

Input.defaultProps = {
  label : '텍스트',
  type: 'text',
  placeholder : '텍스트를 입력해주세요',
  _onChange: () => {},
  margin: false,
  width : '100%',
}

const InBox = styled.input `
  margin : ${(props) => props.margin};
  width :  ${(props) => props.width};
  height : 50px;
  border : ${(props) => props.border};
  border-radius : ${(props) => props.B_radius};
  padding-left : 15px;
  box-sizing : border-box;
  `;

export default Input;