import React from 'react';

// Caso não utilize o Link, o programa vai renderizar toda a página ao invés de trocar os components, o que não faz parte do conceito de SPA.
import { Link } from 'react-router-dom'

//importando icone do pacote ract-icon como component 
import { FiLogIn } from 'react-icons/fi'

import './stylesLogon.css';

// images
import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';


export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be the Hero logo" />

                <form> 
                    <h1>
                        Faça seu Logon
                    </h1>
                    <input placeholder="Sua ID" />
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