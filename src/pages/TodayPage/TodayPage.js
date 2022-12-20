import { Container, TitleContainer, Title, SubTitle } from "./style"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TodayCard from "../../components/TodayCard"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/context"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"

export default function TodayPage() {
    const [todayHabits, setTodayHabits] = useState([])
    const { userData } = useContext(UserContext)

    let weekday = ''
    let day = ''

    function takeDate() {
        weekday = dayjs().locale('pt-br').format('dddd').replaceAll('-feira', '');
        weekday = weekday.replace(/^./, weekday[0].toUpperCase());
        day = dayjs().format('DD/MM');
        return { weekday, day };
    }
    takeDate()

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }

        const promise = axios.get(`${BASE_URL}/habits/today"`, config)
        promise.then((res) => {
            console.log(res.data)
            setTodayHabits(res.data)
        })
            .catch((err) => {
                console.log(err.response.data)
            })
    }, [])

    return (
        <>
            <Header />
            <Container>
                <TitleContainer>
                    <Title data-test="today">{weekday}, {day}</Title>
                    <SubTitle data-test="today-counter">Nenhum hábito concluído ainda</SubTitle>
                </TitleContainer>
                <div  data-test="today-habit-container">
                    {todayHabits.map((hab) => {
                        <TodayCard
                            key={hab.id}
                            habId={hab.id}
                            name={hab.name}
                            done={hab.done}
                            currentSequence={hab.currentSequence}
                            highestSequence={hab.highestSequence}
                        />
                    })}
                </div>
            </Container>
            <Footer />
        </>
    )
}