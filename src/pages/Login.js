import React from "react";
import {actionCreators as userActions} from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

import { Image, Text, Input, Grid, Button } from "../elements";
import { setCookie, getCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const goLogin=()=>{
    
    // console.log(id, pwd)
    // setCookie("user_id", id, 1)
    // setCookie("user_pwd", pwd, 1)
    if (id === ""){
      window.alert('아이디를 입력해주세요')
      return
    }
    if (pwd ===""){
      window.alert('비밀번호를 입력해주세요')
      return
    }
    console.log('로그인시작')
    dispatch(userActions.loginFB(id, pwd));
    console.log('로그인 완료')
    // history.push('/')
    // 컴포넌트 아닌 리듀서에서 history사용!
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
                setId(e.target.value) 
                // console.log(e.target.value)
              }}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            >
            </Input>
            <Input 
              label='비밀번호'
              type='password'
              placeholder='비밀번호는 6-12자 이내로 입력해주세요'
              _onChange={(e)=>{ 
                setPwd(e.target.value) 
                // console.log(e.target.value)
              }}
              margin='0 0 25px' B_radius='5px' border='1px solid gray'
            >
            </Input>
            <Button
              _onClick = {goLogin}
              text='로그인' shape='full' 
              margin='20px 0 15px' B_radius='5px' border='1px solid gray'
            >
            </Button>
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