import React from 'react';
import {Background,Container,Content} from './styles';
import LogoImg from '../../assets/logo.svg';
import {FiLogIn,FiMail,FiLock} from 'react-icons/fi';
import Input from '../../components/inputs';
import Button from '../../components/button';



const SignIn : React.FC= () => (

    <Container>
        <Content>
            <img src={LogoImg} alt="GoBarber"/>
            <form>
                <h1>Faça o seu Logon</h1>
                <Input name= 'Email' icon={FiMail}  placeholder= 'E-mail'/>
                <Input name = 'Password' icon= {FiLock}type="password" placeholder= 'Senha'/>

                <Button type= 'submit'>Entrar</Button>
               <a href="forgot">Esqueci a minha senha</a>
            </form>

            <a href="Create"> 
            <FiLogIn/>
            Criar Conta</a>
        </Content>
        <Background/>
    </Container>

);

export default SignIn