import React,{useState,useEffect} from 'react'
import { View,Text, FlatList, TouchableOpacity,Image, StyleSheet,TextInput } from 'react-native'


const cafeData = [
    {
      id: '1',
      name: 'Cafe One',
      description: 'Cafe One offers a unique blend of traditional and modern flavors, ensuring each visit is a memorable experience. From our renowned espressos to our delightful pastries, there\'s something for everyone.',
      rating: 4.5,
      distance: 1,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg',
      address: '123 Coffee St, Coffee Town, CF1 1AB',
      operatingHours: 'Mon-Fri: 7am - 7pm, Sat-Sun: 8am - 6pm',
    },
    {
      id: '2',
      name: 'Cafe Two',
      description: 'Nestled in the heart of the city, Cafe Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you\'re guaranteed a relaxing time.',
      rating: 4.2,
      distance: 2,
      image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg',
      address: '456 Latte Ln, Coffee City, CF2 2BC',
      operatingHours: 'Mon-Sun: 8am - 8pm',
    },
    {
        id: '3',
        name: 'Cafe Three',
        description: 'Nestled in the heart of the city, Cafe Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you\'re guaranteed a relaxing time.',
        rating: 5.0,
        distance: 10,
        image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg',
        address: '456 Latte Ln, Coffee City, CF2 2BC',
        operatingHours: 'Mon-Sun: 8am - 8pm',
      },
      {
        id: '4',
        name: 'NPCI',
        description: 'Nestled in the heart of the city, Cafe Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you\'re guaranteed a relaxing time.',
        rating: 5.0,
        distance: 100,
        image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656_640.jpg',
        address: '456 Latte Ln, Coffee City, CF2 2BC',
        operatingHours: 'Mon-Sun: 8am - 8pm',
      },
    // ... add more mock data here
  ];




function CafeListScreen({ navigation }) {

    const [searchTerm,setsearchterm] = useState("")
    const [sortType,setsortType] = useState("rating")
    const [sortedcafeData,setsortedcafeData] = useState(cafeData)



    useEffect(()=>{

        const filtered = cafeData.filter(cafe=> cafe.name.toLowerCase().includes(searchTerm.toLowerCase()))

        const sorted = [...filtered].sort((a,b)=>{

            if (sortType === 'rating'){
                return b.rating - a.rating

            } else {
                return a.distance - b.distance
            }

        })
        setsortedcafeData(sorted)


    },[searchTerm,sortType])



  return (
    <View style={styles.container}>

        <View style={styles.searchBar}>
            <TextInput
                onChangeText={setsearchterm}
                value={searchTerm}
                placeholder='Search cafe...'
                style={styles.searchInput}
            />
        </View>

        <View  style={styles.sortOptions}>

            <TouchableOpacity onPress={()=>setsortType('rating')}>
                <Text  style={styles.sortText}>Sort by Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setsortType('distance')}>
                <Text  style={styles.sortText}>Sort by Distance</Text>
            </TouchableOpacity>


        </View>


        <FlatList
        
        data={sortedcafeData}
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Details',{cafe:item})}
            style={styles.listItem}
            >

                <Image source={{uri: item.image}} style={styles.cafeImage}/>
                <Text style={styles.cafeName}>{item.name}</Text>
                <Text>{item.description}</Text>
                

            </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        
        
        />



    </View>
  )
}



const styles = StyleSheet.create({

    container: {
        flex:1,
        padding:10

    },
    listItem: {
        padding:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:1

    },
    cafeImage:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:10
    },
    cafeName:{
        fontSize:18,
        fontWeight:'bold'
    },

    searchBar: {
        margin:10
    },
    searchInput:{
        // width: 100,
        // height:100,
        // borderRadius: 10
        borderColor: '#ccc',
        padding: 10,
        borderWidth:1,
        borderRadius:5
    },

    sortText: {
        fontSize:16,
        color: "blue"
    },

    sortOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10
    }

})

export default CafeListScreen