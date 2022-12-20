import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CreateHabitCard from "../../components/CreatHabitCard"
import HabitCard from "../../components/HabitCard"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { UserContext } from "../../context/context"
import { Container, TitleContainer, Title, AddButton, Message } from "./style"

export default function HabitsPage() {
    const { userData } = useContext(UserContext)
    const [newHabits, setNewHabits] = useState(false);
    const [habits, setHabits] = useState([]);
    const [selectedDays, setSelectedDays] = useState([])

    function handleDay(day) {
        const isSelected = selectedDays.some((d) => d.id === day.id)
        if (isSelected) {
            const newList = selectedDays.filter((d) => d.id !== day.id)
            setSelectedDays(newList)
        } else {
            setSelectedDays([...selectedDays, day])
        }
    }

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }

        const promise = axios.get(`${BASE_URL}/habits`, config)
        promise.then((res) => {
            setHabits(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }, [habits])

    return (
        <>
            <Header />
            <Container>

                <TitleContainer>
                    <Title>Meus hábitos</Title>
                    <AddButton data-test="habit-create-btn" onClick={() => setNewHabits(!newHabits)}>+</AddButton>
                </TitleContainer>
                {newHabits ? (
                    <CreateHabitCard
                        newHabits={newHabits}
                        setNewHabits={setNewHabits}
                        handleDay={handleDay}
                        selectedDays={selectedDays}
                        setSelectedDays={setSelectedDays}
                    />
                ) : ""}

                {habits.map((hab) => (
                    <HabitCard
                        key={hab.id}
                        habitName={hab.name}
                        habitId={hab.id}
                        days={hab.days}
                        setHabits={setHabits}
                        selectedDays={selectedDays}
                    />
                ))}

                {(habits.length === 0) ? (
                    <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
                ) : ""}
            </Container>
            <Footer />
        </>
    )
}