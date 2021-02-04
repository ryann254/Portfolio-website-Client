import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

//Own Components
import Api from '../../services/network'
import notify from '../../helpers/Notify'
import {AddUser} from '../../redux/action-creator/AuthActionCreator'
import {UpdateEvent} from '../../redux/action-creator/EventsActionCreator'


export default function ReusableModal({show, onHide, modalType, title, body}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [picture, setPicture] = useState('')
    const [eventTitle, setEventTitle] = useState('')
    const [description, setDescription] = useState('')
    const api = new Api()
    const dispatch = useDispatch()
    console.log(modalType)

    useEffect(() => {
        if (body !== undefined) {
            setPicture(body.picture)
            setEventTitle(body.title)
            setDescription(body.description)
        }
        // eslint-disable-next-line
    }, [body])

    const fillFields = () => {
        setEmail('ryan@example.com')
        setPassword("password1")
    }

    function handleSubmit(e) {
        e.preventDefault()
        //prepare the data before sending
        const data = {
            email,
            password
        }
        api.auth().login(data)
        .then(res => {
            if (res.status === 200){
                notify('success', 'Login was successful')
                notify('success', `Welcome ${email.slice(0, 4)}`)
                //Extract the tokens
                const {access, refresh} = res.data.tokens
                const {user} = res.data
                localStorage.setItem('jwtToken', access.token)
                localStorage.setItem('refreshToken', refresh.token)
                localStorage.setItem('currentUser', user.id)
                dispatch(AddUser(user))
                onHide()
            }
        })
        .catch(err => {
            if (err.response) {
                const {message} = err.response.data
                notify('error', message)
			} else {
				notify('error', 'Something went wrong, Please refresh the page.')
			}
        })

    }

    function handleUpdate(e) {
        e.preventDefault()

        const data = {
            picture,
            title: eventTitle,
            description
        }

        api.Events().updateEvent(body.id, data)
        .then(res => {
            if (res.status === 200) {
                notify('success', 'Event updated successfully')
                dispatch(UpdateEvent())
                onHide()
            }
        })
        .catch(err => {
            if (err.response) {
                const {message} = err.response.data
                notify('error', message)
			} else {
				notify('error', 'Something went wrong, Please refresh the page.')
			}
        })
    }

    function handleDelete() {
        
        if(body !== '') {
            api.Events().deleteEvent(body)
            .then(res => {
                if (res.status === 204) {
                    notify('success', 'Event deleted successfully')
                    dispatch(UpdateEvent())
                    onHide()
                }
            })
            .catch(err => {
                if (err.response) {
                    const {message} = err.response.data
                    notify('error', message)
                } else {
                    notify('error', 'Something went wrong, Please refresh the page.')
                }
            })
        }
    }

    return (
        <>    
            <Modal show={show} onHide={onHide} centered size={modalType === 'delete' ? 'sm' : 'md'}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === 'form' ? (
                        <Form>
                            <Form.Group>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your Email..." />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Your Password..." />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="d-flex mt-5 mx-auto" onClick={handleSubmit}>
                                Login
                            </Button>
                            <Button variant="warning" className="d-flex mt-3 mx-auto" onClick={fillFields}>Fill</Button>
                    </Form>
                    ): modalType === 'update' ? body !== '' ? (
                        <Form>
                            <Form.Group>
                                <Form.Control value={picture} onChange={(e) => setPicture(e.target.value)} type="text" placeholder="Add new link..." />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} type="text" placeholder="Add new title..." />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Add new description..." />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="d-flex mt-5 mx-auto" onClick={handleUpdate}>
                                Send
                            </Button>
                        </Form>
                    ): null : modalType === 'delete' ? (
                        <>
                        <Button variant="outline-primary" className="mr-3" onClick={onHide}>No</Button>
                        <Button variant="danger" onClick={handleDelete}>Yes</Button>
                        </>
                    ): null}

                </Modal.Body>
            </Modal>
      </>
    )
}
