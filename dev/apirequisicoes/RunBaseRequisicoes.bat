mongod --port 27018 --dbpath D:\Dados\Documentos\topicos1\mongo\baserequisicoes --auth

rem -- sem autenticação -- mongo --port 27018 
rem -- com autenticação -- mongo --port 27018 -u "admin" -p "admin" --authenticationDatabase "baserequisicoes"  
rem -- Compass/Node:  mongodb://admin:admin@localhost:27018/baserequisicoes?authSource=baserequisicoes

rem Dependências:
rem npm install express --save
rem npm install mongodb --save
rem npm install nodemon --save-dev
rem npm install cors --save
rem npm install mongoose --save

rem --iniciar aplicação--
rem cd dev
rem cd .\apirequisicoes\
rem ./RunBaseRequisicoes.bat

rem abrir novo console
rem cd dev
rem cd .\apiteste\
rem npm install
rem npm run dev