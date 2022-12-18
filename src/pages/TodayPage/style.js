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
    height: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    margin: 25px;
`
const Title = styled.p`
    color: #126BA5;
    font-size: 25px;
`
const SubTitle = styled.p`
    color: #bababa;
    font-size: 18px;
`
export {Container, TitleContainer, Title, SubTitle}