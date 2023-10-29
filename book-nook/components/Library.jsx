import React,{useState} from 'react'
import { View,Text,Image,StyleSheet, Button } from 'react-native'

function Library({route}) {

    const [isfavorite,setisfavorite] = useState(false)
    const Libarary = route.params.Libarary
  return (
    <View style={styles.container}>
        <Image source={{uri: Libarary.image}} style={styles.LibararyImage}/>
        <Text style={styles.LibararyName}>{Libarary.name}</Text>
        <Text style={styles.description}>{Libarary.description}</Text>
        <Text style={styles.LibararyAddress}>Address: {Libarary.address}</Text>
        <Text style={styles.LibararyHours}>Hours :{Libarary.operatingHours}</Text>
        <Text style={styles.LibararyRating}>Rating :{Libarary.rating}</Text>
        <Button 
        
            title={isfavorite? 'Remove from Favorites': 'Add to Favorites'}

            onPress={()=>setisfavorite(!isfavorite)}
        
        />


    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        padding:20
    },
    LibararyImage:{
        width:'100%',
        height:200,
        marginBottom:15,
        borderRadius:10
    },
    LibararyName:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
    },
    LibararyAddress:{
        fontSize:18,
        marginBottom:10
    },
    LibararyHours:{
        fontSize:16,
        marginBottom:10
    },

    LibararyRating:{
        fontSize:16,
        marginBottom:10
    }
})

export default Library