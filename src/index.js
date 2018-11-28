import buscarLivros from './buscarLista';

function component() {
  let element = document.createElement('div');

  //botão de buscar livros na api
  var btn = document.createElement('button');
  btn.innerHTML = 'Buscar Livros';

  //botão de inserir livros na página
  var btn2 = document.createElement('button');
  btn2.innerHTML = 'Inserir Livros';

  //chamar formulário
  btn2.onclick = () => {
    const formulario = document.getElementById('meuForm') ?
      document.getElementById('meuForm') :
      document.createElement('form');
    if (document.getElementById('meuForm')) {
      formulario.remove();
    } else {
      formulario.id = 'meuForm';
      formulario.method = 'GET';
      formulario.autocomplete = 'off';

      //criando input
      var entradaValores = document.createElement('input');
      entradaValores.type = 'text';
      entradaValores.id = 'entra';

      //criando botão
      var btnSubmit = document.createElement('input');
      btnSubmit.type = 'button';
      btnSubmit.id = 'btn';
      btnSubmit.innerHTML = 'Enviar';

      document.body.insertAdjacentElement('afterbegin', formulario);
      formulario.appendChild(entradaValores);
      formulario.appendChild(btnSubmit);

      entradaValores.va
      let entrada = document.getElementById('entra');
      let btnEnv = document.getElementById('btn');

      btnEnv.onclick = ()=>{
        construir(entrada.value);
        entrada.value='';
      }
    }
  }
  btn.onclick = () => {
    var lista = buscarLivros()
    lista.forEach(valor => {
      construir(valor);
    });
  }
  element.appendChild(btn);
  element.appendChild(btn2);
  return element;
}
document.body.appendChild(component());

function Livro(titulo) {
  this.titulo = titulo;
}

function construir(valor) {
  let para = document.createElement('p');
  para.innerHTML = valor;
  document.body.insertAdjacentElement('afterend',para);
}