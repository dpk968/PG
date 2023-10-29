import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";

const LibararyData = [
  {
    id: "1",
    name: "Sahitya Mandir Hall & Library",
    description:
      "Libarary One offers a unique blend of traditional and modern flavors, ensuring each visit is a memorable experience. From our renowned espressos to our delightful pastries, there's something for everyone.",
    rating: 4.5,
    distance: 1,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/Libarary-1869656_640.jpg",
    address: "123 Coffee St, Coffee Town, CF1 1AB",
    operatingHours: "Mon-Fri: 7am - 7pm, Sat-Sun: 8am - 6pm",
  },
  {
    id: "2",
    name: "Success Study Centre Ghatkopar",
    description:
      "Nestled in the heart of the city, Libarary Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you're guaranteed a relaxing time.",
    rating: 4.2,
    distance: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/Libarary-1869656_640.jpg",
    address: "456 Latte Ln, Coffee City, CF2 2BC",
    operatingHours: "Mon-Sun: 8am - 8pm",
  },
  {
    id: "3",
    name: "Lakshashila Staudy Room",
    description:
      "Nestled in the heart of the city, Libarary Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you're guaranteed a relaxing time.",
    rating: 5.0,
    distance: 10,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/Libarary-1869656_640.jpg",
    address: "456 Latte Ln, Coffee City, CF2 2BC",
    operatingHours: "Mon-Sun: 8am - 8pm",
  },
  {
    id: "4",
    name: "Spacyes",
    description:
      "Nestled in the heart of the city, Libarary Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you're guaranteed a relaxing time.",
    rating: 4.1,
    distance: 1,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/Libarary-1869656_640.jpg",
    address: "456 Latte Ln, Coffee City, CF2 2BC",
    operatingHours: "Mon-Sun: 8am - 8pm",
  },
  {
    id: "5",
    name: "Shikshagram Study Room",
    description:
      "Nestled in the heart of the city, Libarary Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you're guaranteed a relaxing time.",
    rating: 3.0,
    distance: 19,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/Libarary-1869656_640.jpg",
    address: "456 Latte Ln, Coffee City, CF2 2BC",
    operatingHours: "Mon-Sun: 8am - 8pm",
  },
  {
    id: "6",
    name: "Ideal Library",
    description:
      "Nestled in the heart of the city, Libarary Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you're guaranteed a relaxing time.",
    rating: 2.2,
    distance: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/Libarary-1869656_640.jpg",
    address: "456 Latte Ln, Coffee City, CF2 2BC",
    operatingHours: "Mon-Sun: 8am - 8pm",
  },
  {
    id: "7",
    name: "Shikshagram Your Personal Study Area",
    description:
      "Nestled in the heart of the city, Libarary Two is a haven for coffee lovers. With our handcrafted brews and gourmet menu, you're guaranteed a relaxing time.",
    rating: 3.6,
    distance: 15,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/12/54/Libarary-1869656_640.jpg",
    address: "456 Latte Ln, Coffee City, CF2 2BC",
    operatingHours: "Mon-Sun: 8am - 8pm",
  },

];

function MainScreen({ navigation }) {
  const [searchTerm, setsearchterm] = useState("");
  const [sortType, setsortType] = useState("rating");
  const [sortedLibararyData, setsortedLibararyData] = useState(LibararyData);

  useEffect(() => {
    const filtered = LibararyData.filter((Libarary) =>
      Libarary.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortType === "rating") {
        return b.rating - a.rating;
      } else {
        return a.distance - b.distance;
      }
    });
    setsortedLibararyData(sorted);
  }, [searchTerm, sortType]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          onChangeText={setsearchterm}
          value={searchTerm}
          placeholder="Search Books.."
          style={styles.searchInput}
        />
      </View>

      <View style={styles.sortOptions}>
        <TouchableOpacity onPress={() => setsortType("rating")}>
          <Text style={styles.sortText}>Sort by Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setsortType("distance")}>
          <Text style={styles.sortText}>Sort by Distance</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sortedLibararyData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { Libarary: item })}
            style={styles.listItem}
          >
            <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.heading}>{item.name}</Text>
              <Text style={styles.paragraph}>{item.description}</Text>
            </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  // LibararyImage:{
  //     width:100,
  //     height:100,
  //     marginBottom:10
  // },
  // LibararyName:{
  //     fontSize:18,
  //     fontWeight:'bold'
  // },

  searchBar: {
    margin: 10,
  },
  searchInput: {
    // width: 100,
    // height:100,
    // borderRadius: 10
    borderColor: "#ccc",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },

  sortText: {
    fontSize: 16,
    color: "blue",
  },

  sortOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    flexDirection: "row", // To align the image and text side by side
    borderWidth: 1, // Add borders for a card-like appearance
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10, // Add some space between the image and text
    flex: 1, // To make the text take up the available space
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 14,
    marginTop: 5, // Add some space between heading and paragraph
  },
});

export default MainScreen;
