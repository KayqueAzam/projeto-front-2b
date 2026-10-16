'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Sobre() {
    const [num, setNum] = useState(0);
    const nomes = ['João', 'Ana', 'José', 'Vitória', 'Big', 'Ana'];

    useEffect(() => {
        console.log('Componente renderizado');
        document.title = 'Use Effect';
    }, [num])
    return (
        <main>
            <h1>Sobre - número {num}</h1>
            <button onClick={() => { setNum(num + 1) }}>Adicionar 1</button>
            <p className={styles.paragrafo}>Página sobre</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {nomes.map((nome, id) => (
                        // linha da tabela
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}