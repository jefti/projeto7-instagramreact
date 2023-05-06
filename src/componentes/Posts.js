import Post from './Post'
export default function Posts(){
  const Lista=[
    { userName:'meowed',userImg:'assets/img/meowed.svg',postImg:'assets/img/gato-telefone.svg',Like:'respondeai' ,likeNum:'564', likeImg:'assets/img/respondeai.svg' },
    { userName:'barked',userImg:'assets/img/barked.svg',postImg:'assets/img/dog.svg',Like:'adorable_animals' ,likeNum:'996' , likeImg:'assets/img/adorable_animals.svg'},
    { userName:'barked',userImg:'assets/img/barked.svg',postImg:'https://http2.mlstatic.com/D_NQ_NP_718509-MLU50424130562_062022-W.jpg',Like:'Otaku_fedido' ,likeNum:'832', likeImg:'assets/img/adorable_animals.svg' }
  ];
  
  const lista = Lista.map (el => <Post info={el} key={el.userName}/>);

    return (
    <div class="posts">
  
      {lista}

    </div>
    )
}