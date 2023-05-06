import React from "react";
import useState from "react";

export default function User(){
const [nome, setNome] = React.useState('catanacomics');
const [imagem, setImagem] = React.useState('assets/img/catanacomics.svg');

    function registraUsuario(){
        const nome = prompt('informe um nome de usuario :');
        if (nome){
            setNome(nome);
        }
    }

    function trocaImagem(){
        const link = prompt('informe um link válido :');
        if (link){
            setImagem(link);
        }
    }
    return (
        <div class="usuario">
            <img src={imagem} alt="imagem de perfil" onClick={trocaImagem}/>
            <div class="texto">
            <span>
                <strong>{nome}</strong>
                <ion-icon name="pencil" onClick={registraUsuario}></ion-icon>
            </span>
            </div>
        </div>
    )
}