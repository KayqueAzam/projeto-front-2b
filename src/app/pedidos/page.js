'use client'
import { useEffect, useState } from "react"

export default function Produtos() {

    const [prods, setProds] = useState(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
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
        <div>
            {
                prods === null ?
                <p>Carregando lista de produtos...</p> :
                <div>
                    <h2>Lista de produtos</h2>
                </div>
             }
        </div>
    )
}