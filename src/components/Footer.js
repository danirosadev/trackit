import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer(){
    return(
        <FooterContainer data-test="menu">
            <Link data-test="habit-link" to="/habitos">
                <FooterButton>Hábitos</FooterButton>
            </Link>
            <Link data-test="today" to="/hoje">
                <MiddleButton>
                    <ButtonText>Hoje</ButtonText>
                <CircularProgressbar
                styles={
                    buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                      })
                }
                />
                </MiddleButton>
                
            </Link>
            <Link data-test="history-link" to="/historico">
                <FooterButton>Histórico</FooterButton>
            </Link>  
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    left: 0;
    bottom: 0;
    background-color: white;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.05);
`
const FooterButton = styled.div`
    color: #52B6FF;
    font-size: 18px;
    margin: 20px;
`
const MiddleButton = styled.div`
    width: 90px;
    height: 90px;
    background-color: #52B6FF;
    color: white;
    font-size: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`
const ButtonText = styled.p`
    position: absolute;
`