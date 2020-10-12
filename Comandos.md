# NLW#3
***
## Como Usar o React

- `node -v` Colocando isso no windows powershell, ele retorna qual versão está instalada.
- `npm -v` Colocando isso no windows powershell, ele retorna qual versão está instalada.

***

`npx create-react-app nomedoapp --template typescript`  
- Colocando isso no windows powershell, Ele Cria o Projeto em React.

***

`npm start` ou `yarn start`
- Colocando isso no terminal do vscode, ele inicia o projeto no chrome.

***
## Dia 01

- Componentes são funções que retornão um JSX e um HTML.

 - Exemplo de Função no React
	```
	import React from 'react';

	function Title(){
	  return(
	    <h1>NLW 3</h1>
	  )
	}

	function App() {
	  return (
	    <div className="App">
 	     <Title/>
	    </div>
	  );
	}

	export default App;

	
	```