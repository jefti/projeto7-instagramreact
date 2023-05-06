export default function Suggestion(props){
    const {nome, razao, img} = props.info;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} alt={nome}/>
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
      </div>
    )
}