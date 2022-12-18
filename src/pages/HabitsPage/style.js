import styled from "styled-components"

const Container = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    margin: 70px 0 70px 0;
`
const TitleContainer = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px;
`
const Title = styled.p`
    color: #126BA5;
    font-size: 25px;
`
const AddButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 23px;
    font-weight: bold;
    cursor: pointer;
`
const Message = styled.p`
    font-size: 18px;
    color: #666666;
    margin: 10px 40px 10px 40px;
`

export { Container, TitleContainer, Title, AddButton, Message }