'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Contato() {
    let msg = 'Entre em contato:';
    // let cont = 0; // forma antiga
    const [cont, setCont] = useState(0);
    const [texto, setTexto] = useState('');
    // declare uma constante booleana com o nome de mostrar, com valor inicial true
    // faça o que está em cima, só que coloque o nome "mostrar"
    const [mostrar, setMostrar] = useState(true);

    const somar = () => {
        // cont++;
        // setCont(cont + 1);
        setCont(cont + 1);
        // setCont(prev => prev + 1);
        // setCont(prev => prev + 1);
        console.log('Contador: ' + cont);
    }

    return (
        <main>
            <h1>Contato</h1>
            <p>{msg}</p>
            <p>Contador: {cont}</p>
            <button onClick={() => somar()}>Somar</button>
            <button onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Esconder' : 'Mostrar'}</button> {/*Exiba o texto "Esconder" se a variável mostrar for verdadeira, e exiba o texto "Mostrar" se a variável for falsa*/}
            {mostrar && <form>
                <fieldset>
                    <p>{texto ? texto : 'Digite algum conteúdo'}</p>
                    <label htmlFor='msg'>Digite aqui: </label>
                    <input type="text" id='msg' name='msg' onKeyUp={(e) => setTexto(e.target.value)} />
                    <button type='button' onClick={() => alert(texto)}>Clique aqui</button>
                    {/* ao clicar no botão, dispare um alerta (alert) com o conteúdo digitado no input */}
                </fieldset>
            </form>
            }
        </main >
    )
}