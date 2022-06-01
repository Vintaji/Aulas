// AULA 11, 12, 13, 14
function Stack() {
    let items = [];

    this.push = function(element) {
        //Adiciona um item a pilha
        items.push(element);
    };

    this.pop = function() {
        //Remover um item a pilha
        return items.pop();
    };

    this.peek = function() {
        //Mostra o elemento no topo da pilha
        return items [items.length - 1];
    };

    this.isEmpty = function() {
        //Mostra se a pilha está vazia
        return items.length === 0;
    };

    this.clear = function() {
        //Limpa os elementos da pilha
        items = [];
    };

    this.size = function() {
        //Informa o tamanho da pilha
        return items.length;
    };

    this.print = function() {
        //Imprime a pilha
        console.log(items.toString());
    };
}

const pilha = new Stack();

pilha.push(1);
pilha.push(2);
pilha.push(3);

// console.log(pilha.isEmpty());
// pilha.print();