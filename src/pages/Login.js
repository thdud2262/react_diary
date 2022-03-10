import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

import { Image, Text, Input, Grid, Button } from "../elements";

const Login = (props) => {
  const history = useHistory();

  return(
    <LoginPage>
      <Image shape='mainBG'/>

      <LoginBox>
        <Grid width= '1200px' margin='0 auto' >
          <Text size='32px' font='twaysky' align='center' color='#343a40' margin='50px auto' > PLANT DIARY</Text>
          <Grid width='500px' margin='50px auto'> 
            <Input 
              label='아이디'
              placeholder='아이디는 이메일 형식으로 입력해주세요'
              _onChange={(e)=>{console.log('아이디입력')}}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            >
            </Input>
            <Input 
              label='비밀번호'
              type='password'
              placeholder='비밀번호는 6-12자 이내로 입력해주세요'
              _onChange={(e)=>{console.log('비밀번호입력')}}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            >
            </Input>
            <Button text='로그인' shape='full' margin='20px 0 15px' B_radius='5px' border='1px solid gray'></Button>
            <Text align='center' cursor _onClick={()=>{history.push('/signup')}} >회원이 아니신가요? 회원가입 하기</Text>
          </Grid>
        </Grid>
      </LoginBox>
      
    </LoginPage>
  )
}

const LoginPage = styled.div`
  width : 100%;
  height : 650px;
  margin : 0 auto;
  position : relative;
`;
const LoginBox = styled.div`
  width:100%; 
  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0.5 );
  padding: 20px;
  box-sizing: border-box;
`;
export default Login;