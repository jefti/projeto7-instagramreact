export default function Story(props){
    const {user, imgLink} = props.info;

    return (

        <div class="story">
            <div class="imagem">
                <img src= {imgLink} alt={user}/>
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>

    )
}