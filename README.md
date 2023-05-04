<h1 align="center"><br>
  League of Legends
</h1>

<b>Sumário</b>

   * [Projeto](#projeto)
   * [API](#api)
   * [Versao Api](#versaoApi)
   * [Como iniciar o projeto](#iniciar-projeto)   
   * [Telas](#telas)
   * [Princípios da engenharia](#principio-engenharia)
   


<br>
<h2 id="projeto"><br>
  Projeto
</h2>
Este projeto tem como objetivo colocar em prática os conteúdos estudados de ReactJS, CSS, HTML, consumo de API REST e versonamento com Git.


<br>
<h2 id="api"><br>
  API
</h2>
Centralizar os dados e ativos do jogo League of Legends, incluindo campeões, itens, runas, feitiços de invocador e ícones de perfil. <br>
Para acessar a API https://ddragon.leagueoflegends.com

<h4 id="idioma">
  Idioma
  </h4>
  Lista de idiomas disponíveis para retorno do JSON
<br>
https://ddragon.leagueoflegends.com/cdn/languages.json
<br>
<h4 id="versaoApi">
  Versão API
  </h4>
  O League of Legends trabalha com patch de atualização dos atributos dos personagens, acrescimento de novos campeões, etc. Para acessar e obter a versão mais recente do patch note acesse:
  https://ddragon.leagueoflegends.com/api/versions.json
  A versão mais recente se encontra na posição 0 do array.
  <br>
  Essa versão irá influenciar no próximo tópico, aonde a construção dele será crucial para obter os dados dos campeões.
  <br>Exemplo do link abaixo explica como é a construção do acesso aos campeões.
    <img src="https://user-images.githubusercontent.com/43157230/236245834-fce1d5e2-d4ed-483f-a626-0da25f29d2d2.png"/>
    1. versão do patch da ultima atualização. <br>
    2. idioma de retorno das informações.
  
  <h4 id="campeoes">
  Campeões
  </h4>
Existem dois tipos de arquivos de dados para campeões. O ```champion.json``` arquivo de dados retorna uma lista de campeões com um breve resumo. Os arquivos JSON individuais do campeão contêm dados adicionais para cada campeão.
<br>
<b>Lista geral dos campeões:</b>
<br>
  http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pt_BR/champion.json
  
  <b>Arquivo individual do campeão</b>
  <br>
  http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pt_BR/champion/Nami.json
  <br>  
  <img src="https://user-images.githubusercontent.com/43157230/236245501-973bdd21-12cc-4dea-9c73-8768f1e4120a.png"/>
  <br>
  1. Nome do campeão escolhido para acessar os dados, caso queira consultar qualquer outro campeão, a primeira letra deverá ser maiúscula. Exemplo: Lulu, Corki, Ashe...
  <br>
  <b>Splash Art dos Campeões</b>
  <br>
  http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
  <br>
  O número no final do nome do arquivo corresponde ao número da capa. Você pode encontrar o número da skin de cada skin no arquivo de cada campeão individual no Arquivo individual do campeão. Cada campeão contém um campo "skins" e o número da skin é indicado pelo campo "num".
  <br>
<div align="center"> 
  <img src="https://user-images.githubusercontent.com/43157230/236249767-ce586bf3-cc4a-4264-961c-c2f06af5a9d9.png"/>
  </div>
  <br>
  <b>Spell</b>
  <br>
http://ddragon.leagueoflegends.com/cdn/13.9.1/img/spell/FlashFrost.png
<br>
Você pode encontrar o nome do arquivo para as habilidades de cada campeão no arquivo individual do campeão. O campo ```spells``` contém uma matriz de objetos que inclui dados ```image```. O nome do arquivo é indicado pelo campo ```full```.
<br>
<br>
<div align="center"> 
  <img src="https://user-images.githubusercontent.com/43157230/236252872-77f729e1-0d50-4bdf-aeaf-30e3792ef825.png"/>
</div>
<br>
<br>

<b>Vídeo Spell</b>
<br>
https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.webm
<br>

<img src="https://user-images.githubusercontent.com/43157230/236257884-d116c5fc-f847-4225-9373-901ed87b0068.webm"/>



<div align="center">
<img src="https://user-images.githubusercontent.com/43157230/236255618-5528ffa1-e4fe-4862-8b4b-0750a2407cc8.png"/>
</div>
<br>
1. Código do campeão, no exemplo acima o código 0012 é do Alistar.<br>
2. Letra que representa a Spell. Temos 4 spell no League of Legends: <b>Q, W, E, R</b>.
<br>
Para procurar de outro campeão, você poderá pegar o código no arquivo individual do campeão
<br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/43157230/236310750-205585ec-ce37-40b4-be4c-2919317470cd.png" />
</div>
<br>
<h2 id="iniciar-projeto"><br>
  Iniciando o projeto
</h2>

- instale as dependencias do projeto: ```npm install```
- para executar, no CLI, digite: ```npm run dev```
- acesse: ```http://127.0.0.1:5173/```

<h2 id="telas"><br>
  Telas
</h2>
<div align="center">
  <h3>Home</h3>
<img width="800" src="https://user-images.githubusercontent.com/43157230/236313941-e84c8a62-a8b1-4736-af70-1b96c7cb4461.png" alt="home"><br>


<h2 id="principio-engenharia"><br>
  Princípios da engenharia
</h2>

Tentei seguir o princípio de SOLID, principalmente "Single Responsibility Principle" (Princípio de responsabilidade única).

<div align="middle">
<img width="600" src="https://raw.githubusercontent.com/FabianaKaori/TheOneProject/main/src/assets/SSolid.png">
</div>
<a href="https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898" alt="Fonte:"></a>
