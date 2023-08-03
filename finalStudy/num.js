import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const arr = [];
for (let i = 0; i < 100; i++) {
  	arr.push(i);
}

const Item = ({num}) => {
    return (
		<View style={styles.container}>
			<Text style={styles.text}>{num}</Text>
		</View>
    );
};

const Num = () => {
	renderItem = ({item}) => (
		<Item num={item} />
	);

	return (
		<FlatList
			data={arr}
			renderItem={renderItem}
			keyExtractor={item => item.toString()}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		height: 100
	},
	text: {
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 50
	}
});

export default Num;