import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Login = () => {


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLogin = ((e) =>{
        e.preventDefault()

        if(email === "admin" && senha === "4321"){
            <Link to='/show' />
            alert('Usuario logado com sucesso!')
            

        }else{
            alert('Email ou senha errado')
        }
    })


  return (
    <div >
        <Container>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Digite seu email" 
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Digite sua senha" 
                    value={senha}
                    onChange={(e) => {setSenha(e.target.value)}}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default Login