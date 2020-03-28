/**
 *  TODOS OS COMPONENTS DEVEM TER LETRA MAISCÚLAS NO INICIO
 * 
 *  Component Header -> Retorna um header html
 * 
 */

 import React from 'react';

 export default function Header(props){
     return(
        <header>
            {/* Variaveis e parametros devem ser inseridas dentro de chaves */}
            <h1>{props.title}</h1> 
        </header>
     );
 }