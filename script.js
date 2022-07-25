function rosa() {
  limpar();
  document.getElementById("titulo").classList.add('rosa');
}

function lilas() {
  limpar();
  document.getElementById("titulo").classList.add('lilas');
}

function verde() {
  limpar();
  document.getElementById("titulo").classList.add('verde');
}

function azul() {
  limpar();
  document.getElementById("titulo").classList.add('azul');
}

function limpar () {
  document.getElementById("titulo").classList.remove("rosa");
  document.getElementById("titulo").classList.remove("lilas");
  document.getElementById("titulo").classList.remove('azul');
  document.getElementById("titulo").classList.remove('verde');
}

function mostrarBotao() {
  document.getElementById("conteudo").style.display='block';
}

function esconderSite() {
  document.getElementById("conteudo").style.display='none';
}