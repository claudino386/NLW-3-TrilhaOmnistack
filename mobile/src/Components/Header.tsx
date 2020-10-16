import { Nunito_600SemiBold } from '@expo-google-fonts/nunito'
import { useLinkProps, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import {Feather} from '@expo/vector-icons'

interface HeaderProps{
    title:string;
    showCancel?:Boolean;
}

   

export default function Header({title, showCancel = true}: HeaderProps){

        const Navigation = useNavigation()

        function HandleGoBackToAppHomePage(){
            Navigation.navigate('OrphanagesMap')
        }

    return(
        <View style={styles.container}>
            <BorderlessButton onPress={Navigation.goBack}>
                <Feather name='arrow-left' size={24} color={'#15b6d6'}/>
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            {showCancel ?( //if ternario
                <BorderlessButton onPress={HandleGoBackToAppHomePage}>
                <Feather name='x' size={24} color={'#FF669d'}/>
            </BorderlessButton>
            ):(
                <View/>
            )}
        </View>
    )

    
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:'#f9fafc',
        borderBottomWidth:1,
        borderColor:'#dde3f0',
        paddingTop:44,

        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
    },
    title:{
        fontFamily:'Nunito_600SemiBold',
        color:'#8fa7b3',
        fontSize:16,
    }
})
