export default function buscarTitulos() {

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
        checar(entrada.value);
        entrada.value = '';
      }
    }
    function checar(entrada) {
        let titulos = document.querySelectorAll('p')
        titulos.forEach(element => {
            var str = element.outerHTML;
            str = (str.replace('<p>', ''));
            str = (str.replace('</p>', ''));
            if (entrada == str) {
                console.log('encontrado');
            }else{
                console.log('não encontrado');
            }
        });
    }
}