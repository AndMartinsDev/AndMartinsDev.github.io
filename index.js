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

// document.getElementById('item-1').onclick = function printItens() {

//   //  Seleciona o Item Colocando a Borda Branca
//   const iten1 = document.getElementById('item-1').classList.add("item-Js")
//   const iten2 = document.getElementById('item-2').classList.remove("item-Js")
//   const iten3 = document.getElementById('item-3').classList.remove("item-Js")
//   const iten4 = document.getElementById('item-4').classList.remove("item-Js")


//   // Troca o Background para a foto do Item.
//   document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/robots-img.png')";

//   // Incere as informações do Item selecionado.

//   //...

// }

// document.getElementById('item-2').onclick = function printItens() {

//   //  Seleciona o Item Colocando a Borda Branca
//   const iten1 = document.getElementById('item-1').classList.remove("item-Js")
//   const iten2 = document.getElementById('item-2').classList.add("item-Js")
//   const iten3 = document.getElementById('item-3').classList.remove("item-Js")
//   const iten4 = document.getElementById('item-4').classList.remove("item-Js")

//   // Troca o Background para a foto do Item.
//   document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/img-item/item-second-article1.jpg')";

//   // Incere as informações do Item selecionado.

//   //...

// }

// document.getElementById('item-3').onclick = function printItens() {

//   //  Seleciona o Item Colocando a Borda Branca
//   const iten1 = document.getElementById('item-1').classList.remove("item-Js")
//   const iten2 = document.getElementById('item-2').classList.remove("item-Js")
//   const iten3 = document.getElementById('item-3').classList.add("item-Js")
//   const iten4 = document.getElementById('item-4').classList.remove("item-Js")

//   // Troca o Background para a foto do Item.
//   document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/img-item/item-third-article1.jpg')";

//   // Incere as informações do Item selecionado.

//   //...

// }
// document.getElementById('item-4').onclick = function printItens() {

//   //  Seleciona o Item Colocando a Borda Branca
//   const iten1 = document.getElementById('item-1').classList.remove("item-Js")
//   const iten2 = document.getElementById('item-2').classList.remove("item-Js")
//   const iten3 = document.getElementById('item-3').classList.remove("item-Js")
//   const iten4 = document.getElementById('item-4').classList.add("item-Js")

//   // Troca o Background para a foto do Item.
//   document.getElementsByTagName('main')[0].style.backgroundImage = "linear-gradient( to right, black 25%,transparent), url('img/img-item/item-first-article2.jpg')";

//   // Incere as informações do Item selecionado.

//   //...
// }

const itens = [
  {
    name: 'Currículo',
    image: 'img/robots-img.png',
    selected: false
  },
  {
    name: 'Cursos',
    image: 'img/img-item/item-second-article1.jpg',
    selected: false
  },
  {
    name: 'Portfólio',
    image: 'img/img-item/item-third-article1.jpg',
    selected: false
  },
  {
    name: 'Favoritos',
    image: 'img/img-item/item-first-article2.jpg',
    selected: false
  },
];


const itensModel = function (itens) {
  return `
    <div id="item-1" class="item">
      <a href="#sec-title"><img src="${itens.image}" /></a>
      <figcaption>${itens.name}</figcaption>
    </div>`;
}

function renderItens () {
     const $itemTemplate = document.querySelector('.menu2');
     $itemTemplate.innerHTML = itens.map((iten) => {
      return itensModel(iten);
     }).join('');
}
renderItens();


const info = `
  <div class="div-main">
    <h4>Série</h4>
    <h1>André Martins</h1>
    <h4>3º Temporada <span>(Semestre)</span></h4>
    <p>
      Após largar tudo para se dedicar ao antigo sonho de ser
      programador, André inicía na universidade aos 34 anos(2019)
      e mergulha de vez no mundo da tecnologia.
    </p>
  </div>`
;

function renderInfo() {
  const $infoTemplate = document.querySelector('.info');
  $infoTemplate.innerHTML = info;
}
renderInfo();









{/* <div id="item-1" onclick="showItem1(event)" class="item">
<a href="#sec-title"><img src="img/robots-img.png" /></a>
<figcaption>Currículo</figcaption>
</div>
<div id="item-2" onclick="showItem2(event)" class="item">
<a href="#sec-title"><img src="img/img-item/item-second-article1.jpg" /></a>
<figcaption>Cursos</figcaption>
</div>
<div id="item-3" onclick="showItem3(event)" class="item">
<a href="#sec-title"><img src="img/img-item/item-third-article1.jpg" /></a>
<figcaption>Portfólio</figcaption>
</div>
<div id="item-4" onclick="showItem4(event)" class="item">
<a href="#sec-title"><img src="img/img-item/item-first-article2.jpg" /></a>
<figcaption>Favoritos</figcaption>
</div> */}