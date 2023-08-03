import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelloWorld from './finalStudy/HelloWorld'
import ColorView from './finalStudy/ColorView'
import Mondrian from './finalStudy/Mondrian'
import KaKaoProfile from './finalStudy/KaKaoProfile'
import SearchEngine from './finalStudy/SearchEngine'


const Home = ({navigation}) => {
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate("HelloWorld")} style={styles.touchableContainer}>
				<Text style={styles.txt}>1.Hello World</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("ColorView")} style={styles.touchableContainer}>
				<Text style={styles.txt}>2.Color View</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Mondrian")} style={styles.touchableContainer}>
				<Text style={styles.txt}>3.Mondrian</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("KaKaoProfile")} style={styles.touchableContainer}>
				<Text style={styles.txt}>4.KaKao Profile</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("SearchEngine")} style={styles.touchableContainer}>
				<Text style={styles.txt}>5.Search Engine</Text>
			</TouchableOpacity>
			
		</View>
	);
};

const Stack = createNativeStackNavigator();
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="React Navigation">
				<Stack.Screen name="React Native Study Code" component={Home} />
				<Stack.Screen name="HelloWorld" component={HelloWorld} />
				<Stack.Screen name="ColorView" component={ColorView} />
				<Stack.Screen name="Mondrian" component={Mondrian} />
				<Stack.Screen name="KaKaoProfile" component={KaKaoProfile} />
				<Stack.Screen name="SearchEngine" component={SearchEngine} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	touchableContainer:{
		alignItems:'flex-start',
		padding:15
	},
	txt:{
		fontSize:20,
		color:'black'
	}
})
export default App;