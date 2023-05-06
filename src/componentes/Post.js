import React from "react";
import { useState } from "react";

export default function Post(props){
  const {userName, userImg, postImg, Like, likeNum, likeImg} = props.info;

   const [heart, setHeart] = React.useState('heart-outline');
   const [bookmark, setBookMark] = React.useState('bookmark-outline');
  const [NumeroLikes,setLikes] = React.useState(likeNum);

    
    function mudarHeart(){
      if(heart === 'heart-outline' ){
        setHeart('heart');
        setLikes(Number(NumeroLikes)+1);

      } else {
        setHeart('heart-outline')
        setLikes(Number(NumeroLikes)-1);
      }
    }
    
    function mudarBookMark(){
      if(bookmark === 'bookmark-outline' ){
        setBookMark('bookmark')
      } else {
        setBookMark('bookmark-outline')
      }
    }


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
          <img src={postImg} alt={userName} onClick={mudarHeart}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name={heart} onClick={mudarHeart} ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={bookmark} onClick={mudarBookMark}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={likeImg} alt="respondeai"/>
            <div class="texto">
                Curtido por <strong>{Like}</strong> e <strong>outras <>{NumeroLikes}</> pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}