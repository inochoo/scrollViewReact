import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
         data={[1,2,3,4]}

         renderItem={(data) => <Text style={styles.text}>{data.item}</Text>}
      />
      <ScrollView horizontal={true}>
        <Image 
          source={require("./anime.jpg")}
          style={{ width: 200, height: 200 }}  
          resizeMode = "contain"
        />
        <Image source={{uri: "https://via.placeholder.com/600/92c925"}}
          style={{ width: 200, height: 200 }}        
        />
        <Image 
          source={require("./anime.jpg")}
          style={{ width: 200, height: 200 }}  
          resizeMode = "contain"
        />
        <Image source={{uri: "https://via.placeholder.com/600/92c925"}}
          style={{ width: 200, height: 200 }} />
        <Image 
          source={require("./anime.jpg")}
          style={{ width: 200, height: 200 }}  
          resizeMode = "contain"
        />
        <Image source={{uri: "https://via.placeholder.com/600/92c925"}}
          style={{ width: 200, height: 200 }} />
        <Image 
          source={require("./anime.jpg")}
          style={{ width: 200, height: 200 }}  
          resizeMode = "contain"
        />
        <Image source={{uri: "https://via.placeholder.com/600/92c925"}}
          style={{ width: 200, height: 200 }} />


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
