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
## Dia 01 - Criando o Website em ReactJs
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

***
## Dia 02 - Criando API Rest
***
- `yarn init -y` serve para criar um arquivo .json do seu projeto.
- `yarn add express` instala o framework express.(Ele ajuda na requisição, e rotas).
- `npm install @types/express -D` Instala o Pacote de Dependencia do Express.
- `yarn add typescript -D` Instala o a Dependencia do Typescript no Projeto, para funcionar o com node js
- `yarn tsc --init` Cria um arquivo tsconfig.json.
- `yarn add ts-node-dev -D` instala um dependencia, para poder executar o projeto usando typescript.

***
### Rota com Express
```
import express from 'express';

const app = express();

//rota = conjunto
//recurso = usuario
//Métodos http = get,post,put,delete
//parametros
	 // Query params : http://localhost:3333/users/search?=diego&page2
	 //Route params : http://localhost:3333/users/1 (indentificar um recurso)
	//Body : http://localhost:3333/users (indentificar um recurso_)

//get = buscar informação(lista,item);
//post = criando informação nova;
//put  = editando uma informação;
//delete = deletando uma informação;

app.get('/users',(request,response) =>{
   return response.json({message: 'hello world' });
});

app.listen(3333); //local host 3333
```
***
- Para testar os metodos http -> utilizaremos o insomnia;
***
### Banco de Dados
`yarn add typeorm sqlite3` instala a extensão do banco de dados, e as dependencias;
 __Driver Nativo,Query Builder,ORM__;

- Driver nativo - `sqlite.query(SELECT * FROM users)`
- Query Builder -> KNEX.js `knex('users').select('*').where('name','diego')`
// o Knex.js converte para SELECT * FROM users WHERE('name','diego');
- ORM - relacionar objetos com tabelas,instancias da classe do banco de dados(Object Relational Mapping);
***
### Executando a Migration do Banco de Dados:
- `yarn typeorm migration:run` //executa a query
- `yarn typeorm migration:revert` //reverte a tabela
***
## Dia 03 Terminando o Website em ReactJs
- Ligar o Backend no Frontend


***

## Dia 04 Construindo o App Mobile com React-Nactive e Expo
- `npm install --global expo-cli` //Esse comando no Terminal, instala um Pacote Global Para Usar o Expo;
- `expo init my-project`//Esse comando no Terminal, Cria Um Novo Projeto;
- `blank (TypeScript)    same as blank but with TypeScript configuration` //Essa Foi a Opção Escolhida Para o Template;
- `yarn start`ou `npm start` //Para Iniciar Projeto;

***
### Essa é o Corpo Principal do App
- A Tag View é Uma Tag de Bloco, igual a Div no Html;
```
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```
***
### Estilos são feitos Assim
```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
- O Padrão de Flex Diretion é Column;
***
- Os Componetes Dentro de uma View não tem herança de estilo igual no html e css;
- Todos os Componentes Por Padrão Tem Display Flex;
***
### Api de Mapas no Expo:
- `expo install react-native-maps` //Instalação;
- `import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';` //Importação
__Usando a APi Maps__
```
  <MapView style={styles.map} 
      provider={PROVIDER_GOOGLE}
        initialRegion={{
         latitude:  -23.2140073,
         longitude: -46.8146306,
         latitudeDelta: 0.008,
         longitudeDelta: 0.008
         }}/>
```

#### Para Dimencionar
```
 map:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height
  }
```
***
#### Usando Um Marcador no Mapa:
- Primeiro Importamos a Propriedade Marker na Api MapView;
```
<Marker
          icon={mapmarker}
          coordinate={{
            latitude:  -23.1849362,
            longitude: -46.8816858,
          }}
        />
```
***
#### Usando Arquivo .Png
- Cria se uma Pasta @types na Pasta de src;
- detro se cria um arquivo chamado index.d.ts;
- `declare module '*.png'` dentro dele vai isso, que significa pro react que todo arquivo png é um modulo;
***
#### Para Fazer um PopUp Ao clicar no Marcador:
- Usamos a Propriedade CallOut;

```
<Callout tooltip={true} onPress={()=>{}}>
           <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}> Lar das Meninas</Text>
           </View>
          </Callout>
```

#### Botão no React-Native
- Esse Botão perde um Pouco de Opacidade o clcar nele
```
<TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}}>

          </TouchableOpacity>
```
***

### Instalando um Pacote de Fontes Externo

- `expo install @expo-google-fonts/nunito expo-font`
```
import {useFonts} from 'expo-font';
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito';


 const [fontsloaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  if(!fontsloaded){
    return null;
    }



fontFamily:'Nunito_700Bold' //exemplo de como usar a propriedade de font
```
***
### Rotas de Navegação no React-Native
- Modulo React Navigation
- `yarn add @react-navigation/native` //instalação;
- `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view` //instalação da Dependencia no Expo
- `yarn add @react-navigation/stack` //Instala o Tipo de Navegação(em Pilhas)

```
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Orphanagesmap from './pages/OrphanagesMap'

const {Navigator, Screen} = createStackNavigator()

export default function Routes(){

    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}> //esse screen options desabilita o header em todas as página, que mostravam o screen name
                <Screen name="OrphanagesMap" component={Orphanagesmap}/>
            </Navigator>
        </NavigationContainer>
    )
}
```

### Navegação Funcionando
```
export default function OrphanagesMap(){
    const navigation = useNavigation();
    function handleNavigateToOrphanageDetails(){
       navigation.navigate('OrphanageDetails')
    }


 <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
           <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}> Lar das Meninas</Text>
           </View>
          </Callout>
```

***
## Dia 05 Finalizando A Aplicação Mobile

`<ScrollView></ScrollView>`//Substitui uma View em Uma Tela que Tem Scroll

- O Backend é o mesmo da Web, Feito em Node.


















