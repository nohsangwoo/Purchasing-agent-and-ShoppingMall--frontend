import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  color: ${(props) => props.theme.lightGreyColor};
  padding-top: 40px;
  padding-bottom: 80px;
  text-align: center;
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.lightGreyColor};
`;

const Pstyled = styled.p``;

const BRstyled = styled.br``;

const AStyled = styled.a``;

const ContentStyled = styled.div`
  font-size: 10px;
`;

export default () => (
  <FooterBox>
    <ContentStyled textAlign="centered">
      <Pstyled>
        company FAIRYFLOSS by owner SANGWOO NOH
        <BRstyled />
        business license 223-75-00218
        <BRstyled />
        mail-order license 2019-nowon-0230
        <BRstyled /> address : 97, hangeulbiseok-ro 24 ba-gil, nowon rok
        <BRstyled />
        line @ffss e-mail
        <AStyled href="mailto:fairyfloss0909@gmail.com">
          fairyfloss0909@gmail.com
        </AStyled>
        <BRstyled />
        <Copyright>Fairyfloss {new Date().getFullYear()} &copy;</Copyright>
      </Pstyled>
    </ContentStyled>
  </FooterBox>
);
