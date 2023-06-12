function pesquisarPd(dados){
    var cards = document.getElementById("caregarcards")
    var htmlcards = "";

    for (let i=0; i<dados.length; i++){
        api2.push(dados[i])
    }

    if(api2.length == 0){
        var aviso = "<h1>vazio</h1>"
    }
    else{
        for(let i=0; i<api2.length; i++){
            var pdwil = api2[i];
            var produto =` <div class="col-8 col-sm-4 col-md-6 col-lg-4 col-xl-3 mt-5  ">
            <div class="card w-100" style="width: 18rem;">
            <img class="card-img-top" style="height: 300px;" src="${pdwil.image}" alt="">
            <div class="card-body">
              <h5 class="card-title"><a href="detalhes.html?id=${pdwil.id}">${pdwil.title}</h5></a>
              <p class="card-text">$ ${pdwil.price}</p>
              <p class="card-text"> ${pdwil.category}</p>
              <a href="#" class="btn btn-info">Adicionar ao carrinho</a>
            </div>
          </div>
          </div>`;

          htmlcards+=produto;
        }
    }

    cards.innerHTML+=htmlcards;

}
function buscarprodutos(){
    fetch('https://fakestoreapi.com/products')
            .then(resposta=>resposta.json())
            .then(dados=>pesquisarPd(dados))
}
window.onload = buscarprodutos();