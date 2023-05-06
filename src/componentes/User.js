import React from "react";
import useState from "react";

export default function User(){
const [nome, setNome] = React.useState('catanacomics');
    function registraUsuario(){
        const nome = prompt('informe um nome de usuario :');
        if (nome){
            setNome(nome);
        }
    }
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
            <div class="texto">
            <span>
                <strong>{nome}</strong>
                <ion-icon name="pencil" onClick={registraUsuario}></ion-icon>
            </span>
            </div>
        </div>
    )
}