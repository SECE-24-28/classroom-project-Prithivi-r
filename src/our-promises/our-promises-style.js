import styled from "styled-components";

export const OurPromisesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 20px;
  align-items: center;
  background-color: #ffffff;
  padding: 50px 0;

  h1 {
    text-align: center;
    color: #000000;
  }
  
  .paras h1 {
    color: #000000;
  }
  
  .paras p {
    color: #000000;
  }
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .child {
    display: flex;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: #ffffff;
  }
  
  @media (max-width: 768px) {
    .parent {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .parent {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .title__parent {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .para {
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    text-align: left;
  }
  .title {
    font-size: 24px;
    color: #000000;
    font-weight: 600;
  }
`;