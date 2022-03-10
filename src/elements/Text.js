import React from "react";
import styled from "styled-components"


const Text = (props) => {
  const {  bold, color, size, margin, children, _onClick, cursor, line_height, font, align } = props
  const styles = {

    bold : bold,
    color : color ,
    size : size,
    line_height : line_height,
    font : font,
    align : align,

    margin : margin,
    cursor: cursor,
  }

  return(
    <React.Fragment>
      <P {...styles} onClick={_onClick}>
        {children}
      </P>
    </React.Fragment>
  )
}

Text.defaultProps = {
  children : null,
  _onClick: () => {},
  bold: false,
  color: "black",
  size: "14px",
  font : 'GowunDodum-Regular',
}

const P = styled.p`
  font-weight: ${(props) => (props.bold? "600" : "400")};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-family: ${(props) => (props.font? props.font : 'GowunDodum-Regular')};
  text-align : ${(props) => props.align};

  margin : ${(props) => props.margin};
  line-height : ${(props) => props.line_height};
  ${(props)=> (props.cursor? `cursor: pointer;`: "")},
`;

export default Text;