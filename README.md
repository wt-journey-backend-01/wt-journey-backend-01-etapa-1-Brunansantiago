Projeto Backend Básico - Journey

Este é um projeto de backend simples desenvolvido como parte de uma trilha de estudos. A aplicação utiliza Node.js e Express para criar um servidor web com funcionalidades básicas, atendendo aos critérios de uma atividade de avaliação.

O servidor é capaz de renderizar uma página HTML, processar dados enviados através de um formulário, retornar respostas personalizadas e simular uma rota de API que devolve dados no formato JSON.

O que ele faz:

-   Página Inicial (`/`): Exibe uma página HTML gerada pelo servidor contendo um formulário para inserção de nome.
-   Processamento de Formulário (`/enviar`)**: Recebe os dados do formulário via método POST, processa o nome enviado e exibe uma mensagem de boas-vindas personalizada.
-   API Simulada (`/api`): Uma rota que retorna um objeto JSON simples, simulando o comportamento de uma API real.

Ferramentas utilizadas:

-   **Node.js**: Ambiente de execução do JavaScript no lado do servidor.
-   **Express.js**: Framework para Node.js que simplifica a criação de servidores e APIs.

Siga os passos abaixo para rodar o projeto na sua máquina.

Pré-requisitos:
-   [Node.js](https://nodejs.org/en/)
-   [Git](https://git-scm.com/) 

Passos:

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd NOME-DO-SEU-REPOSITORIO
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Inicie o servidor:
    ```bash
    node index.js
    ```

5.  Acesse no navegador:
    Abra seu navegador e acesse `http://localhost:3000`.


Desenvolvido por Bruna.