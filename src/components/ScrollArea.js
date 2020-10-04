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
  display: flex;
  flex-direction: column;
`;

const ScrollAreaStyle = styled.div`
  overflow-y: scroll;
  height: 678px;
  background-color: rgba(230, 230, 230,1);
  opacity: 0;
  flex-direction: column;
  display: flex;
`;

export default ScrollArea;
