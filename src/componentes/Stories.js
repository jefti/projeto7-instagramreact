import Story from './Story'
export default function Stories(){
    const Lista = [
        {user: '9gag',imgLink:"./assets/img/9gag.svg"},
        {user: 'meowed',imgLink:"./assets/img/meowed.svg"},
        {user: 'barked',imgLink:"./assets/img/barked.svg"},
        {user: 'nathanwpylestrangeplanet',imgLink:"./assets/img/nathanwpylestrangeplanet.svg"},
        {user: 'respondeai',imgLink:"./assets/img/respondeai.svg"},
        {user: 'filomoderna',imgLink:"./assets/img/filomoderna.svg"},
        {user: 'memeriagourmet',imgLink:"./assets/img/memeriagourmet.svg"},
    ];

    const lista = Lista.map( el => <Story info={el} key={el.user} />)

    return (


        <div class="stories">
            {lista}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}