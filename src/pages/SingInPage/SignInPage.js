import { Container, FormContainer, Input, Button } from "./style"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import axios from "axios"
import { useState, useContext } from "react"
import { ThreeDots } from "react-loader-spinner"
import { UserContext } from "../../context/context"
import {BASE_URL} from "../../constants/urls"

export default function SignInPage() {
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [disabled, setDisabled] = useState(false)

    function handleForm(e) {
        e.preventDefault()

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function login(e) {
        e.preventDefault()

        const promise = axios.post(`${BASE_URL}/auth/login`, form)
        promise.then((res) => {
            navigate("/hoje")
            setUserData(res.data)
            console.log(res.data)
            setDisabled(true)
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setDisabled(false)
        })
    }


    return (
        <Container>
            <img src={logo} alt="logo" />
            <FormContainer>
                <form onSubmit={login}>
                    <Input data-test="email-input" name="email" onChange={handleForm} value={form.email} disabled={disabled} type="email" placeholder="email" required />
                    <Input data-test="password-input" name="password" onChange={handleForm} value={form.password} disabled={disabled} type="password" placeholder="senha" required />
                    <Button data-test="login-btn" disabled={disabled} type="submit">
                        {disabled ? <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#ffffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        /> : <p>Entrar</p>}
                    </Button>
                </form>
                <Link data-test="signup-link" to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </FormContainer>
        </Container>
    )
}