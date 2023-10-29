import React,{useState} from 'react'
import { View,Text,Image,StyleSheet, Button } from 'react-native'

function CafeDetailScreen({route}) {

    const [isfavorite,setisfavorite] = useState(false)
    const cafe = route.params.cafe
  return (
    <View style={styles.container}>
        <Image source={{uri: cafe.image}} style={styles.cafeImage}/>
        <Text style={styles.cafeName}>{cafe.name}</Text>
        <Text style={styles.description}>{cafe.description}</Text>
        <Text style={styles.cafeAddress}>Address: {cafe.address}</Text>
        <Text style={styles.cafeHours}>Hours :{cafe.operatingHours}</Text>
        <Text style={styles.cafeRating}>Rating :{cafe.rating}</Text>
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
    cafeImage:{
        width:'100%',
        height:200,
        marginBottom:15,
        borderRadius:10
    },
    cafeName:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
    },
    cafeAddress:{
        fontSize:18,
        marginBottom:10
    },
    cafeHours:{
        fontSize:16,
        marginBottom:10
    },

    cafeRating:{
        fontSize:16,
        marginBottom:10
    }
})

export default CafeDetailScreen