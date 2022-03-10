import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

import { Grid, Text } from "../elements";





const Header = (props) => {
  const history = useHistory();

  return(
    <React.Fragment >
      <HeaderBox>
        <LogoBox>
          <Grid is_flex>
            <LogoImg src='/img/plant.PNG'/>
            <LogoText onClick={()=>{history.push('/')}} >  
              <LogoP>PLANT</LogoP>
              <LogoP>DIARY</LogoP>
            </LogoText>
          </Grid>
          <Grid is_flex justify_content='flex-end'>
            <Text size='18px' margin='0 10px 0 0' cursor _onClick={()=>{history.push('/login')}}>로그인</Text>
            <Text size='18px' cursor _onClick={()=>{history.push('/signup')}}>회원가입</Text>
          </Grid>
        </LogoBox>
      </HeaderBox>
    </React.Fragment>
    
  )
}

const HeaderBox = styled.div`
  width : 100%;
  height : 60px;
  padding: 10px;
  box-sizing: border-box;
  background: white;
`;
const LogoBox = styled.div`
  width : 1200px;
  margin: 0 auto;
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