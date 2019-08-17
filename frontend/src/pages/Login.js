import React, {useState} from 'react';
import logo2 from '../assets/logo2.svg';
import './Login.css';
import api from '../services/api';

export default function Login({history}){
    const [username, setUsername] = useState('');

   async function handleSubmit(e){
        e.preventDefault();
        
        const response = await api.post('/devs',{
            username,  
        });

        const { _id } = response.data;
        history.push(`/dev/${_id}`);
    }

    return(
        <div className= 'login-container'>
            <form onSubmit ={handleSubmit}>
            <img src={logo2} alt='logo'/>
            <input 
                placeholder = "Digite seu usuário do Github"
                value = {username}
                onChange={e => setUsername(e.target.value)}

            />
            <button type="submit">Entrar</button>
            </form>
        </div>
        
    );
}

