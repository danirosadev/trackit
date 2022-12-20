import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function History(){
    return(
        <>
            <Header />
            <Container>
                <Title>Histórico</Title>
                <Message>Em breve você poderá ver o histórico dos seus hábitos aqui!</Message>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    margin: 70px 0 70px 0;
`
const Title = styled.p`
    color: #126BA5;
    font-size: 25px;
    margin: 40px 40px 10px 40px;
`
const Message = styled.p`
    font-size: 18px;
    color: #666666;
    margin: 10px 40px 10px 40px;
`