ideia retirada de um post no TabNews: https://www.tabnews.com.br/HenriikOliveira/nodejs-prisma-sqlite"

1 - projeto proposto
`mkdir save-image`
`cd save-image`
`npm init`

2 - Prisma CLI 
`npm install -g prisma`

3 - crie um arquivo 'schema.prisma' para as definições

4 - para gerar o modelo do Prima baseado no arquivo 'schema.prisma'
`npx prisma generate`

5 - dependencias necessárias 
`npm install express cors @prisma/client sqlite3`
`npm install multer`

6 - crie 'index.js' com instruções

7 - Execute o comando para gerar a tabela 
`npx prisma migrate dev`

8 - Execute o comando para iniciar o projeto
`npm start` 
