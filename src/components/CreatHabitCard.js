import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { UserContext } from "../context/context"
import { WEEKDAYS } from "../constants/weekday"

export default function CreateHabitCard({ newHabits, setNewHabits, handleDay, selectedDays }) {
    const { userData } = useContext(UserContext)
    const [form, setForm] = useState({ name: "", days: [] })

    function handleForm(e) {
        e.preventDefault()
        const days = selectedDays.map( d => d.id)

        setForm({
            ...form,
            [e.target.name]: e.target.value,
            days: days
        })
    }

    function createHabit(e) {
        e.preventDefault()

        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", form, config)
        promise.then((res) => {
            console.log(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data.message)
        })

        setNewHabits(!newHabits)
    }

    return (
        <CreateHabit data-test="habit-create-container" onSubmit={createHabit}>
            <HabitInput data-test="habit-name-input" name="name" onChange={handleForm} value={form.name} type="text" placeholder="nome do hábito" />
            <DayContainer>
                {WEEKDAYS.map((day) => 
                    <DayButton data-test="habit-day" 
                    key={day.id} 
                    name="days" 
                    onClick={() => handleDay(day)}
                    isSelected={selectedDays.some((d) => d.id === day.id)}>
                        {day.name}
                    </DayButton>
                )}
            </DayContainer>
            <ButtonContainer>
                <CancelButton data-test="habit-create-cancel-btn" onClick={() => setNewHabits(!newHabits)}>Cancelar</CancelButton>
                <SaveButton data-test="habit-create-save-btn" type="submit">Salvar</SaveButton>
            </ButtonContainer>
        </CreateHabit>
    )
}

const CreateHabit = styled.form`
    width: 90%;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 10px;
`
const HabitInput = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    padding-left: 15px;
    ::placeholder{
        font-size: 20px;
        color: #dbdbdb;
    }
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
const CancelButton = styled.button`
    width: 85px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: #52B6FF;
    font-size: 16px;
    margin: 5px;
    cursor: pointer;
`
const SaveButton = styled.button`
    width: 85px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    color: white;
    font-size: 16px;
    margin: 5px;
    cursor: pointer;
`
const ButtonContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 25px;
`