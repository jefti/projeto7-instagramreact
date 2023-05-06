import Suggestion from './Suggestion'

export default function Suggestions (){
    const Lista=[
      {nome:'bad.vibes.memes', razao:'Segue você',img:'assets/img/bad.vibes.memes.svg'},
      {nome:'chibirdart', razao:'Segue você',img:'assets/img/chibirdart.svg'},
      {nome:'razoesparaacreditar', razao:'Novo no Instagram', img:'assets/img/razoesparaacreditar.svg'},
      {nome:'adorable_animals', razao:'Segue você', img:'assets/img/adorable_animals.svg'},
      {nome:'smallcutecats', razao:'Segue você', img:'assets/img/smallcutecats.svg'},
    ]
  
    let lista = Lista.map( el => <Suggestion info={el} key={el.nome}/>)
  
  return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {lista}


        </div> 
    )
}