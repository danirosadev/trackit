import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../context/context"
import { BASE_URL } from "../constants/urls"
import { WEEKDAYS } from "../constants/weekday"

export default function HabitCard({ habitName, habitId, setHabits, days, selectedDays }) {
    const { userData } = useContext(UserContext)

    function deleteHabit() {
        if (window.confirm("Quer mesmo deletar esse hábito?")) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
            }

            const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config)
            promise.then((res) => {
                console.log(res.data)
                setHabits([...res.data])
            })
        }
    }
    return (
        <Habit data-test="habit-container">
            <HabitTitleContainer>
                <HabitTitle data-test="habit-name">{habitName}</HabitTitle>
                <ion-icon data-test="habit-delete-btn" onClick={deleteHabit} name="trash-outline"></ion-icon>
            </HabitTitleContainer>
            <DayContainer>
                {WEEKDAYS.map((day, i) =>
                    <DayButton data-test="habit-day"
                        key={day.id}
                        isSelected={selectedDays.includes(i)}
                    >{day.name}
                    </DayButton>
                )}
            </DayContainer>
        </Habit>
    )
}

const Habit = styled.div`
    width: 90%;
    height: 90px;
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 15px;
    margin: 10px;
`
const HabitTitle = styled.p`
    font-size: 20px;
    color: #666666;
`
const HabitTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const DayContainer = styled.div`
    display: flex;
`
const DayButton = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.isSelected ? "#dbdbdb" : "white"};
    border: 1px solid #d4d4d4;
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.isSelected ? "white" : "#dbdbdb"};
    border-radius: 5px;
    margin: 5px 5px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`