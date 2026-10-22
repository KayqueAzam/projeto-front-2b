'use client'; // diretiva que informa ao react que o código está sendo renderizado no lado do cliente
import Link from 'next/link'; // importações
import styles from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const menu = ['/', '/sobre', '/contato', '/pedidos'];
    const [srcMenu, setSrcMenu] = useState('/icons/open.svg'); // estado

    return (
        <div>
            <button type='button' onClick={() => setSrcMenu(srcMenu === '/icons/open.svg' ? '/icons/close.svg' : '/icons/open.svg')} className={styles.btn}> {/*botão com evento*/}
                <Image src={srcMenu} width={30} height={30} alt='menu' />
            </button>

            {
                srcMenu === '/icons/close.svg' && // renderização condicional
                < header className={styles.header}>
                    <nav>
                        <ul>
                            <li><Link href={menu[0]}>Home</Link></li>
                            <li><Link href={menu[1]}>Sobre</Link></li>
                            <li><Link href={menu[2]}>Contato</Link></li>
                            <li><Link href={menu[3]}>Pedidos</Link></li>
                        </ul>
                    </nav>
                </header>
            }

        </div >
    )
}