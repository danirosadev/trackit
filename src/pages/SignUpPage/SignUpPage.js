import {BASE_URL} from "../../constants/urls"
import {Container, FormContainer, Input, Button} from "./style"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function SignUpPage(){
    const [form, setForm] = useState({
        email:"",
        name: "",
        image:"",
        password:""
    })
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)

    function handleForm(e){
        e.preventDefault()

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function userRegister(e){
        e.preventDefault()

        const promise = axios.post(`${BASE_URL}/auth/sign-up`, form)
        promise.then(() => {
            navigate("/")
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
                <form onSubmit={userRegister}>
                    <Input data-test="email-input" name="email" onChange={handleForm} value={form.email} disabled={disabled} type="email" placeholder="email" required/>
                    <Input data-test="password-input" name="password" onChange={handleForm} value={form.password} disabled={disabled} type="password" placeholder="senha" required/>
                    <Input data-test="user-name-input" name="name" onChange={handleForm} value={form.name} disabled={disabled} type="text" placeholder="nome" required/>
                    <Input data-test="user-image-input " name="image" onChange={handleForm} value={form.image} disabled={disabled} type="url" placeholder="foto" required/>
                    <Button data-test="signup-btn" disabled={disabled} type="submit">
                    { disabled ? <ThreeDots
                            height="80" 
                            width="80" 
                            radius="9"
                            color="#ffffff" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                            /> : <p>Cadastrar</p>}
                    </Button>
                </form>
                <Link data-test="login-link" to="/">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </FormContainer>
        </Container>
    )
}