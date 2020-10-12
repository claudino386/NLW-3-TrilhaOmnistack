# NLW#3
***
## Como Usar o React

- `node -v` Colocando isso no windows powershell, ele retorna qual versão está instalada.
- `npm -v` Colocando isso no windows powershell, ele retorna qual versão está instalada.

***

`npx create-react-app nomedoapp --template typescript`  
- Colocando isso no windows powershell, Ele Cria o Projeto em React.

***

`npm start` ou `yarn start` Colocando isso no terminal do vscode, ele inicia o projeto no chrome.

***
## Dia 01
***
- Componentes são funções que retornão um JSX e um HTML.

 - ## Exemplo de Função no React
	```
	import React from 'react';

	interface TitleProps{
	  text:string;
	}


	function Title(props: TitleProps){
	  return(
	  <h1>{props.text}</h1>
	  )
	}

	function App() {
	  return (
	    <div className="App">
	      <Title text="texto 1"/>
	      <Title text="texto 2"/>
	      <Title text="texto 3"/>
	      <Title text="texto 4"/>
    </div>
  );
}

	export default App;
	
	```
***
## Importações

- Os Arquivos de estilo sempre tem que ser importados pelos arquivos java script.
- Para importar arquivos, basta usar:
  - import {} from './'		
  - import from '';
  - import './pasta';
***
## Instalações
- `npm add react-icons` serve para adicionar o pacote de icones do react, basta digitar no terminal do vscode. [Link do Pacote](https://react-icons.github.io/)
- `npm install` serve para adicionar o pacote node modules na pasta do projeto.
- `npm add react-router-dom` serve para instalar um navegação sem dar refresh na página, página de navegação unica.[Link do Pacote](https://reactrouter.com/web/guides/quick-start)
- `npm install @types/react-router-dom -D` serve para instalar o react router dom no typescript.[Link do Pacote](https://www.npmjs.com/package/@types/react-router-dom)
- `npm install @types/react-leaflet` serve para instalar a API de Mapa.[Link da API](https://react-leaflet.js.org/)

***

## Rotas
- Exemplo de Rotas com React Router Dom(SPA - Single Page Aplication):
```
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

function Routes(){
    return(
        
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
```






