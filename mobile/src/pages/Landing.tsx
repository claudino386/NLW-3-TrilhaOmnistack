import React from 'react'
import { View, StyleSheet, Text, Dimensions,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons'; 

import { RectButton } from 'react-native-gesture-handler';

export default function Landing(){

    const navigation = useNavigation();

  function Enterapp() {
    navigation.navigate('OrphanagesMap');
  }

    return(
        <View style={styles.container}>
            <Image style={styles.logo}  source={require('./images/Logotipo.png')}/>
            <Text style={styles.txt1}>Jundiaí</Text>
            <Text style={styles.txt2}>São Paulo</Text>

            <RectButton style={styles.btngo} onPress={Enterapp}>
                <AntDesign name="arrowright" 
                size={24} color="black"  
            style={styles.arrow}/>
            </RectButton>
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0ec1cb',
        width:Dimensions.get("window").width,
      height:Dimensions.get("window").height
    },
    logo:{
        marginTop:180,
        marginLeft:95,
        justifyContent:'space-between',
        alignItems:'center',
        

    },
    btngo:{
      position:"absolute",
      left:250,
      right:24,
      bottom:32,
  
      backgroundColor:'#ffd666',
      borderRadius:26,
      height:80,
      width:80,
      paddingLeft:24,
  
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      
  
      elevation:3,
        
        
    },
    arrow:{
       marginLeft:3,
    },
    txt1:{
        fontFamily:'Nunito_600SemiBold',
        fontSize:23,
        color:'#FFF',
        top:100,  
      textAlign:'center',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',

    },
    txt2:{
        fontFamily:'Nunito_600SemiBold',
        fontSize:20,
        color:'#FFF',
        textAlign:'center',
        top:100, 
      flexDirection:'row',
      alignItems:"center",
      justifyContent:'space-between',
  

    }
})