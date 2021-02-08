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
    const [bodyTitle, setBodyTitle] = useState('')
    const [description, setDescription] = useState('')
    const api = new Api()
    const dispatch = useDispatch()

    useEffect(() => {
        if (body !== undefined) {
            setBodyTitle(body.title)
            setDescription(body.description)
        }

        return () => {
            setBodyTitle('')
            setDescription('')
            setEmail('')
            setPassword('')
        }
        // eslint-disable-next-line
    }, [body, modalType, onHide])

    const fillFields = () => {
        setEmail('mikemag.edu@gmail.com')
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
        const uploadUrl = 'https://api.cloudinary.com/v1_1/ryansimageupload/image/upload'

        const files = document.querySelector('[type=file]').files
        const formData = new FormData()
        let picData = {}

        for (let i = 0; i < files.length; i++) {
            let file = files[i]
            formData.append('file', file)
            formData.append('upload_preset', 'ml_default')

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

                //Check if the images object is empty before sending a request
                if (Object.keys(picData).length !== 0 && i === files.length - 1) {
                    const getUrl = 'https://res.cloudinary.com/ryansimageupload/image/upload'
                    let picUrl = `${getUrl}/v${picData[0].version}/${picData[0].public_id}.${picData[0].format}`

                    const data = {
                        picture: picUrl,
                        title: bodyTitle,
                        description
                    }

                    if (modalType === 'create event') {
                        api.Events().createEvent(data)
                        .then(res => {
                            if (res.status === 201) {
                                notify('success', 'Event created successfully')
                                //When an event is created and it has multiple values update the event with
                                //the event picture values
                                if (files.length > 1 && Object.keys(picData).length > 1) {
                                    let dataUrls = []
                                    Object.values(picData).map(item => {
                                        let picUrl =  `${getUrl}/v${item.version}/${item.public_id}.${item.format}`
                                        dataUrls.push(picUrl)
                                        return null;
                                    })
                                    //Prepare the data for sending
                                    let data = {
                                        picture: dataUrls.toString()
                                    }
                                    api.Events().updateEvent(res.data.id, data)
                                }
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
                    } else if (modalType === 'create news article') {
                        api.News().createNewsArtilce(data)
                        .then(res => {
                            if (res.status === 201) {
                                notify('success', 'News Article created successfully')
                                //When an event is created and it has multiple values update the event with
                                //the event picture values
                                if (files.length > 1 && Object.keys(picData).length > 1) {
                                    let dataUrls = []
                                    Object.values(picData).map(item => {
                                        let picUrl =  `${getUrl}/v${item.version}/${item.public_id}.${item.format}`
                                        dataUrls.push(picUrl)
                                        return null;
                                    })
                                    //Prepare the data for sending
                                    let data = {
                                        picture: dataUrls.toString()
                                    }
                                    api.News().updateNewsArtilce(res.data.id, data)
                                }
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
                    } else if (modalType === 'create job') {
                        api.Jobs().createJob(data)
                        .then(res => {
                            if (res.status === 201) {
                                notify('success', 'Job created successfully')
                                //When an event is created and it has multiple values update the event with
                                //the event picture values
                                if (files.length > 1 && Object.keys(picData).length > 1) {
                                    let dataUrls = []
                                    Object.values(picData).map(item => {
                                        let picUrl =  `${getUrl}/v${item.version}/${item.public_id}.${item.format}`
                                        dataUrls.push(picUrl)
                                        return null;
                                    })
                                    //Prepare the data for sending
                                    let data = {
                                        picture: dataUrls.toString()
                                    }
                                    api.Jobs().updateJob(res.data.id, data)
                                }
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
            })
        }
    }

    function handleDelete() {
        if(body !== '') {
            if (modalType === 'delete event') {
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
            } else if (modalType === 'delete news article') {
                api.News().deleteNewsArtilce(body)
                .then(res => {
                    if (res.status === 204) {
                        notify('success', 'News Article deleted successfully')
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
            } else if (modalType === 'delete job') {
                api.Jobs().deleteJob(body)
                .then(res => {
                    if (res.status === 204) {
                        notify('success', 'Job deleted successfully')
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
    }

    return (
        <>    
            <Modal show={show} onHide={onHide} centered size={modalType === 'delete event' || modalType === 'delete news article' || modalType === 'delete job' ? 'sm' : 'md'}>
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
                    ): modalType === 'create event' || modalType === 'create news article' || modalType === 'create job' ? (
                        <Form>
                            <Form.Group>
                                <Form.Control type="file" name="files[]" multiple/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control value={bodyTitle} onChange={(e) => setBodyTitle(e.target.value)} type="text" placeholder="Add new title..." />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="Add new description..." />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="d-flex mt-5 mx-auto" onClick={handleUpdate}>
                                Send
                            </Button>
                        </Form>
                    ) : modalType === 'delete event' || modalType === 'delete news article' || modalType === 'delete job'? (
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
