import jogosExclusivos from '../dados/index.js'
import { useState } from 'react'
import './jogos.css'
import Button from '../Botao';
import Buscar from '../Buscar';
export default function ItemJogos() {
    const [filtered, setFiltered] = useState(jogosExclusivos)
    const [findValue,setFindValue] = useState()

    function unique(plataforma) {

        let items;
        if (plataforma === 'xbox') {
            items = jogosExclusivos.filter(item => item.plataforma === 'xbox')
        }
        if (plataforma === 'playstation') {
            items = jogosExclusivos.filter(item => item.plataforma === 'playstation')
        }
        if (plataforma === 'nintendo') {
            items = jogosExclusivos.filter(item => item.plataforma === 'nintendo')
        }
        if (plataforma === '') {
            items = jogosExclusivos
        }
        setFiltered(items)
    }
    console.log(filtered)

    const dados = findValue ? filtered.filter(item => item.nome.toLowerCase().includes(findValue.toLowerCase())): filtered
    return (
        <div className='row borda justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6'>
                <h3 className='text-center'>Lista de Jogos Exclusivos</h3>
                <div className="text-center mb-4">
                    <Button className='col-lg-2 col-md-3 col-4 btn btn-outline-success' funcao={()=>unique('xbox')} nome="Xbox"/>
                    <Button className='col-lg-2 col-md-3 col-4 btn btn-outline-primary' funcao={() => unique('playstation')} nome="Playstation"/>
                    <Button className='col-lg-2 col-md-3 col-4 btn btn-outline-danger' funcao={() => unique('nintendo')} nome="Nintendo"/>
                    <Button className='col-lg-2 col-md-3 col-4 btn btn-outline-dark' funcao={() => unique('')} nome="Limpar"/>
                </div>

                <Buscar valor={findValue} setValor={(e)=> setFindValue(e.target.value)}/>
                {
                    dados.map((jogo, index) => {
                        return (
                            <div key={index} class="card mb-3">
                                <div class="row  altura">
                                    <div class="w-10 pe-0" >
                                        <img className="img-fluid h-100 rounded-start altura w-100" src={jogo.plataforma === 'xbox' ? "xbox.png"
                                            : jogo.plataforma === 'nintendo' ? 'nintendo.png'
                                                : 'playstation.png'} style={jogo.plataforma === 'xbox'? {backgroundColor:'green'} : jogo.plataforma === 'nintendo' ?{backgroundColor:'red'}: {backgroundColor:'white'}} />
                                    </div>
                                    <div class="w-90 ps-0">
                                        <div class="card-body cor-fundo altura rounded-end">
                                        <p>{jogo.nome}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}