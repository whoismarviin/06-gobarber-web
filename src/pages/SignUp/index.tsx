import React,{useCallback,useRef} from 'react';
import {Background,Container,Content} from './styles';
import {FormHandles} from '@unform/core'
import LogoImg from '../../assets/logo.svg';
import {FiArrowLeft,FiMail,FiUser,FiLock} from 'react-icons/fi';
import Input from '../../components/inputs';
import Button from '../../components/button';
import {Form} from '@unform/web'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'


const SignUp : React.FC= () => {
    const formRef= useRef<FormHandles>(null)


    const handleSubmit= useCallback(async (data:object) => {
        try{

            const schema= Yup.object().shape({
                name: Yup.string().required('O nome é obrigatorio'),
                email:Yup.string().required('O campo de email é obrigatorio').email(),
                password: Yup.string().min(6,'no minimo 6 digitos')
            })

            await schema.validate(data,{
                abortEarly:false
            });
        }catch(err){
            const errors= getValidationErrors(err)

            formRef.current?.setErrors(errors)

        }
    },[])

    return (
        <Container >
        <Background/>
        <Content>
            <img src={LogoImg} alt="GoBarber"/>
            <Form ref={formRef} onSubmit={handleSubmit} >
                <h1>Faça o seu Cadastro</h1>
                <Input 
                name= 'name' 
                icon={FiUser}  
                placeholder= 'Nome'/>
                <Input name= 'email' icon={FiMail}  placeholder= 'email'/>
                <Input name = 'password' icon= {FiLock}type="password" placeholder= 'Senha'/>

                <Button type= 'submit'>Cadastrar</Button>

            </Form>

            <a href="Login"> 
            <FiArrowLeft/>
            Voltar</a>
        </Content>
    </Container>
    )
}

export default SignUp;