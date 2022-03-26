<h1 align="center">Exercício de C214-L6 - API de Super Heróis em NodeJS</h1>

<p align="center">
    <img src="https://opensenselabs.com/sites/default/files/inline-images/rest2.png">
</p>
Imagem retirada do site Drupal Sun: https://drupalsun.com/    

### :books: Descrição

<p>Projeto de C214-L6, laboratório da disciplina de Engenharia de Software.</p>
<p>Projeto de uma API de Super Heróis com dois endpoints somente para adicionar e buscar os personagens no banco de dados.</p>

#### Projeto
- Essa API foi desenvolvida em JavaScript usando o framework NodeJS. O banco de dados no qual ela se comunica é o MongoDB Atlas. 

### :computer: Funcionalidades dos Projetos
#### Exercício aula 3
- Adiciona novos personagens na coleção do banco de dados MongoDB; 
- Lista todos os personagens cadastrados no banco de dados.

### :hammer_and_wrench: Instalação e Execução
#### Preparação do ambiente no computador para executar o projeto
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Postman](https://www.postman.com/downloads/)
- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_americas_rlsamultirest_search_core_brand_atlas_desktop_rlsa&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646314&adgroup=131761122132&gclid=Cj0KCQjw8_qRBhCXARIsAE2AtRYhQ9pEkjwdAhEn_dJbdPPKRTUtw5NzNf6zzq49qGy7K2n7S6ggQOQaAnhAEALw_wcB)


Observação: Você pode usar a IDE e o criente HTTP de sua preferência, o Visual Studio Code e o Postman são apenas sugestões.

Clone o repositório em seu computador para poder acessar o projeto:
```
$ git clone https://github.com/flaviobergamini/C214-L6_API_JavaScript.git
```
Para acessar o repositório clonado usando o terminal, digite: 
```
$ cd C214-L6_API_JavaScript
```
Para acessar os arquivos de código pelo terminal, digite:
```
$ cd API
```

#### Instalando as dependências
Na pasta API, instale as dependências do NodeJS usando o comando:
```
npm install
```
#### Iniciando Projeto
Após as instalações das dependências do projeto serem concluídas, inicie o projeto usando o comando:
```
npm start
```
#### Rotas
Dentro do Postman, ou outro cliente HTTP, utilize a URL:
```
http://localhost:6000
```
Se tiver conflito de portas em seu computador, vá até o arquivo "server.js" e altere o valor atribuído a constante "port".

A rota existente na API é: /heroes

* Método GET: /research, lista todos os heróis cadastrados no banco, acesse:
```
http://localhost:6000/heroes/research
```
* Método POST: /create, realiza o cadastro dos heróis no banco de dados MongoDB Atlas, acesse:
```
http://localhost:6000/heroes/create
```
O envio das informações é feito por meio da Body em um objeto JSON contendo os seguintes campos:
```
{
    "nome": "Hulk",
    "poder": "Força",
    "forca": 2000,
    "origem": "EUA"
}
```

## :question: Dúvidas
Envie um email ao desenvolvedor: flaviohenrique@gec.inatel.br

## :gear: Autor

* **Flávio Henrique Madureira Bergamini** - [Flávio](https://github.com/flaviobergamini)

Sob a orientação da monitora:
* **Rafaela de Moraes Papale** - [Rafaela](https://github.com/RafaelaPapale)




