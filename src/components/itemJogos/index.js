import jogosExclusivos from '../dados/index.js'
import {useState} from 'react'
export default function ItemJogos (){
    const [filtered,setFiltered] =useState(jogosExclusivos)

    function unique(plataforma){

        let items;
        if(plataforma === 'xbox'){
            items = jogosExclusivos.filter(item => item.plataforma === 'xbox')
        }
        if(plataforma === 'playstation'){
            items = jogosExclusivos.filter(item => item.plataforma === 'playstation')
        }
        if(plataforma === 'nintendo'){
            items = jogosExclusivos.filter(item => item.plataforma === 'nintendo')
        }
        if(plataforma === ''){
            items = jogosExclusivos
        }
        setFiltered(items)
    }
    console.log(filtered)

    return(
        <div className='row col-12 borda align-items-center'>
            
            <div>
                <div className="botao text-center mb-4">
            <button onClick={()=>unique('xbox')}>Xbox</button>
            <button onClick={()=>unique('playstation')}>Playstation</button>
            <button onClick={()=>unique('nintendo')}>Nintendo</button>
            <button onClick={()=>unique('')}>Limpar filtro</button>
            </div>
            {
                filtered.map((jogo,index)=>{
                    return(
                    <div key={index} className='col-4 d-flex m-auto border justify-content-center'>
                        <p> {`Jogo: ${jogo.nome}`}</p>
                        <p className='ms-2'> {`Plataforma: ${jogo.plataforma}`}</p>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}