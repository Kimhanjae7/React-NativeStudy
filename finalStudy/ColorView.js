import React from 'react'
import { 
    View,
    Text
    } from 'react-native'

const ColorView = () => {
	return (
		<View style={{flex:4}}>
			<View style={{flex:1,backgroundColor:'powderblue',alignItems:'center',justifyContent:'center'}}>
                <Text>Powderblue</Text>
            </View>

            <View style={{flex:3,flexDirection:'row'}}>
                <View style={{flex:1.5}}>
                    <View style={{flex:1,backgroundColor:'yellow',alignItems:'center',justifyContent:'center'}}>  
                        <Text>Yellow</Text>                      
                    </View>

                    <View style={{flex:2,backgroundColor:'lavender',alignItems:'center',justifyContent:'center'}}>
                        <Text>Lavender</Text>
                    </View>
                </View>

                <View style={{flex:1.5,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    <Text>Pink</Text>
                </View>
            </View>
		</View>
	)
}

export default ColorView