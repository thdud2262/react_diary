import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

import { Image, Text, Input, Grid, Button } from "../elements";





const Signup = (props) => {
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
            />
            <Input 
              label='닉네임'
              placeholder='닉네임을 입력해주세요'
              _onChange={(e)=>{console.log('닉네임 입력')}}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            />
            <Input 
              label='비밀번호'
              type='password'
              placeholder='비밀번호는 6-12자 사이로 입력해주세요'
              _onChange={(e)=>{console.log('비밀번호입력')}}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            />
            <Input 
              label='비밀번호 확인'
              type='password'
              placeholder='비밀번호를 한번 더 입력해주세요'
              _onChange={(e)=>{console.log('비밀번호입력')}}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            />
            <Button 
              text='회원가입' shape='full' 
              margin='20px 0 15px' B_radius='5px' border='1px solid gray'
            />
            <Text 
              align='center' cursor 
              _onClick={()=>{history.push('/login')}} >
              회원이신가요? 로그인 하러가기
            </Text>
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
export default Signup;