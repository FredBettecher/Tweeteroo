# 🐦 Tweeteroo
Esta é uma API simples para gerenciar usuários e tweets, desenvolvida em Node.js e utilizando os frameworks Express e Cors.
A API permite que usuários se registrem, postem tweets e visualizem os tweets mais recentes.

## Instalação

1. Certifique-se de que o Node.js está instalado em sua máquina.

2. Clone este repositório.

3. No diretório do projeto, execute:
```
npm install
```
Inicie o servidor com:
```
node index.js
```
O servidor estará disponível na porta 5000.

## Endpoints
### 1. Cadastrar Usuário
- URL: `/sign-up`
- Método: `POST`
- Exemplo:
![image](https://github.com/user-attachments/assets/6115a40f-2f9e-4182-96db-9a8c49cd6cc9)
- Respostas:
  - `OK`: Cadastro realizado com sucesso.
  - `422 Unprocessable Entity`: Dados incompletos (username ou avatar está vazio).

### 2. Postar Tweet
- URL: `/tweet`
- Método: `POST`
- Exemplo (em caso de sucesso):
![image](https://github.com/user-attachments/assets/0ef0c3a3-c774-434e-bfa1-422886231947)

- Exemplo (em caso de falha):
![image](https://github.com/user-attachments/assets/aec32d37-c34a-4245-bf7b-ea1686bb0835)

- Respostas:
  - `OK`: Tweet postado com sucesso.
  - `401 Unauthorized`: Usuário não autenticado.
  - `422 Unprocessable Entity`: Dados incompletos (username ou avatar está vazio).

### 3. Obter Tweets
- URL: `/tweet`
- Método: `GET`
- Exemplo:
![image](https://github.com/user-attachments/assets/9823079c-668d-4f16-b843-7196791a4fe7)

- Exemplo (para diversos tweets):  
![image](https://github.com/user-attachments/assets/6a65751d-cfd9-467f-a0af-788960dedea9)

(No exemplo acima foi digitado "Hello World!")

- Respostas:
  - `201 OK`: Lista com os 10 tweets mais recentes.
  - Retorna um array vazio se não houver tweets.
