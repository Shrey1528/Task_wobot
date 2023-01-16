import React from "react";
import styled from "styled-components";
import lines from "../images/Solid_lines.png";

const Form = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImage>
          <img src={lines} alt="lines" />
        </LogoImage>
        <Header>
          <h2>It's a delight to have you onboard</h2>
        </Header>
        <SubHeader>
          <p>Help us know you better.</p>
          <p>(This is how we optimize Wobot as per your business needs)</p>
        </SubHeader>
        <FormContainer>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Label className="label_1">Company Name:</Label>
            <Input className="input_1" type="text" placeholder="eg." />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Label>Industry:</Label>
            <Select>
              <option>Select</option>
            </Select>
          </div>
          <Company>Company Size:</Company>
          <ButtonContainer>
            <button>1-20</button>
            <button>21-50</button>
            <button className="active">51-200</button>
            <button>201-500</button>
            <button>500+</button>
          </ButtonContainer>
          <Button>Get Started</Button>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 10px #eeeeee;
  border-radius: 10px;
`;

const LogoImage = styled.div`
  padding: 20px 0;
  text-align: center;
  img {
    width: 35px;
    height: 30px;
  }
`;

const Header = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  h2 {
    margin: 0;
    font-weight: 500;
    color: #212121;
  }
`;
const SubHeader = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  p {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: #545454;
    line-height: 10px;
  }
`;

const FormContainer = styled.form`
  width: 75%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0px 20px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #545454;
`;

const Input = styled.input`
  height: 30px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 0 5px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px 10px #eeeeee;
  }
`;

const Select = styled.select`
  height: 30px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  color: #545454;
  &:focus {
    box-shadow: 0px 0px 10px 10px #eeeeee;
  }
`;

const Company = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  color: #545454;
`;

const ButtonContainer = styled.div`
  margin-top: -0.5rem;
  display: flex;
  gap: 0.7rem;
  button {
    border: none;
    background-color: #f0f0f0;
    border-radius: 2px;
    padding: 5px;
    cursor: pointer;
  }
  .active {
    background-color: #3766e8;
    color: #ffffff;
  }
`;

const Button = styled.button`
  height: 40px;
  margin: 1rem 0;
  border: none;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  background-color: rgb(5, 6, 45);
  border: 3px solid;
  border-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb) 1;
  transition: 0.5s all ease-in-out;
  &:hover {
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }
`;
