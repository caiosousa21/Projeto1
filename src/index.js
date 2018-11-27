import buscarLivros from './buscarLista';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerHTML = 'Buscar Livros';

  btn.onclick = ()=>{
    var lista = buscarLivros()
    lista.forEach(valor => {
      construir(valor);
    });
  }
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());

function construir(valor){
  let para = document.createElement('p');
  para.innerHTML = valor;
  document.body.append(para);
}