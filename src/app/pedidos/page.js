'use client'
import { useEffect, useState } from "react"
import styles from './page.module.css'

export default function Produtos() {

    const [prods, setProds] = useState(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos' );
                console.log(response);
                if (!response) {
                    throw new Error(`Erro ao buscar produtos ${response.statusText}`)
                }
                const data = await response.json();
                console.log(data)
                setProds(data)
            } catch (e) {
                console.log(e.message)
            }
        }
        fetchProdutos();
    }, []);

    return (
        <div className={styles.container}>
            {
                prods === null ?
                <p className={styles.loading}>Carregando lista de produtos...</p> :
                <div className={styles.content}>
                    <h2 className={styles.title}>Lista de produtos</h2>
                    
                    <table className={styles.table}>
                        <thead>
                            <tr>
                               <th>ID</th>
                               <th>Nome</th>
                               <th>Descrição</th>
                               <th>Preço</th>
                               <th>Estoque</th>
                               <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prods.map((prod) => (
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.nome}</td>
                                        <td>{prod.descricao}</td>
                                        <td>{prod.preco}</td>
                                        <td>{prod.quantidade_estoque}</td>
                                        <td>{prod.categoria_id}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> 
                    
                    {/*
                        categoria_id: 1,
                        descricao: 'Notebook com processador Intel Core i5 e 8GB de RAM'
                        id: 1
                        nome: boneco de 67
                        preco: 3299.90
                        quantidade_estoque: 2
                     */}
                </div>
             }
        </div>
    )
}
