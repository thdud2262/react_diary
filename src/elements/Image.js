import React from "react";
import styled from "styled-components"


const Image = (props) => {
  const {shape, src, size, width, height} = props;
  const styles = {
    src: src,
    size: size,
    width: width,
    height: height,
}

  if (shape==='circle'){
    return <CircleImg {...styles}></CircleImg>
  }
  
  if (shape==='post'){
    return <PostImg {...styles}></PostImg>
  }

  if (shape==='mainBG'){
    return <MainInner {...styles}></MainInner>
  }

  return(
    <React.Fragment>

    </React.Fragment>
  )
}

Image.defaultProps = {
  shape: null,
  src: "https://64.media.tumblr.com/5e714e960546f510d2b8aa5547a2f307/ae970ff79148e082-5c/s1280x1920/ec309af12b3d2af2b8804bec90df94cb7fbd576d.jpg",
  size: false,
  width : null,
  height: null,
};

const CircleImg = styled.div`
  --size : ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  
  background-image: url("${(props)=> props.src}");
  background-size : cover;
  margin-right : 5px;  
`;

const PostImg = styled.div`
  width: ${(props) => props.width};
  height : ${(props)=> props.height};
  background-image: url("${(props)=> props.src}");
  background-size : cover;
`;

const MainInner = styled.div`
  width: 100%;
  height : 100%;
  background-image: url('/img/loginBg.jpg');
  background-size : cover;
  background-position : center;
  background-color: rgba( 255, 255, 255, 0.5 );
  margin: 0 auto;
  position: absolute;
  z-index: -1;
`;


export default Image;