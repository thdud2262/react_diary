import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCookie, getCookie, setCookie } from "../shared/Cookie";
import {actionCreators as userActions} from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { apiKey } from "../shared/firebase";

import { history } from "../redux/configureStore";
import styled from "styled-components"

import { Grid, Text } from "../elements";






const Header = (props) => {
  // const history = useHistory();
  const dispatch = useDispatch()
  
  // 로그인유지(1) is_login 체크
  const is_login = useSelector((state)=> state.user)
  console.log(is_login)
  // const [is_login, setIsLogin] = React.useState(false)
  
  // 로그인유지(2) session체크
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false

  // React.useEffect(()=>{
  //   let cookie = getCookie('user_id')
  //   console.log(cookie)
  //   if(cookie){
  //     setIsLogin(true)
  //   }else{
  //     setIsLogin(false)
  //   }
  // })

  if(is_login && is_session){
    return(
      <HeaderBox>
        <SizeBox>
          <LogoBox>
            <Grid is_flex>
              <LogoImg src='/img/plant.PNG'/>
              <LogoText onClick={()=>{history.push('/')}} >  
                <LogoP>PLANT</LogoP>
                <LogoP>DIARY</LogoP>
              </LogoText>
            </Grid>
            <Grid is_flex margin='0 10px' justify_content='flex-end'>
              <Text 
                size='18px' margin='0 10px 0 0' cursor
                _onClick={()=>{history.push('/')}}>
                내정보
              </Text>
              <Text 
                size='18px' cursor  margin='0 10px 0 0'
                _onClick={()=>{history.push('/')}}>
                알람
              </Text>
              <Text 
                size='18px' cursor 
                _onClick={()=>{
                  dispatch(userActions.logOutFB())
                  }}
                >
                로그아웃
              </Text>
            </Grid>
          </LogoBox>
        </SizeBox>
      </HeaderBox>
    )
  }

  return(
      <HeaderBox>
        <SizeBox>
          <LogoBox>
            <Grid is_flex>
              <LogoImg src='/img/plant.PNG'/>
              <LogoText onClick={()=>{history.push('/')}} >  
                <LogoP>PLANT</LogoP>
                <LogoP>DIARY</LogoP>
              </LogoText>
            </Grid>
            <Grid is_flex justify_content='flex-end'>
              <Text 
                size='18px' margin='0 10px 0 0' cursor 
                _onClick={()=>{history.push('/login')}}>
                로그인
              </Text>
              <Text 
                size='18px' cursor 
                _onClick={()=>{history.push('/signup')}}>
                회원가입
              </Text>
            </Grid>
          </LogoBox>
        </SizeBox>
      </HeaderBox>
  )
}

const HeaderBox = styled.div`
  width : 100%;
  height : 60px;
  padding: 10px;
  box-sizing: border-box;
  background: white;
`;
const SizeBox = styled.div`
  width:1200px;
  margin: 0 auto;
`;
const LogoBox = styled.div`
  width : 100%;
  display : flex;
  justify-content: space-between;
  align-items : center;
  font-family: 'GowunDodum-Regular';
`;
const LogoImg = styled.img`
  width : 40px;
  height : 40px;
  margin-right: 5px;
`;
const LogoText = styled.div`
  text-align : center;  
  cursor : pointer;
  font-family: 'twaysky';
`;
const LogoP = styled.p`
  line-height : 20px;
`;
export default Header;