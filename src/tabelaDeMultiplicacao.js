function tabelaMultiplicacao(numero) { 

    let tabela = [];

    for (let index = 0; index <= numero; index++) {
            tabela[index] = [];
        for(let contador = 0; contador <= numero; contador++){
            tabela[index][contador] = contador* index;
        }
    }

    console.table(tabela);
}

tabelaMultiplicacao(7)