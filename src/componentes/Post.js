export default function Post(props){
    
    const {userName, userImg, postImg, Like, likeNum, likeImg} = props.info;
    
    return (
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={userImg} alt={userName}/>
            {userName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={postImg} alt={userName}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={likeImg} alt="respondeai"/>
            <div class="texto">
                Curtido por <strong>{Like}</strong> e <strong>outras {likeNum} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}