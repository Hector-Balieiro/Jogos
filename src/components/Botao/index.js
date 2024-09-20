
export default function Button(props){
    return(
        <button className={props.className + ' m-1'} onClick={props.funcao}>{props.nome}</button>
    )
    
}