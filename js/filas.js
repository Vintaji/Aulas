function Queue() {
    let items = [];

    this.enqueue = function(element) {
        //Adiciona um item
        items.push(element);
    };

    this.dequeue = function() {
        //Remove um item
        return items.shift();
    };

    this.front = function() {
        //Retorna o primeiro elemento da fila
        return items[0];
    };

    this.isEmpty = function() {
        //Verifica se a fila está vazia
        return items.length === 0;
    };

    this.clear = function() {
        //Limpa os elementos da fila
        items = [];
    };

    this.size = function() {
        //Retorna o tamanho da fila
        return items.length;
    };

    this.print = function() {
        //Imprime a fila
        console.log(items.toString());
    };   
}

const fila = new Queue();
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.print();

console.log(fila.isEmpty());