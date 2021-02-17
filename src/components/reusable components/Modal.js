import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

//Own Components
import Api from '../../services/network'
import notify from '../../helpers/Notify'
import catchFn from '../../helpers/Catch'
import {AddUser} from '../../redux/action-creator/AuthActionCreator'
import {UpdateEvent} from '../../redux/action-creator/EventsActionCreator'


const ResetPassword = styled.div`
    color: #111;
    transition: all 0.5s ease-in;
    text-align: center;

    &:hover {
        color: #bbb;
        text-decoration: underline;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    .back {
        background-color: #ccc;
        outline: none;
        border: none;

        &:active, &:hover {
            background-color: #aaa !important;
            outline: none;
            border: none;
        }
    }
`

export default function ReusableModal({show, onHide, modalType, title, body}) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [bodyTitle, setBodyTitle] = useState('')
    const [description, setDescription] = useState('')
    const [forgot, setForgot] = useState(false)
    const [register, setRegister] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const api = new Api()
    const dispatch = useDispatch()

    useEffect(() => {
        if (body !== undefined) {
            setBodyTitle(body.title)
            setDescription(body.description)
        }

        return () => {
            clearFields()
        }
        // eslint-disable-next-line
    }, [body, modalType, onHide])

    const clearFields = () => {
        setBodyTitle('')
        setDescription('')
        setEmail('')
        setPassword('')
        setName('')
        setIsLoading(false)
    }

    const fillFields = () => {
        setEmail('mikemag.edu@gmail.com')
        setPassword("password1")
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
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
                setIsLoading(false)
                onHide()
            }
        })
        .catch(err => {
            setIsLoading(false)
            if (err.response) {
                const {message} = err.response.data
                notify('error', message)
			} else {
				notify('error', 'Something went wrong, Please refresh the page.')
			}
        })

    }

    const handleMultipleImages = async (picData, getUrl, type, message) => {
        let dataUrls = []
        Object.values(picData).map(item => {
            let picUrl =  `${getUrl}/v${item.version}/${item.public_id}.${item.format}`
            dataUrls.push(picUrl)
            return null;
        })
        //Prepare the data for sending
        let data = {
            picture: dataUrls.toString(),
            title: bodyTitle,
            description
        }
        try {
            if (type === 'event') {
                const response = await api.Events().createEvent(data)
            
                if (response.status === 201) {
                    notify('success', message)
                    dispatch(UpdateEvent())
                    setIsLoading(false)
                    onHide()
                }
            } else if (type === 'news') {
                const response = await api.News().createNewsArtilce(data)
            
                if (response.status === 201) {
                    notify('success', message)
                    dispatch(UpdateEvent())
                    setIsLoading(false)
                    onHide()
                }
            } else {
                const response = await api.Jobs().createJob(data)
            
                if (response.status === 201) {
                    notify('success', message)
                    dispatch(UpdateEvent())
                    setIsLoading(false)
                    onHide()
                }
            }
        } catch (error) {
            setIsLoading(false)
            catchFn(error)
        }
    }

    function handleUpdate(e) {
        e.preventDefault()
        const uploadUrl = 'https://api.cloudinary.com/v1_1/ryansimageupload/image/upload'

        const files = document.querySelector('[type=file]').files
        const formData = new FormData()
        let picData = {}

        for (let i = 0; i < files.length; i++) {
            let file = files[i]
            formData.append('file', file)
            formData.append('upload_preset', 'ml_default')
            setIsLoading(true)

            fetch(uploadUrl, {
                method: 'POST',
                body: formData
            })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                const {public_id, version, format} = data
                picData[i] = {public_id, version, format}
                console.log(Object.keys(picData).length !== 0)
                console.log(Object.keys(picData).length === files.length)
                console.log(picData[0] !== undefined)
                console.log(i === files.length - 1)

                //Check if the images object is empty before sending a request
                if (Object.keys(picData).length !== 0 && Object.keys(picData).length === files.length  && picData[0] !== undefined) {
                    const getUrl = 'https://res.cloudinary.com/ryansimageupload/image/upload'
                    let picUrl = `${getUrl}/v${picData[0].version}/${picData[0].public_id}.${picData[0].format}`

                    const data = {
                        picture: picUrl,
                        title: bodyTitle,
                        description
                    }

                    if (modalType === 'create event') {
                        //When an event is created and it has multiple values update the event with
                        //the event picture values
                        const message = 'Event created successfully'
                        if (files.length > 1 && Object.keys(picData).length > 1) {
                            handleMultipleImages(picData, getUrl, 'event', message)
                        } else if (files.length === 1 && Object.keys(picData).length === 1) {
                            api.Events().createEvent(data)
                            .then(res => {
                                if (res.status === 201) {
                                    notify('success', message)
                                    dispatch(UpdateEvent())
                                    setIsLoading(false)
                                    onHide()
                                }
                            })
                            .catch(err => {
                                setIsLoading(false)
                                catchFn(err)
                            })
                        }
                    } else if (modalType === 'create news article') {
                        //When an event is created and it has multiple values update the event with
                        //the event picture values
                        const message = 'News Article created successfully'
                        if (files.length > 1 && Object.keys(picData).length > 1) {
                            handleMultipleImages(picData, getUrl, 'news', message)
                        } else if (files.length === 1 && Object.keys(picData).length === 1) {
                            api.News().createNewsArtilce(data)
                            .then(res => {
                                if (res.status === 201) {
                                    notify('success', message)
                                    dispatch(UpdateEvent())
                                    setIsLoading(false)
                                    onHide()
                                }
                            })
                            .catch(err => {
                                setIsLoading(false)
                                catchFn(err)
                            })
                        }
                    } else if (modalType === 'create job') {
                        //When an event is created and it has multiple values update the event with
                        //the event picture values
                        const message = 'Job created successfully'
                        if (files.length > 1 && Object.keys(picData).length > 1) {
                            handleMultipleImages(picData, getUrl, 'job', message)
                        } else if (files.length === 1 && Object.keys(picData).length === 1) {
                            api.Jobs().createJob(data)
                            .then(res => {
                                if (res.status === 201) {
                                    notify('success', message)
                                    dispatch(UpdateEvent())
                                    setIsLoading(false)
                                    onHide()
                                }
                            })
                            .catch(err => {
                                setIsLoading(false)
                                catchFn(err)
                            })
                        }
                    }
                }
            })
        }
    }

    function handleDelete() {
        if(body !== '') {
            if (modalType === 'delete event') {
                setIsLoading(true)
                api.Events().deleteEvent(body)
                .then(res => {
                    if (res.status === 204) {
                        notify('success', 'Event deleted successfully')
                        dispatch(UpdateEvent())
                        onHide()
                    }
                })
                .catch(err => {
                    setIsLoading(false)
                    catchFn(err)
                })
            } else if (modalType === 'delete news article') {
                setIsLoading(true)
                api.News().deleteNewsArtilce(body)
                .then(res => {
                    if (res.status === 204) {
                        notify('success', 'News Article deleted successfully')
                        dispatch(UpdateEvent())
                        setIsLoading(false)
                        onHide()
                    }
                })
                .catch(err => {
                    setIsLoading(false)
                    catchFn(err)
                })
            } else if (modalType === 'delete job') {
                setIsLoading(true)
                api.Jobs().deleteJob(body)
                .then(res => {
                    if (res.status === 204) {
                        notify('success', 'Job deleted successfully')
                        dispatch(UpdateEvent())
                        setIsLoading(false)
                        onHide()
                    }
                })
                .catch(err => {
                    setIsLoading(false)
                    catchFn(err)
                })
            }
        }
    }

    function handleForgotPassword(e) {
        e.preventDefault()

        let data = {
            email
        } 

        if (data.email === '')  {
            notify('error', 'You need to key in your email')
        } else {
            setIsLoading(true)
            api.auth().forgotPassword(data)
            .then((res) => {
                if (res.status === 204) {
                    notify('success', 'Success')
                    notify('info', 'Please check your email for further details')
                    setForgot(false)
                    setIsLoading(false)
                    onHide()
                }
            })
            .catch(err => {
                setIsLoading(false)
                catchFn(err)
            })
        }
    }

    function handleRegister(e) {
        e.preventDefault()

        let data = {
            name,
            email,
            password
        }
        setIsLoading(true)
        api.auth().registerUser(data)
        .then(res => {
            if (res.status === 201) {
                notify('success', 'User account created successfully')
                onHide()
                setRegister(false)
                setIsLoading(false)
                notify('info', 'You can now login into your account')
            }
        })
        .catch(err => {
            setIsLoading(false)
            catchFn(err)
        })
    }

    return (
        <>    
            <Modal show={show} onHide={onHide} centered size={modalType === 'delete event' || modalType === 'delete news article' || modalType === 'delete job' ? 'sm' : 'md'}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === 'form' ? forgot ? (
                        <Form>
                            <Form.Group>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your Email..." />
                            </Form.Group>
                            <Buttons>
                                <Button variant="primary" disabled={isLoading} type="submit" className="d-flex mr-3" onClick={handleForgotPassword}>
                                    {isLoading ? 'Loading...' : 'Send'}
                                </Button>
                                <Button className="back" onClick={() => setForgot(false)}>Back to Login</Button>
                            </Buttons>
                        </Form>
                    ) : register ? (
                        <Form>
                            <Form.Group>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder="Your Name..." />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your Email..." />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Your Password..." />
                            </Form.Group>
                            <Buttons>
                                <Button variant="primary" disabled={isLoading} type="submit" className="d-flex mr-3" onClick={handleRegister}>
                                    {isLoading ? 'Loading...' : 'Submit'}
                                </Button>
                                <Button className="back" onClick={() => setRegister(false)}>Back to Login</Button>
                            </Buttons>
                        </Form>
                    ) : 
                    (
                        <Form>
                            <Form.Group>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your Email..." />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Your Password..." />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <ResetPassword onClick={() => setForgot(true)} className="mr-2">Forgot Password</ResetPassword>
                                <span> | </span>
                                <ResetPassword onClick={() => setRegister(true)} className="ml-2">Register with us</ResetPassword>
                            </div>
                            <Button variant="primary" disabled={isLoading} type="submit" className="d-flex mt-4 mx-auto" onClick={handleSubmit}>
                                {isLoading ? 'Loading...' : 'Login'}
                            </Button>
                            <Button variant="warning" className="d-flex mt-3 mx-auto" onClick={fillFields}>Fill</Button>
                    </Form>
                    ): modalType === 'create event' || modalType === 'create news article' || modalType === 'create job' ? (
                        <Form>
                            <Form.Group>
                                <Form.Control type="file" name="files[]" multiple required/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control value={bodyTitle} onChange={(e) => setBodyTitle(e.target.value)} type="text" required placeholder="Add new title..." />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} required placeholder="Add new description..." />
                            </Form.Group>

                            <Button variant="primary" disabled={isLoading} type="submit" className="d-flex mt-4 mx-auto" onClick={handleUpdate}>
                                {isLoading ? 'Loading...' : 'Send'}
                            </Button>
                        </Form>
                    ) : modalType === 'delete event' || modalType === 'delete news article' || modalType === 'delete job'? (
                        <>
                        <Button variant="outline-primary" className="mr-3" onClick={onHide}>No</Button>
                        <Button variant="danger" disabled={isLoading} onClick={handleDelete}>{isLoading ? 'Loading...' : 'Yes'}</Button>
                        </>
                    ): null}

                </Modal.Body>
            </Modal>
      </>
    )
}
