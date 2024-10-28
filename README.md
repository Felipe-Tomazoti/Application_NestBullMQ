# Aplicação de Mensageria com BullMQ

Este projeto utiliza **NestJS** e **BullMQ** para implementar uma fila de mensagens com processamento distribuído.

## Preparação do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Felipe-Tomazoti/Application_NestBullMQ.git
   ```

2. Certifique-se de que o Docker e o Redis estão em execução para o funcionamento adequado da aplicação. Configure o Redis com a imagem `bitnami/redis:latest` e a senha `redis`.

## Execução da Aplicação

Para rodar o sistema de mensageria, é necessário abrir dois terminais e executar os comandos a seguir:

### Terminal 1: Iniciar o API Gateway
```bash
npm run start:dev api-gateway
```

### Terminal 2: Iniciar o Worker de Fila (Queue)
```bash
npm run start:dev queue
```

## Testando com Postman

1. Abra o **Postman** e crie uma nova requisição.
2. Configure a requisição para o método **POST** com a URL abaixo:

   ```plaintext
   http://localhost:3000/payment-intent
   ```

3. No corpo da requisição, envie o seguinte JSON:
   ```json
   {
       "amount": 1250
   }
   ```

## Configurações Redis

A aplicação utiliza um container Redis com as seguintes configurações:
- **Imagem**: `bitnami/redis:latest`
- **Senha**: `redis`
- **Porta**: `6379`

Certifique-se de ajustar as variáveis de ambiente conforme necessário.

---

# Messaging Application with BullMQ

This project uses **NestJS** and **BullMQ** to implement a message queue with distributed processing.

## Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Felipe-Tomazoti/Application_NestBullMQ.git
   ```

2. Ensure that Docker and Redis are running for the application to function properly. Set up Redis with the image `bitnami/redis:latest` and the password `redis`.

## Running the Application

To run the messaging system, you need to open two terminals and execute the following commands:

### Terminal 1: Start the API Gateway
```bash
npm run start:dev api-gateway
```

### Terminal 2: Start the Queue Worker
```bash
npm run start:dev queue
```

## Testing with Postman

1. Open **Postman** and create a new request.
2. Set the request method to **POST** with the following URL:

   ```plaintext
   http://localhost:3000/payment-intent
   ```

3. In the request body, send the following JSON:
   ```json
   {
       "amount": 1250
   }
   ```

## Redis Configuration

The application uses a Redis container with the following settings:
- **Image**: `bitnami/redis:latest`
- **Password**: `redis`
- **Port**: `6379`

Make sure to adjust the environment variables as needed.
ation effectively.
