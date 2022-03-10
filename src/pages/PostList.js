import React from "react";
import styled from "styled-components"

import { Post } from "../components";
import Grid from "../elements/Grid";



const PostList = (props) => {
  return(
    <PostBox >
      <Post/>
      <Post/>
      <Post/>
    </PostBox>
  )
}

const PostBox = styled.div`
  width : 1000px;
  margin : 30px auto;
  display : flex;
  justify-content: space-around;
  flex-wrap : wrap;
}

  
`;
export default PostList;