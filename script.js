// script.js

// Acessibilidade: Modo Alto Contraste
document.getElementById('modo-contraste').addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
});

// Reproduzir prévia de músicas
const audioPlayer = document.createElement('audio');

function tocarMusica(previewUrl) {
    if (audioPlayer.src !== previewUrl) {
        audioPlayer.src = previewUrl;
        audioPlayer.play();
    } else if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// Lista de músicas
const musicas = [
    { titulo: "Vampire", preview: "link-da-musica.mp3" },
    { titulo: "Drivers License", preview: "link-da-musica.mp3" },
    { titulo: "Good 4 U", preview: "link-da-musica.mp3" }
];

const listaMusicas = document.getElementById('lista-musicas');

musicas.forEach(musica => {
    let item = document.createElement('button');
    item.textContent = musica.titulo;
    item.classList.add('botao-musica');
    item.onclick = () => tocarMusica(musica.preview);
    listaMusicas.appendChild(item);
});
