import styled from "styled-components"
import { useContext } from "react"
import { UserContext } from "../context/context"

export default function Header(){
    const {userData} = useContext(UserContext)
    return(
        <Headers data-test="header">
            <HeaderTitle>TrackIt</HeaderTitle>
            <ProfilePicture src={userData.image} alt="profile-picture" />
        </Headers>
    )
}

const Headers = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
`
const ProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
`
const HeaderTitle = styled.p`
    font-family: 'Playball', cursive;
    color: white;
    font-size: 40px;
    margin-left: 20px;
`