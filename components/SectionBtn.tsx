import React, { useCallback, useState } from "react";
import styled from "styled-components";

const ScrollBtns = styled.div`
  position: fixed;
  width: 6vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;
  .scroll-box {
    width: 4vw;
    height: 40vh;
    z-index: 100;
    margin-top: 38vh;
    button {
      font-size: 0.7rem;
      font-weight: 800;
      margin-bottom: 8px;
      width: 100%;
      height: 54px;
      &:hover {
        border-right: #a85204 3px solid;
      }
    }
  }
`;

function SectionBtn() {
  const [scrollToMain, setScrollToMain] = useState(0);
  const [scrollToBestTags, setScorllToBestTags] = useState(0);
  const [scrollToNewLists, setScrollToNewLists] = useState(0);

  const handleToMain = useCallback(() => {
    setScrollToMain(
      document
        .querySelector(".mainSection")
        .scrollIntoView({ behavior: "smooth" })
    );
  }, []);

  const handleToBest = useCallback(() => {
    setScorllToBestTags(
      document
        .querySelector(".goldSection")
        .scrollIntoView({ behavior: "smooth" })
    );
  }, []);

  const handleToNew = useCallback(() => {
    setScrollToNewLists(
      document
        .querySelector(".newListsSection")
        .scrollIntoView({ behavior: "smooth" })
    );
  }, []);

  return (
    <ScrollBtns className="scroll-buttons">
      <div className="scroll-box">
        <button
          className="scroll-buttons__main"
          value={scrollToMain}
          onClick={handleToMain}
        >
          MAIN
        </button>
        <button
          className="scroll-buttons__bestTags"
          value={scrollToBestTags}
          onClick={handleToBest}
        >
          GOLD
        </button>
        <button
          className="scroll-buttons__newLists"
          value={scrollToNewLists}
          onClick={handleToNew}
        >
          TAB
        </button>
      </div>
    </ScrollBtns>
  );
}

export default SectionBtn;
