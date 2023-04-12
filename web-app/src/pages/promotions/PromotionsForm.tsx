import React, { useContext, useState } from "react";
import { Promotion } from "./promotion.type";
import styled from "styled-components";
import axios from "axios";
import CategoryService from "../../services/api/category.service";
import { AuthContext } from "../../context/auth";
interface PromotionFormProps {
    onSubmit: () => void;
}

const API_URL = "http://localhost:8080/promotions";
const PromotionForm = ({ onSubmit }: PromotionFormProps) => {
    let token = "NONE"

    let { user } = useContext(AuthContext);
    let userEmail = "mockUser"
    if (user) {
        const usernameByToken = user?.username
        if (usernameByToken) {
            userEmail = usernameByToken
        }
    }

    if (!user) {
        /**
         *  NOT AUTHENTICATED YET
        */

    } else { token = user.token ?? "NOT_TOKEN" }

    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [isPercent, setIsPercent] = useState(true);
    const [category, setCategory] = useState("");
    const [active, setActive] = useState(false);
    const checkInputInformation = (({ name, value, category, active }: any) => {
        return (name !== "" && value !== 0 && category !== 0)
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkInputInformation({ name, value, category, active })) {
            addPromotion({ name, user: userEmail, value, isPercent, category, active })
            setName("");
            setValue(0);
            setIsPercent(true);
            setCategory("");
            setActive(false);
            onSubmit();
        }
        else { alert("Not valid information") }
    };
    const addPromotion = async (promotion: Promotion) => {
        try {
            console.info(promotion)
            const response = await axios.post<Promotion>(API_URL, promotion, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.info(response)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormGroup>
                <StyledLabel htmlFor="name">Name:</StyledLabel>
                <StyledInput
                    type="text"
                    id="f-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="value">Value:</StyledLabel>
                <StyledInput
                    type="number"
                    id="f-value"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
            </StyledFormGroup>
            <StyledFormGroup>
                <StyledLabel htmlFor="category">Category:</StyledLabel>
                <StyledInput
                    type="text"
                    id="f-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </StyledFormGroup>
            <StyledLabel htmlFor="active">Active</StyledLabel>
            <StyledCheckbox
                type="checkbox"
                id="f-active"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
            />

            <StyledButton type="submit" id="add-btn">Add</StyledButton>

        </StyledForm>
    );
}
export default PromotionForm;
const StyledForm = styled.form`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  margin-right: 100px;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  `;

const StyledCheckbox = styled.input`margin-right: 200px; 
    margin-left:20px;

`

const StyledButton = styled.button`
  padding: 10px 20px;
  margin-left: 50px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
  background-color: #3e8e41;
  }}`

