const imagemUrl = "imgs/carbon_user-avatar-filled-cinza.png";

const container = document.getElementById('container__conteudo--vetores');

for (let i = 0; i < 10; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = imagemUrl;
    container.appendChild(imgElement)
}


var myModal = new bootstrap.Modal(document.getElementById('myModal'));