function detapd(idpd){
    let requisicao ='https://fakestoreapi.com/products?id='+idpd;
    fetch(requisicao)
            .then(resposta=>resposta.json())
            .then(dados=>pesquisar(dados))
}
function pesquisar(pdwil){
    var prodwil = document.getElementById("caregarcards");
    htmlcards = "";
    var id= new URLSearchParams(window.location.search);
    var idrecebe= id.get("id");
    let vetor= parseInt(idrecebe);
    let posivet = vetor-1;
    var card = `<div class="col-8 col-sm-4 col-md-6 col-lg-4 col-xl-3 mt-5  ">
    <div class="card w-100" style="width: 18rem;">
    <img class="card-img-top" style="height: 300px;" src="${pdwil[posivet].image}" alt="">
    <div class="card-body">
      <h5 class="card-title"><a href="detalhes.html?id=${pdwil[posivet].id}">${pdwil[posivet].title}</h5></a>
      <p class="card-text">$ ${pdwil[posivet].description}</p>
      <p class="card-text">$ ${pdwil[posivet].price}</p>
      <p class="card-text"> ${pdwil[posivet].category}</p>
      <a href="#" class="btn btn-info">Adicionar ao carrinho</a>
    </div>
  </div>
  </div>`;
  htmlcards+= card;
  prodwil.innerHTML+=htmlcards;
}
window.onload = ()=>{
    var id= new URLSearchParams(window.location.search);
    var idrecebe= id.get("id");
    detapd(idrecebe);
}
