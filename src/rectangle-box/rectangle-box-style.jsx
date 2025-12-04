import styled from "styled-components";

export const RectangleBoxStyle = styled.div`
  background: #ffffff;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 0;

  .content-box {
    width: 100%;
    max-width: 1200px;
    text-align: center;
  }

  /* =============================
        APPTITUDE SECTION
     ============================= */
  .aptitude {
    max-width: 1000px;
    margin: 0 auto;
  }

  .aptitude h1 {
    font-size: 64px;
    color: red;
    font-weight: 700;
  }

  .aptitude h2 {
    font-size: 28px;
    color: black;
  }

  .aptitude h3 {
    font-size: 28px;
    font-style: italic;
    color: red;
  }

  .aptitude p {
    font-size: 18px;
    color: #292929;
    line-height: 1.8;
    margin-top: 20px;
    max-width: 950px;
    margin-left: auto;
    margin-right: auto;
  }

  /* =============================
        SYMBOL SECTION
     ============================= */
  .symbol {
    max-width: 1000px;
    margin: 60px auto;
  }

  .symbol h1 {
    font-size: 48px;
    font-weight: 700;
    color: #000;
  }

  .symbol p {
    font-size: 20px;
    color: #2d2d2d;
    line-height: 1.8;
  }

  /* =============================
        Vision + Mission 
     ============================= */
  .vm-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-top: 60px;
    text-align: left;
  }

  .child_one,
  .child_two {
    width: 50%;
    padding: 20px;
    border-left: 4px solid;
    background: #ffffff;
  }

  .child_one {
    border-left-color: #f0b244;
  }

  .child_two {
    border-left-color: #00aee0;
  }

  .child_one h2 {
    font-size: 32px;
    font-weight: 700;
    color: #f0b244;
  }

  .child_two h2 {
    font-size: 32px;
    font-weight: 700;
    color: #00aee0;
  }

  .child_one p,
  .child_two p {
    font-size: 18px;
    color: #222;
    line-height: 1.7;
    margin-top: 10px;
  }

  /* =============================
        PILL BOX 
     ============================= */
  .pill-box {
    background: #ff2347;
    padding: 60px 80px;
    border-radius: 120px;
    max-width: 900px;
    margin: 60px auto 0;
    color: white;
  }

  .pill-box h1 {
    font-size: 38px;
    font-weight: 700;
  }

  .pill-box p {
    font-size: 20px;
    line-height: 1.6;
  }

  /* =============================
        RESPONSIVE 
     ============================= */
  @media (max-width: 900px) {
    .vm-container {
      flex-direction: column;
      text-align: center;
    }

    .child_one,
    .child_two {
      width: 100%;
    }

    .aptitude h1 {
      font-size: 48px;
    }

    .symbol h1 {
      font-size: 36px;
    }
  }
    .btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 25px;     /* <<< GAP BETWEEN BUTTONS */
}

.btn {
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.btn-grey {
  background: #eaeaea;
  color: #000;
}

.btn-red {
  background: #ff2f4a;
  color: #fff;
}
  .Trust {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;       /* spacing between boxes */
  margin: 50px 0;
  text-align: center;
}

.Trust div {
  background: #fff;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-size: 22px;
  font-weight: 700;
  color: #100d0dff;
}



`;