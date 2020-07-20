// Transição do fade do menu
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.nav').classList.add("black");
  } else {
    document.querySelector('nav').classList.remove("black");
  }
}

// Áudio
var v = document.getElementsByTagName("audio")[0];
v.play();


// **Ações a partir do clique nos itens **

document.getElementById('item-1').onclick = function printItens() {

  //  Seleciona o Item Colocando a Borda Branca
  const iten1 = document.getElementById('item-1').classList.add("item-Js")
  const iten2 = document.getElementById('item-2').classList.remove("item-Js")
  const iten3 = document.getElementById('item-3').classList.remove("item-Js")
  const iten4 = document.getElementById('item-4').classList.remove("item-Js")


  // Troca o Background para a foto do Item.
  document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/robots-img.png')";

  // Incere as informações do Item selecionado.

  //...

}

document.getElementById('item-2').onclick = function printItens() {

  //  Seleciona o Item Colocando a Borda Branca
  const iten1 = document.getElementById('item-1').classList.remove("item-Js")
  const iten2 = document.getElementById('item-2').classList.add("item-Js")
  const iten3 = document.getElementById('item-3').classList.remove("item-Js")
  const iten4 = document.getElementById('item-4').classList.remove("item-Js")

  // Troca o Background para a foto do Item.
  document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/img-item/item-second-article1.jpg')";

  // Incere as informações do Item selecionado.

  //...

}

document.getElementById('item-3').onclick = function printItens() {

  //  Seleciona o Item Colocando a Borda Branca
  const iten1 = document.getElementById('item-1').classList.remove("item-Js")
  const iten2 = document.getElementById('item-2').classList.remove("item-Js")
  const iten3 = document.getElementById('item-3').classList.add("item-Js")
  const iten4 = document.getElementById('item-4').classList.remove("item-Js")

  // Troca o Background para a foto do Item.
  document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/img-item/item-third-article1.jpg')";

  // Incere as informações do Item selecionado.

  //...

}
document.getElementById('item-4').onclick = function printItens() {

  //  Seleciona o Item Colocando a Borda Branca
  const iten1 = document.getElementById('item-1').classList.remove("item-Js")
  const iten2 = document.getElementById('item-2').classList.remove("item-Js")
  const iten3 = document.getElementById('item-3').classList.remove("item-Js")
  const iten4 = document.getElementById('item-4').classList.add("item-Js")

  // Troca o Background para a foto do Item.
  document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/img-item/item-first-article2.jpg')";

  // Incere as informações do Item selecionado.

  //...
}
