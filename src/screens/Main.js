import React, { Component } from "react";
import styled, { css } from "styled-components";
import ZocialIcon from "react-native-vector-icons/dist/Zocial";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function Main(props) {
  return (
    <Container>
      <ScrollArea>
        <Impressum>
          <Adresse>
            HOME-Umzüge{"\n"}
            {"\n"}Herr Pascha{"\n"}
            {"\n"}Musterstraße 88.{"\n"}
            {"\n"}81379 München
          </Adresse>
          <Group3>
            <ServiceNummern>
              Tel.: 089 / 123 123 123{"\n"}
              {"\n"}Tel.: 0176 / 101 22 333{"\n"}
              {"\n"}Fax: 089 / 333 08 009{"\n"}
              {"\n"}service@home-umzüge.de
            </ServiceNummern>
            <AGb>AGB</AGb>
            <HGb>HGB</HGb>
            <Center horizontal>
              <ServiceNummern2>
                |{"\n"}
                {"\n"}*Alle Preise verstehen sich inklusive der Mehrwertsteuer
                {"\n"}
                {"\n"}Webdesign - Daniel Stichling
              </ServiceNummern2>
            </Center>
          </Group3>
          <Image2 src={require("../assets/images/Design_1.0.png")}></Image2>
        </Impressum>
        <Hitline>
          <Image1 src={require("../assets/images/main2.jpg")}></Image1>
          <Group2>
            <Werbunb1></Werbunb1>
            <SpruchHitline>
              GÜNSTIGE UMZÜGE MÜNCHEN, UMGEBUNG UND BUNDESWEIT
            </SpruchHitline>
            <Image3 src={require("../assets/images/Design_1.0.png")}></Image3>
            <BeschreibungHitline>
              HOME-Umzüge ist ihr Partner für private und gewerbliche Umzüge.
              {"\n"}
              {"\n"}Spezialist für professionelle und günstige Umzüge. Unsere
              Umzugshelfer sind für Ihren reibungslosen Umzug da.{"\n"}Unser
              erfahrenes Umzugsunternehmen mit professionellen Umzugshelfern und
              Umzugsfahrern freut sich auf Ihre Anfrage. Mit über 500 positiven
              Kundenbewertungen. Tausende Menschen haben sich uns bereits
              anvertraut! Vertrauen auch Sie Ihren baldigen Umzug unseren
              Umzugsexperten an.
            </BeschreibungHitline>
          </Group2>
        </Hitline>
      </ScrollArea>
      <LeisteOben>
        <Rect></Rect>
        <Info>
          <Mail>
            <ZocialIcon
              name="email"
              style={{
                top: -6,
                left: -44,
                position: "absolute",
                color: "rgba(247,247,247,1)",
                fontSize: 40,
                height: 44
              }}
            ></ZocialIcon>
            <Email>service@home-umzüge.de</Email>
          </Mail>
          <Telefon>
            <FontAwesomeIcon
              name="phone-square"
              style={{
                top: -6,
                position: "absolute",
                color: "rgba(247,247,247,1)",
                fontSize: 40,
                right: 192
              }}
            ></FontAwesomeIcon>
            <Nummer>+49 15170068752</Nummer>
          </Telefon>
          <Zeit>
            <Time>Mon-Sa 8 - 20 Uhr</Time>
            <FontAwesomeIcon
              name="clock-o"
              style={{
                top: -6,
                left: -59,
                position: "absolute",
                color: "rgba(247,247,247,1)",
                fontSize: 40,
                height: 40
              }}
            ></FontAwesomeIcon>
          </Zeit>
        </Info>
        <Group>
          <EntypoIcon
            name="instagram"
            style={{
              top: 0,
              position: "absolute",
              color: "rgba(247,247,247,1)",
              fontSize: 40,
              right: -158
            }}
          ></EntypoIcon>
          <EntypoIcon
            name="facebook"
            style={{
              top: 0,
              position: "absolute",
              color: "rgba(247,247,247,1)",
              fontSize: 40,
              right: 0
            }}
          ></EntypoIcon>
          <FontAwesomeIcon
            name="whatsapp"
            style={{
              top: 1,
              position: "absolute",
              color: "rgba(247,247,247,1)",
              fontSize: 40,
              right: -76
            }}
          ></FontAwesomeIcon>
        </Group>
      </LeisteOben>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(52,52,52,1);
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  left: 0px;
  position: absolute;
  background-color: rgba(230, 230, 230,1);
  right: 0px;
  top: -1px;
  height: 100.82%;
  display: flex;
`;

const Impressum = styled.div`
  left: 0px;
  height: 455px;
  position: absolute;
  background-color: rgba(168,168,168,1);
  flex-direction: row;
  overflow: visible;
  bottom: 0px;
  right: 0px;
  display: flex;
`;

const Adresse = styled.span`
  font-family: Helvetica;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 15px;
  width: 372px;
  bottom: 168px;
  right: 0px;
  text-align: center;
`;

const Group3 = styled.div`
  width: 237px;
  height: 19px;
  position: absolute;
  bottom: 149px;
  left: 615px;
  display: flex;
`;

const ServiceNummern = styled.span`
  font-family: Helvetica;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: center;
  bottom: 41px;
  left: 34px;
`;

const AGb = styled.span`
  font-family: Helvetica;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: left;
  bottom: 0px;
  left: 83px;
`;

const HGb = styled.span`
  font-family: Helvetica;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: left;
  bottom: 0px;
  left: 124px;
`;

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: none;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const ServiceNummern2 = styled.span`
  font-family: Helvetica;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 14px;
  text-align: center;
  bottom: -77px;
`;

const Image2 = styled.img`
  left: 0px;
  width: 100%;
  height: 423px;
  position: absolute;
  bottom: 16px;
  object-fit: contain;
`;

const Hitline = styled.div`
  top: 0px;
  width: 2096px;
  height: 1393px;
  position: absolute;
  left: -193px;
  overflow: visible;
  display: flex;
`;

const Image1 = styled.img`
  top: 1px;
  width: 2101px;
  height: 1390px;
  position: absolute;
  left: 0px;
  object-fit: contain;
`;

const Group2 = styled.div`
  top: 0px;
  left: 0px;
  width: 949px;
  height: 1391px;
  position: absolute;
  display: flex;
`;

const Werbunb1 = styled.div`
  top: 0px;
  left: 0px;
  width: 949px;
  height: 1391px;
  position: absolute;
  background-color: rgba(184,184,184,1);
  opacity: 0.86;
`;

const SpruchHitline = styled.span`
  font-family: Helvetica;
  top: 620px;
  left: 286px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 26px;
  width: 605px;
  text-align: center;
  font-size: 25px;
`;

const Image3 = styled.img`
  top: 251px;
  left: 292px;
  width: 592px;
  height: 382px;
  position: absolute;
  object-fit: contain;
`;

const BeschreibungHitline = styled.span`
  font-family: Helvetica;
  top: 740px;
  left: 348px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 259px;
  width: 480px;
  text-align: center;
  font-size: 20px;
`;

const LeisteOben = styled.div`
  top: 12px;
  height: 51px;
  position: absolute;
  right: 0px;
  left: 0px;
  display: flex;
`;

const Rect = styled.div`
  top: -12px;
  left: -1135px;
  height: 92px;
  position: absolute;
  background-color: rgba(74,74,74,1);
  right: -38px;
  opacity: 0.93;
`;

const Info = styled.div`
  top: 24px;
  left: 415px;
  width: 413px;
  height: 28px;
  position: absolute;
  display: flex;
`;

const Mail = styled.div`
  top: 0px;
  left: 0px;
  width: 269px;
  height: 28px;
  position: absolute;
  display: flex;
`;

const Email = styled.span`
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
  top: 0px;
`;

const Telefon = styled.div`
  top: 0px;
  left: -332px;
  width: 192px;
  height: 28px;
  position: absolute;
  display: flex;
`;

const Nummer = styled.span`
  font-family: Arial;
  top: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(167,166,166,1);
  font-size: 22px;
  text-align: center;
  width: 192px;
  height: 28px;
  right: 0px;
`;

const Zeit = styled.div`
  top: 0px;
  left: 385px;
  width: 192px;
  height: 28px;
  position: absolute;
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
  height: 24px;
  left: -59px;
  top: 4px;
`;

const Group = styled.div`
  top: 23px;
  width: 40px;
  height: 44px;
  position: absolute;
  right: 194px;
  display: flex;
`;

export default Main;
