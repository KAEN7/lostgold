import React from "react";
import styled from "styled-components";

import video from "../img/mainpage.mp4";

// mainpage box
const MainpageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  color: white;

  .main__title {
    font-weight: 800;
    top: 30vh;
    margin-left: 10%;
    width: 50%;
    height: 130px;
    .main__title__text {
      height: 300px;
      font-size: 80px;
      color: rgba(255, 255, 255, 0.95);
      /* -webkit-text-stroke: 2.4px #501d01; */
    }
    .scroll-to-top {
      animation: 1.5s;
    }
  }

  .main__search-bar {
    margin-left: 10%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.05);
    height: 5.4vh;
    width: 30%;
    border-radius: 2vh;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    input {
      background-color: rgba(0, 0, 0, 0);
      margin-left: 16px;
      border: none;
      width: 80%;
      &::placeholder {
        color: rgba(238, 238, 238, 0.6);
        font-size: 15px;
      }
    }
    button {
      border: none;
      background: none;
      margin-right: 24px;
      color: white;
    }
  }

  .video {
    position: absolute;
    width: 60%;
    margin-left: 500px;
    z-index: -1;
  }
`;

function MainSection() {
  return (
    <MainpageBox className="mainSection">
      <div className="main__title">
        <div className="main__title__text">Goooooold</div>
      </div>
      <div className="main__search-bar">
        <input placeholder="search your class" />
        <button>Q</button>
      </div>
      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4"></source>
      </video>
    </MainpageBox>
  );
}

export default MainSection;
