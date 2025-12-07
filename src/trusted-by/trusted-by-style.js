import styled from "styled-components";

export const TrustedByStyle = styled.div`
  text-align: center;
  padding: 2rem 0;
  background-color: white;

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
    color: black;
  }

  .element {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .sc-dtBdUo {
    --shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
    --circle-width: 90px;
    padding: 0.8rem;
    border-radius: 10px;
    background-color: white;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .sc-dtInlm {
    position: relative;
    padding: 1rem;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: var(--shadow);
    width: 230px;
    height: 200px;
  }

  .eHqdkl {
    border-radius: 10px;
    height: 50%;
    width: 100%;
    z-index: -1;
    left: 0;
    right: 0;
    position: absolute;
    top: initial;
    bottom: 0;
  }

  .sc-dtBdUo:nth-child(1) .eHqdkl {
    background-color: #01c8c8;
  }

  .sc-dtBdUo:nth-child(2) .eHqdkl {
    background-color: #00b7ff;
  }

  .sc-dtBdUo:nth-child(3) .eHqdkl {
    background-color: #f5b041;
  }

  .sc-dtBdUo:nth-child(4) .eHqdkl {
    background-color: #ff4d4d;
  }

  .sc-cWSHoV {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sc-kOHTFB {
    position: absolute;
    left: 50%;
    width: var(--circle-width);
    height: var(--circle-width);
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: var(--shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    translate: -50% -50%;
    font-size: 32px;
  }

  .sc-kOHTFB.bottom {
    top: initial;
    bottom: 0;
    translate: -50% 50%;
  }

  .sc-dtBdUo:nth-child(1) .sc-kOHTFB {
    background-color: #01c8c8;
  }

  .sc-dtBdUo:nth-child(2) .sc-kOHTFB {
    background-color: #00b7ff;
  }

  .sc-dtBdUo:nth-child(3) .sc-kOHTFB {
    background-color: #f5b041;
  }

  .sc-dtBdUo:nth-child(4) .sc-kOHTFB {
    background-color: #ff4d4d;
  }

  .icon-inner {
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
  }

  .sc-dtBdUo:nth-child(1) .icon-inner {
    color: #01c8c8;
  }

  .sc-dtBdUo:nth-child(2) .icon-inner {
    color: #00b7ff;
  }

  .sc-dtBdUo:nth-child(3) .icon-inner {
    color: #f5b041;
  }

  .sc-dtBdUo:nth-child(4) .icon-inner {
    color: #ff4d4d;
  }

  .value {
    font-size: 48px;
    font-weight: 700;
    color: #888;
    margin-bottom: 8px;
  }

  .name {
    font-size: 16px;
    font-weight: 600;
    color: #999;
    letter-spacing: 1px;
  }
`;