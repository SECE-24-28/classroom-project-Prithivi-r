import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 100%;
  height: 50vh;
  background: #f5455e; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  color: white;

  .left {
    width: 45%;
  }

  h1 {
    font-size: 70px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
    width: 80%;
    line-height: 1.4;
    margin-bottom: 30px;
  }

  button {
    background: white;
    color: black;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #ffe4e8;
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 50%;
    border-radius: 1000px;
  }
`;