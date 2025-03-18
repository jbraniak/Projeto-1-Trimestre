document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('player-musica');

    const musicas = [
        { titulo: "Vampire", preview: "audios/vampire.mp3" },
        { titulo: "Drivers License", preview: "audios/drivers_license.mp3" },
        { titulo: "Good 4 U", preview: "audios/good_4_u.mp3" }
    ];

    const listaMusicas = document.getElementById('lista-musicas');

    musicas.forEach(musica => {
        let botao = document.createElement('button');
        botao.textContent = musica.titulo;
        botao.classList.add('botao-musica');
        botao.onclick = () => {
            if (audioPlayer.src !== musica.preview) {
                audioPlayer.src = musica.preview;
                audioPlayer.play();
            } else if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        };
        listaMusicas.appendChild(botao);
    });
});
