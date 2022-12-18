import styled from "styled-components"
import check from "../assets/img/check.png"

export default function TodayCard({ name, done, currentSequence, highestSequence, habId }) {
    return (
        <Card data-test="today-habit-container">
            <div>
                <CardTitle data-test="today-habit-name">{name}</CardTitle>
                <CardSubTitle data-test="today-habit-sequence">Sequência atual: {currentSequence} dias</CardSubTitle>
                <CardSubTitle data-test="today-habit-record">Seu recorde: {highestSequence} dias</CardSubTitle>
            </div>
            <Checkbox>
                <img data-test="today-habit-check-btn" itsDone={done} src={check} alt="" />
            </Checkbox>
        </Card>
    )
}

const Card = styled.div`
    width: 90%;
    height: 95px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const CardTitle = styled.p`
    font-size: 20px;
    color: #666666;
    margin: 5px 10px 5px 10px;
`
const CardSubTitle = styled.p`
    font-size: 13px;
    color: #666666;
    margin: 5px 10px 5px 10px;
`
const Checkbox = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${props => props.itsDone ? "#8FC549" : "#EBEBEB"};
    margin-right: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`