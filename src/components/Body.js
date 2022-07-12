import React from "react";
import styled from "styled-components";

export default function Body() {
  return (
    <BodyStyled>
      <div className="container">
        <div className="lines">
          <div className="rectangle-1"></div>
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
        </div>
        <div className="header">
          <h2>It's a delight to have you onboard</h2>
          <p className="first">Help us know you better.</p>
          <p className="second">
            (This is how we optimize Wobot as per your business needs)
          </p>
        </div>
        <div className="form-details">
          <label className="label_1">Company Name:</label>
          <input className="input_1" type="text" placeholder="eg." />
          <label className="label_2">Industry:</label>
          <select className="input_2">
            <option value="Select">Select</option>
          </select>
          <p className="company">Company Size:</p>
          <div className="buttons-con">
            <button>1-20</button>
            <button>21-50</button>
            <button className="active">51-200</button>
            <button>201-500</button>
            <button>500+</button>
          </div>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </BodyStyled>
  );
}

const BodyStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: space-evenly;
    align-items: center;
    width: 28%;
    height: 69%;
    top: 12%;
    left: 35%;
    font-family: "Roboto", sans-serif;
    background-color: #ffffff;
    box-shadow: 4px 4px 20px rgba(157, 157, 157, 0.12);
    border-radius: 15px;

    .header {
      align-items: center;
      margin-top: 7rem;
      padding: 0px;
      gap: 5px;
      width: 450px;
      height: 185px;
    }

    h2 {
      margin: -6.5rem 5rem 0 5rem;
      text-align: center;
    }
    .first {
      margin-top: 0.7rem;
      margin-bottom: 0;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 400;
      color: #545454;
      line-height: 15px;
    }
    .second {
      margin-top: 1px;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 400;
      color: #545454;
      line-height: 20px;
    }
  }
  .lines {
    position: absolute;
    width: 3rem;
    height: 3rem;
    left: 45%;
    top: 5%;
    margin-bottom: 1rem;
    .rectangle-1 {
      width: 20px;
      height: 9px;
      position: absolute;
      top: 60%;
      border-radius: 10px;
      background-color: #3766e8;
      transform: rotate(55deg);
    }
    .rectangle-2 {
      width: 35px;
      height: 9px;
      position: absolute;
      top: 48%;
      left: 8%;
      border-radius: 10px;
      background-color: #3766e8;
      transform: rotate(55deg);
    }
    .rectangle-3 {
      width: 15px;
      height: 9px;
      position: absolute;
      top: 30%;
      left: 49%;
      border-radius: 10px;
      background-color: #3766e8;
      transform: rotate(55deg);
    }
  }
  .form-details {
    position: relative;
    margin-top: -52%;
    width: 390px;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    .label_1 {
      margin: 0.5rem 0.5rem 0 0.5rem;
      font-size: 15px;
      font-weight: 500;
      color: #545454;
    }
    .label_2 {
      margin: 1.2rem 0.5rem 0 0.5rem;
      font-size: 15px;
      font-weight: 500;
      color: #545454;
    }

    .input_1 {
      margin: 0.5rem 0.5rem 0 0.5rem;
      width: 88%;
      font-size: 0.9rem;
      padding: 8px;
      color: gray;
      border: 1px solid #ced4da;
      border-radius: 8px;
      &:focus {
        outline: none;
        border: 2px solid #3766e8;
      }
    }
    .input_2 {
      margin: 0.5rem 0.5rem 0 0.5rem;
      width: 93%;
      font-size: 0.9rem;
      padding: 8px;
      color: gray;
      border: 1px solid #ced4da;
      border-radius: 8px;
      &:focus {
        outline: none;
        border: 2px solid #3766e8;
      }
    }
  }
  .company {
    margin: 1.5rem 0.5rem 0.8rem 0.5rem;
    font-size: 15px;
    font-weight: 500;
    color: #545454;
  }
  .buttons-con {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    button {
      border: none;
      padding: 4px 10px;
      background-color: #f0f0f0;
      color: #545454;
      border-radius: 5px;
    }
    .active {
      background-color: #3766e8;
      color: #ffffff;
    }
  }
  .btn {
    position: absolute;
    top: 85%;
    left: 2%;
    width: 93%;
    margin-top: 3rem;
    padding: 10px 0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #3766e8;
    color: #ffffff;
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;
