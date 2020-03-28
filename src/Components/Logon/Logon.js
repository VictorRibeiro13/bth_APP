import React, { useState } from 'react';
// Caso não utilize o Link, o programa vai renderizar toda a página ao invés de trocar os components, o que não faz parte do conceito de SPA.
import { Link, useHistory } from 'react-router-dom'
//importando icone do pacote ract-icon como component 
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './stylesLogon.css';

// images
import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';


export default function Logon(){
    const [id, setId] = useState(0);
    const history = useHistory();

    async function handleLogin(event){
        event.preventDefault();

        try {
            const response = await api.post('session', { id });
            
            // como é necessário ter esses dados durante toda a navegação, esses dados ficam armeazenados no navegador
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }catch{
            alert("Falha no login tente novamente");
        }

    }


    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be the Hero logo" />

                <form onSubmit={handleLogin}> 
                    <h1>
                        Faça seu Logon
                    </h1>
                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e=> setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImage} alt="heroes"/>
        </div>
    )
}