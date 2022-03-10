import React, { children } from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {is_flex, width, height, margin, padding, bg, children, justify_content, align_items, border} = props;
  const styles = {
    is_flex : is_flex,
    justify_content : justify_content,
    align_items: align_items,

    width : width,
    height : height, 
    margin: margin,
    padding: padding,
    
    bg : bg,
    border : border
  }
  return ( 
    <React.Fragment>
      <GridBox {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  )
}

Grid.defaultProps = {
  children: null,
  is_flex : false,
  width : "100%",
  padding: false,
  margin : false,
  bg : false,
  border: false,
}

const GridBox = styled.div`
  width : ${(props)=> props.width};
  height : ${(props)=> props.height};
  box-sizing : border-box;
  ${(props)=> (props.padding? `padding: ${props.padding};`: "")} 
  ${(props)=> (props.margin? `margin: ${props.margin};`: "")} 
  ${(props)=> (props.bg? `background-color: ${props.bg};`: "")} 
  ${(props)=> (props.is_flex? `display: flex;`: "")} 
  justify-content : ${(props)=> props.justify_content};
  align-items : ${(props)=> props.align_items};
  border : ${(props)=> props.border};

`;


export default Grid