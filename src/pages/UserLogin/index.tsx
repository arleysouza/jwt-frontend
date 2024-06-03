import { useState } from "react";
import useUser from "../../hooks/useUser";
import styled from "styled-components";
import { Title, Input, Button } from "../../components";

export default function UserLogin(){
    const [mail,setMail] = useState("pedro@teste.com");
    const [password,setPassword] = useState("123456");
    const { login, setError } = useUser();

    const handleLogin = () => {
        if( !mail ){
            setError({message:"Forneça o e-mail"});
        }
        else if( !password ){
            setError({message:"Forneça a senha"});
        }
        else{
            login(mail,password);
        }
    }

    return (
        <Wrapper>
            <Title>Login</Title>
            <Input type="text" id="mail" label="e-mail" value={mail} setValue={setMail} />
            <Input type="password" id="password" label="Senha" value={password} setValue={setPassword} />
            <LineSld>
                <Button label="Logar" click={handleLogin} />    
            </LineSld>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const LineSld = styled.div`
    display: flex;
    margin-top: 10px;
`;