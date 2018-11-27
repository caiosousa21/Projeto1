export default function buscarLivros() {
    var url = 'https://api.nytimes.com/svc/books/v3/lists.json?api-key=b2359ea071d749d3ab3a35e4945853c2&list=hardcover-fiction'
    function Get(urlFilme) {
        var Httpreq = new XMLHttpRequest();
        Httpreq.open('GET', urlFilme, false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }
    var ListaLivros = JSON.parse(Get(url));
    var lista = new Set();
    for (var i = 0; i < 15; i++) {
        lista.add(ListaLivros.results[i].book_details[0].title)
    }
    return lista;
}