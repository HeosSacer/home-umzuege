import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import ZocialIcon from "react-native-vector-icons/dist/Zocial";

function Main(props) {
  return (
    <Container>
      <ScrollArea>
        <Image1>
          <Group>
            <Werbunb1>
              <HomeUmzuge>HOME Umzüge</HomeUmzuge>
              <LoremIpsum>
                GÜNSTIGE UMZÜGE MÜNCHEN, UMGEBUNG UND BUNDESWEIT
              </LoremIpsum>
              <LoremIpsum2>
                HOME-Umzüge ist ihr Partner für private und gewerbliche Umzüge.
                {"\n"}
                {"\n"}Spezialist für professionelle und günstige Umzüge. Unsere
                Umzugshelfer sind für Ihren reibungslosen Umzug da.{"\n"}Unser
                erfahrenes Umzugsunternehmen mit professionellen Umzugshelfern
                und Umzugsfahrern freut sich auf Ihre Anfrage. Mit über 500
                positiven Kundenbewertungen. Tausende Menschen haben sich uns
                bereits anvertraut! Vertrauen auch Sie Ihren baldigen Umzug
                unseren Umzugsexperten an.
              </LoremIpsum2>
            </Werbunb1>
          </Group>
          <LeisteOben>
            <RectStack>
              <Rect>
                <LOgoRow>
                  <EntypoIcon
                    name="box"
                    style={{
                      color: "rgba(128,128,128,1)",
                      fontSize: 80,
                      height: 88,
                      width: 80
                    }}
                  ></EntypoIcon>
                  <Telefon>
                    <EndWrapperFiller></EndWrapperFiller>
                    <TelIconRow>
                      <FontAwesomeIcon
                        name="phone-square"
                        style={{
                          color: "rgba(247,247,247,1)",
                          fontSize: 40
                        }}
                      ></FontAwesomeIcon>
                      <Nummer>+49 15170068752</Nummer>
                    </TelIconRow>
                  </Telefon>
                  <Mail>
                    <MailIconRow>
                      <ZocialIcon
                        name="email"
                        style={{
                          color: "rgba(247,247,247,1)",
                          fontSize: 40
                        }}
                      ></ZocialIcon>
                      <Email>service@home-umzüge.de</Email>
                    </MailIconRow>
                  </Mail>
                </LOgoRow>
                <LOgoRowFiller></LOgoRowFiller>
                <FacbookIconRow>
                  <EntypoIcon
                    name="facebook"
                    style={{
                      color: "rgba(247,247,247,1)",
                      fontSize: 40,
                      height: 44,
                      width: 40,
                      marginRight: 41
                    }}
                  ></EntypoIcon>
                  <FontAwesomeIcon
                    name="whatsapp"
                    style={{
                      color: "rgba(247,247,247,1)",
                      fontSize: 40,
                      height: 40,
                      width: 35,
                      marginRight: 42,
                      marginTop: 1
                    }}
                  ></FontAwesomeIcon>
                  <EntypoIcon
                    name="instagram"
                    style={{
                      color: "rgba(247,247,247,1)",
                      fontSize: 40,
                      height: 44,
                      width: 40
                    }}
                  ></EntypoIcon>
                </FacbookIconRow>
              </Rect>
              <Zeit>
                <TimeStack>
                  <Time>Mon-Sa 8 - 20 Uhr</Time>
                  <FontAwesomeIcon
                    name="clock-o"
                    style={{
                      top: 0,
                      left: 0,
                      position: "absolute",
                      color: "rgba(247,247,247,1)",
                      fontSize: 40
                    }}
                  ></FontAwesomeIcon>
                </TimeStack>
              </Zeit>
            </RectStack>
          </LeisteOben>
        </Image1>
        <HomeUmzuge1>HOME Umzüge</HomeUmzuge1>
        <Impressum>
          <Rect2></Rect2>
          <EntypoIcon
            name="box"
            style={{
              top: 100,
              left: 121,
              position: "absolute",
              color: "rgba(128,128,128,1)",
              fontSize: 200
            }}
          ></EntypoIcon>
          <Rect3></Rect3>
          <Rect4>
            <EndWrapperFiller></EndWrapperFiller>
            <ServiceNummernColumn>
              <ServiceNummern>
                Tel.: 089 / 123 123 123{"\n"}
                {"\n"}Tel.: 0176 / 101 22 333{"\n"}
                {"\n"}Fax: 089 / 333 08 009{"\n"}
                {"\n"}service@home-umzüge.de
              </ServiceNummern>
              <ServiceNummern2Stack>
                <ServiceNummern2>
                  |{"\n"}
                  {"\n"}*Alle Preise verstehen sich inklusive der Mehrwertsteuer
                  {"\n"}
                  {"\n"}Webdesign - Daniel Stichling
                </ServiceNummern2>
                <HGb>HGB</HGb>
                <AGb>AGB</AGb>
              </ServiceNummern2Stack>
            </ServiceNummernColumn>
          </Rect4>
          <Adresse>
            HOME-Umzüge{"\n"}
            {"\n"}Herr Pascha{"\n"}
            {"\n"}Musterstraße 88.{"\n"}
            {"\n"}81379 München
          </Adresse>
        </Impressum>
      </ScrollArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(52,52,52,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  height: 768px;
  background-color: rgba(230, 230, 230,1);
  flex-direction: column;
  display: flex;
`;

const Image1 = styled.div`
  width: 1366px;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-self: center;
  flex: 0 0 auto;
  background-image: url(${require("../assets/images/main2.jpg")});
  background-size: cover;
`;

const Group = styled.div`
  width: 606px;
  height: 128px;
  flex-direction: column;
  display: flex;
  margin-top: 194px;
  margin-left: 7px;
`;

const Werbunb1 = styled.div`
  width: 613px;
  height: 912px;
  background-color: rgba(57,77,117,0.86);
  flex-direction: column;
  display: flex;
  margin-top: -194px;
  margin-left: -7px;
`;

const HomeUmzuge = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  height: 128px;
  width: 606px;
  font-size: 85px;
  margin-top: 194px;
  margin-left: 7px;
`;

const LoremIpsum = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 26px;
  width: 605px;
  text-align: center;
  font-size: 19px;
  margin-left: 4px;
`;

const LoremIpsum2 = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 259px;
  width: 480px;
  text-align: center;
  font-size: 18px;
  margin-top: 59px;
  margin-left: 70px;
`;

const LeisteOben = styled.div`
  width: 192px;
  height: 51px;
  flex-direction: column;
  display: flex;
  align-self: flex-end;
  margin-top: -310px;
  margin-right: 39px;
`;

const Rect = styled.div`
  top: 0px;
  left: 0px;
  height: 92px;
  position: absolute;
  background-color: rgba(74,74,74,0.93);
  right: 0px;
  flex-direction: row;
  display: flex;
`;

const Telefon = styled.div`
  width: 192px;
  height: 28px;
  flex-direction: row;
  display: flex;
  margin-left: 396px;
  margin-top: 40px;
`;

const EndWrapperFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Nummer = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: rgba(167,166,166,1);
  font-size: 22px;
  text-align: center;
  width: 192px;
  height: 28px;
  margin-top: 6px;
`;

const TelIconRow = styled.div`
  height: 40px;
  flex-direction: row;
  margin-top: -6px;
  display: flex;
`;

const Mail = styled.div`
  width: 192px;
  height: 28px;
  flex-direction: row;
  display: flex;
  margin-left: 76px;
  margin-top: 41px;
`;

const Email = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: rgba(167,166,166,1);
  font-size: 22px;
  text-align: center;
  width: 263px;
  height: 28px;
  margin-left: 4px;
  margin-top: 8px;
`;

const MailIconRow = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -71px;
  margin-left: -44px;
  margin-top: -8px;
`;

const LOgoRow = styled.div`
  height: 88px;
  flex-direction: row;
  margin-left: 90px;
  margin-top: 2px;
  display: flex;
`;

const LOgoRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const FacbookIconRow = styled.div`
  height: 44px;
  flex-direction: row;
  margin-right: 20px;
  margin-top: 35px;
  display: flex;
`;

const Zeit = styled.div`
  top: 79px;
  left: 310px;
  width: 192px;
  height: 28px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Time = styled.span`
  font-family: Arial;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(167,166,166,1);
  font-size: 22px;
  text-align: center;
  width: 263px;
  height: 28px;
  left: 0px;
  top: 6px;
`;

const TimeStack = styled.div`
  width: 263px;
  height: 40px;
  margin-top: -42px;
  margin-left: -59px;
  position: relative;
`;

const RectStack = styled.div`
  height: 107px;
  margin-top: -12px;
  margin-left: -1135px;
  margin-right: -39px;
  position: relative;
`;

const HomeUmzuge1 = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  height: 128px;
  width: 606px;
  font-size: 85px;
  margin-top: 11px;
  margin-left: 353px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const Impressum = styled.div`
  height: 455px;
  background-color: rgba(74,74,74,1);
  flex-direction: row;
  overflow: hidden;
  margin-top: 797px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
`;

const Rect2 = styled.div`
  flex: 0.31678756476683945 1 0%;
  background-color: rgba(74,74,74,1);
  shadow-radius: 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 0px  1px rgba(0,0,0,1) ;
`;

const Rect3 = styled.div`
  flex: 0.7032124352331607 1 0%;
  background-color: rgba(74,74,74,1);
  display: flex;
  flex-direction: column;
`;

const Rect4 = styled.div`
  width: 484px;
  height: 455px;
  position: absolute;
  background-color: rgba(98,98,98,1);
  left: 441px;
  bottom: 0px;
  flex-direction: column;
  display: flex;
`;

const ServiceNummern = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: center;
  margin-bottom: 36px;
  margin-left: 89px;
`;

const ServiceNummern2 = styled.span`
  font-family: Arial;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: center;
  bottom: 0px;
  left: 0px;
`;

const HGb = styled.span`
  font-family: Arial;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: left;
  bottom: 65px;
  left: 177px;
`;

const AGb = styled.span`
  font-family: Arial;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: left;
  bottom: 65px;
  left: 136px;
`;

const ServiceNummern2Stack = styled.div`
  width: 342px;
  height: 82px;
  position: relative;
`;

const ServiceNummernColumn = styled.div`
  width: 342px;
  flex-direction: column;
  margin-bottom: 110px;
  margin-left: 71px;
  display: flex;
`;

const Adresse = styled.span`
  font-family: Arial;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 15px;
  bottom: 168px;
  right: 23px;
  text-align: center;
`;

export default Main;
