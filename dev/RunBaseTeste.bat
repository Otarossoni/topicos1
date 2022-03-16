mongod --port 27018 --dbpath D:\Dados\Documentos\topicos1\mongo\baseteste --auth

rem -- sem autenticação -- mongo --port 27018 
rem -- com autenticação -- mongo -u "admin" -p "admin" --authenticationDatabase "teste" --port 27018 
rem -- Compass/Node:  mongodb://admin:admin@localhost:27018/teste?authSource=teste

rem Dependências:
rem npm install express --save
rem npm install mongodb --save
rem npm install nodemon --save-dev
rem npm install cors --save

rem --iniciar aplicação--
rem cd dev
rem ./RunBaseTeste.bat

rem abrir novo console
rem cd dev
rem cd .\apiteste\
rem npm install
rem npm run dev