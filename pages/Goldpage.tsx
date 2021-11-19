import React from "react";
import styled from "styled-components";
import GoldSection from "../components/GoldSection";

const GoldpageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  position: relative;
  color: white;
  overflow: visible;
  margin-left: 10%;
`;

function Goldpage() {
  return (
    <GoldpageBox className="goldSection">
      <GoldSection />
      <GoldSection />
      <GoldSection />
      <GoldSection />
      <GoldSection />
    </GoldpageBox>
  );
}

export default Goldpage;
