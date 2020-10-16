import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'



const {Navigator, Screen} = createStackNavigator()
import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OphanagesDetails'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'
import Header from './Components/Header';


export default function Routes(){

    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#f2f3f5'}}}>
                
                <Screen name="Landing"
                component={Landing}/>
                
                <Screen name="OrphanagesMap"
                 component={OrphanagesMap}
                 />

                <Screen name="OrphanageDetails" 
                options={{headerShown:true, header: ()=> <Header showCancel={false} title='Orfanato'/>}} 
                component={OrphanageDetails}
                />

                <Screen name="SelectMapPosition" 
                  options={{headerShown:true, header: ()=> <Header title='Selecione no Mapa'/>}} 
                component={SelectMapPosition}
                />

                <Screen name="OrphanageData"
                  options={{headerShown:true, header: ()=> <Header title='Informe os Dados'/>}}  
                component={OrphanageData}
                />
            </Navigator>
        </NavigationContainer>
    )
}