import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #333;

    span {
      color: #ef4444;
    }
  }

  form {
    background: white;
    padding: 40px;
    border-radius: 8px;
    border: 2px solid #ddd;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 0.95rem;
    color: #000;
    margin-bottom: 8px;
    font-weight: 500;
  }

  input,
  select {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    background: #f5f5f5;
    color: #000;

    &::placeholder {
      color: #aaa;
    }
  }

  .mobile-group {
    display: flex;
    gap: 10px;

    select {
      width: 100px;
    }

    input {
      flex: 1;
    }
  }

  .password-group {
    position: relative;

    .toggle-password {
      position: absolute;
      right: 12px;
      top: 40px;
      background: none;
      border: none;
      color: #666;
      cursor: pointer;
      font-size: 0.9rem;
    }
  }

  .password-requirements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 15px;
    font-size: 0.9rem;
    color: #888;

    li {
      list-style: disc;
      margin-left: 20px;
    }
  }

  .submit-btn {
    background: #ef4444;
    color: white;
    padding: 12px 40px;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background: #dc2626;
    }
  }
`;