
export default function Buscar(props){
    return(
        <div className='col-12 text-center mb-3'>
                    <p>buscar</p>
                    <input type='text' value={props.valor} onChange={props.setValor}/>
                </div>
    )
}