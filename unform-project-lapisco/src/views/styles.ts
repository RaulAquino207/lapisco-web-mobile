import styled from "styled-components";

export const Styles = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
    padding: 40px 0;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
  }
`;

export const DateHourStyles = styled.div`
  input {
    margin-bottom: 15px;
    padding: 12px 16px;
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .react-datepicker {
    width: max-content;
  }
`;

export const SelectStyles = styled.div`
  margin-bottom: 15px;
`;

export const OptionsRadio: any = styled.div`
  Input {
    width: 10%;
    cursor: pointer;
  }
  span {
    font-size: 15px;
  }
`;

export const ButtonStyles: any = styled.div`
  button {
    display: block;
    background: #111;
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }
  button:hover {
    background-color: #000;
  }
`;