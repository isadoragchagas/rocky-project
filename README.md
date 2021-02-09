# Teste Prático - Processo Seletivo Rocky

## Descrição 
Esse projeto foi desenvolvido como teste prático do processo seletivo da empresa ROCKY Full Digital Performance. 

O arquivo PDF contendo uma breve explicação pode ser lido [aqui](https://drive.google.com/file/d/1ixofinvX9poya6kDwcQp1JvsLOa1IVC6/view?usp=sharing)

Para a resolução do teste foi utilizado **_JavaScript_**. O objetivo é desenvolver as seguintes funções para corrigir erros detectados no banco de dados corrompido:

* Ler arquivo JSON
* Corrigir nomes, preços e quantidades.
* Exportar um arquivo JSON com o banco de dados corrigido.

E depois criar as seguintes funções para validação do banco de dados corrigido:

* Imprimir a lista com todos os nomes dos produtos, ordenados primeiro por categoria em ordem alfabética e ordenados por id em ordem crescente.
* Calcular o valor total do estoque por categoria.

## Como testar

1. Clonar o projeto.
2. Abrir o terminal na pasta do projeto.
3. Executar o comando: 
``node resolucao.js``

__OBS:__ Para rodar o projeto você vai precisar do node, caso ainda não tenha estalado pode fazer isso [aqui](https://nodejs.org/en/download/).

## Rodando a aplicação

Assim que você executar o comando acima, o arquivo JSON com as correções será exportado automaticamente e na tela será logado a lista do nome dos produtos ordenados por categoria em ordem alfabética e por id, e o valor total dos produtos em estoque por categoria.
