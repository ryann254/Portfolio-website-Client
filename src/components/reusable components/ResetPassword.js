import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import {ToastContainer} from 'react-toastify'

//Own Components
import Api from "../../services/network";
import notify from '../../helpers/Notify'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    form {
        max-width: 400px
    }

    .back {
        background-color: #ccc;
        border-color: #ccc;
        color: #000;
    }
`
const Title = styled.h2`
    font-size: 2.1rem;
    color: #acacac;
    margin-bottom: 10px;
`

export default function ResetPassword() {
    const [password, setPassword] = useState('')
    //When you click send a button appears to take you back
    //to the homepage
    const [resetDone, setResetDone] = useState(false)
    let history = useHistory()

    const backToLogin = (e) => {
        e.preventDefault()
        history.push('/login')
    }

    function handleReset(e) {
        e.preventDefault()
        if (password === '') {
            notify('error', 'Fill in the required field')
        } else {
            const data = {
                password
            }
    
            const api = new Api()
            api.auth().resetPassword(data)
            .then((res) => {
                if (res.status === 204) {
                    notify('success', 'Success, You can go back and login now.')
                    setResetDone(true)
                }
            })
            .catch((err) => {
                if (err && err.response){
                    const {message, code} = err.response.data
                    notify('error', message)
                    if (code === 401) {
                        notify('warning', 'Your reset password token may have expired, click Back to go to the login page and click on forgot password to try again')
                    }
                }
            })
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Container>
                {resetDone ? 
                <Button className="back" onClick={backToLogin} type="button">
                    Go Back and Login
                </Button>
                :
                <Form>
                    <Title>Hi, <br/>Kindly Type in Your New Pasword</Title>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                    </Form.Group>
                    <Button variant="primary" onClick={handleReset} type="submit">
                        Send
                    </Button>
                    <Button className="ml-4 back" onClick={backToLogin} type="button">
                        Back
                    </Button>
                    
                </Form>
                }
            </Container>
        </>
    )
}
