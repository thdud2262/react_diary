import React from "react";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import { useHistory } from "react-router-dom";

import styled from "styled-components"
import { Image, Text, Input, Grid, Button } from "../elements";





const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwdCheck, setPwdCheck] = React.useState('');
  const [nickname, setNickname] = React.useState('');

  const goSignup =()=>{
    if(id===""){
      window.alert('아이디를 확인해주세요')
      return
    }
    const ExpUserpw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{6,12}$/;
    if(pwd!==pwdCheck || !ExpUserpw.test(pwd)){
      window.alert('비밀번호를 다시 한번 확인해주세요')
      return
    }
    console.log(id, pwd, pwdCheck, nickname)
    dispatch(userActions.signupFB(id,pwd,nickname))
  }
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
              _onChange={(e)=>{
                // console.log('아이디입력')
                setId(e.target.value)
              }}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            />
            <Input 
              label='닉네임'
              placeholder='닉네임을 입력해주세요'
              _onChange={(e)=>{
                // console.log('닉네임 입력')
                setNickname(e.target.value)
              }}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            />
            <Input 
              label='비밀번호'
              type='password'
              placeholder='비밀번호는 6-12자 사이로 입력해주세요'
              _onChange={(e)=>{
                // console.log('비밀번호입력')
                setPwd(e.target.value)
              }}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            />
            <Input 
              label='비밀번호 확인'
              type='password'
              placeholder='비밀번호를 한번 더 입력해주세요'
              _onChange={(e)=>{
                // console.log('비밀번호입력')
                setPwdCheck(e.target.value)
              }}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            />
            <Button 
              text='회원가입' shape='full' 
              margin='20px 0 15px' B_radius='5px' border='1px solid gray'
              _onClick = {goSignup}
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