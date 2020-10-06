import React, { Component } from "react";
import styled, { css } from "styled-components";

function ScrollArea(props) {
  return (
    <Container {...props}>
      <ScrollAreaStyle></ScrollAreaStyle>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
`;

const ScrollAreaStyle = styled.div`
  overflow-y: scroll;
  top: 0px;
  left: 0px;
  height: 678px;
  position: absolute;
  background-color: rgba(230, 230, 230,1);
  opacity: 0;
  right: 0px;
  flex-direction: column;
  display: flex;
`;

export default ScrollArea;
