import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        width: 250px;
        height: 250px;
    }
`
const FormContainer = styled.div`
    width: 85%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    p{
        text-align: center;
        color: #52B6FF;
        margin-top: 10px;
    }
`
const Input = styled.input`
    width: 100%;
    height: 45px;
    margin-top: 10px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 20px;
    ::placeholder{
        color: #DBDBDB;
    }
`
const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    background-color: #52B6FF;
    font-size: 22px;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        color: white;
        font-size: 22px;
        margin-bottom: 8px;
    }
`

export {Container, FormContainer, Input, Button}