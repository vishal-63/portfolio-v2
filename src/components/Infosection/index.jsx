import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  SkillsContainer,
  Skill,
  Logo,
} from "./InfoElements";
import {
  DiBootstrap,
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiMysql,
  DiPhp,
  DiReact,
  DiJqueryLogo,
} from "react-icons/di";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  lightText,
  darkText,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>
                  Hi! I am Vishal, a Web Developer with over 2+ years of
                  experience in building and designing websites. I love to
                  create and design beatiful and minimal websites that are
                  pleasing to the viewer's eyes.
                  <br />I am most passionate about learning new tools and
                  frameworks every single day.
                  <br />
                  <br />
                  Skills I possess:
                </Subtitle>
                <SkillsContainer>
                  <Skill>
                    <Logo>
                      <DiHtml5 />
                    </Logo>
                    HTML5
                  </Skill>
                  <Skill>
                    <Logo>
                      <DiCss3Full />
                    </Logo>
                    CSS3
                  </Skill>
                  <Skill>
                    <Logo>
                      <DiJavascript1 />
                    </Logo>
                    JavaScript
                  </Skill>
                  <Skill>
                    <Logo>
                      <DiJqueryLogo />
                    </Logo>
                    jQuery
                  </Skill>
                  <Skill>
                    <Logo>
                      <DiPhp />
                    </Logo>
                    PHP
                  </Skill>
                  <Skill>
                    <Logo>
                      <DiMysql />
                    </Logo>
                    MySQL
                  </Skill>
                  <Skill>
                    <Logo>
                      <DiReact />
                    </Logo>
                    React
                  </Skill>
                  <Skill>
                    <Logo>
                      <DiBootstrap />
                    </Logo>
                    Bootstrap
                  </Skill>
                </SkillsContainer>
                {/* <BtnWrap>
                  <Button to="/">{buttonLabel}</Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
