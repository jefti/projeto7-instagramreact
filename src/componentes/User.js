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
            <img src={imagem} alt="imagem de perfil" onClick={trocaImagem} data-test='profile-image'/>
            <div class="texto">
            <span>
                <strong data-test="name">{nome}</strong>
                <ion-icon name="pencil" onClick={registraUsuario} data-test="edit-name"></ion-icon>
            </span>
            </div>
        </div>
    )
}