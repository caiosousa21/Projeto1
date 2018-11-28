import buscarLivros from './buscarLista';
import nomeNaLista from './nomeDeLista';
import buscarTitulos from './buscarNaPagina';

function component() {
  let element = document.createElement('div');

  var btn4 = document.createElement('button');
  btn4.innerHTML = 'Atualizar index para exclusão'
  
  btn4.onclick = () => {
    var todos = document.querySelectorAll('p');
    for(var i= 0;i<todos.length;i++){
      todos.id='i'+i;
    }
    todos.onclick = function () {
      listagem.removeChild(todos);
    }
  }

  var selecionar = document.createElement('select');
  selecionar.id = 'selecionarLista';
  var arraySelecionar = [
    'Combined Print and E-Book Fiction',
    'Combined Print and E-Book Nonfiction',
    'Hardcover Fiction'
  ];

  for (var i = 0; i < arraySelecionar.length; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = arraySelecionar[i];
    selecionar.appendChild(option);
  }

  //botão de buscar livros na api
  var btn = document.createElement('button');
  btn.innerHTML = 'Buscar Livros';

  //botão de inserir livros na página
  var btn2 = document.createElement('button');
  btn2.innerHTML = 'Inserir Livros';

  //botão que irá filtrar títulos
  var btn3 = document.createElement('button');
  btn3.innerHTML = 'Procurar Títulos';

  btn3.onclick = () => {
    buscarTitulos();
  }

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

      btnEnv.onclick = () => {
        construir(entrada.value);
        entrada.value = '';
      }
    }
  }
  btn.onclick = () => {
    let listagem = document.getElementById('item') ?
      document.getElementById('item') :
      document.createElement('div');
    // if (document.getElementById('item')) {
    //   listagem.remove();

    // }
    // else {
    listagem.id = 'item';
    var numero = selecionar.options[selecionar.selectedIndex].value;
    var lista = buscarLivros(nomeNaLista(parseInt(numero)));
    document.body.append(listagem);
    lista.forEach(valor => {
      construir(valor);
    });


  }
  element.appendChild(selecionar);
  element.appendChild(btn);
  element.appendChild(btn2);
  element.appendChild(btn3);
  element.appendChild(btn4);
  return element;
}
document.body.appendChild(component());


function construir(valor) {
  let listagem = document.getElementById('item');
  let para = document.createElement('p');
  para.innerHTML = valor;
  listagem.appendChild(para);
}