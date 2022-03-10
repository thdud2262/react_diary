import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"


import { Grid, Image, Text, } from "../elements";




const Post = (props) => {
  return(
    <PostCard >
      <Grid is_flex align_items='center' padding='10px' >
        <Grid is_flex align_items='center'>
          <Image shape='circle' size='36'></Image>
          <div>아이디</div>
        </Grid>
        <Grid is_flex justify_content='flex-end'>
          <p>날짜</p>
        </Grid>
      </Grid>

      <Grid width='100%' height='200px'>
        <Image shape='post' width='100%' height='100%'/>
      </Grid>

      <Grid padding='10px'>
        <Text bold size='18px' margin='10px 0 20px'>타이틀</Text>
        <Text line_height='22px'>오늘에 밀착하며 복잡한 자아에 몰두하지 않으며 나의 의무들에 묵묵히 충실하며 그저 살아내는 강인함을 지니고 싶다</Text>
      </Grid>
    </PostCard>
  )
}

const PostCard = styled.div`
  border : 1px solid gray;
  border-radius: 10px;
  width : 300px;
  height: 450px;
  margin-bottom: 30px;
  box-sizing: border-box;
`;
export default Post;