import React from 'react'
import {
    SafeAreaView,
    Text,
    ScrollView,
    Linking,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const DATA = {
	"page": [
		{
			"name": "GOOGLE",
			"url": "https://www.google.com/",
			"mainColor": "red"
		},
		{
			"name": "NAVER",
			"url": "https://www.naver.com/",
			"mainColor": "yellowgreen"
		},
		{
			"name": "DAUM",
			"url": "https://www.daum.net/",
			"mainColor": "orange"
		},
		{
			"name": "YAHOO",
			"url": "https://www.yahoo.com/",
			"mainColor": "mediumpurple"
		},
		{
			"name": "BING",
			"url": "https://www.bing.com/",
			"mainColor": "green"
		},
		{
			"name": "ZUM",
			"url": "https://zum.com/",
			"mainColor": "skyblue"
		},
		{
			"name": "NATE",
			"url": "https://www.nate.com/",
			"mainColor": "red"
		},
	]
}

const SearchEngine = () => {
    return(
        <SafeAreaView style = {{flex: 1,alignItems:'center',justifyContent:'center'}}>
            <ScrollView>
                <Text style ={{fontStyle:'italic',fontSize:30,color:'black',margin:30}}>검색 엔진 모음</Text>
                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[0].url)} style ={{backgroundColor:DATA.page[0].mainColor, borderRadius:20,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:15,color:'white',padding:30}}>Go To GOOGLE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[1].url)} style ={{backgroundColor:DATA.page[1].mainColor, borderRadius:20,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:15,color:'white',padding:30}}>Go To NAVER</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[2].url)} style ={{backgroundColor:DATA.page[2].mainColor, borderRadius:20,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:15,color:'white',padding:30}}>Go To DAUM</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[3].url)} style ={{backgroundColor:DATA.page[3].mainColor, borderRadius:20,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:15,color:'white',padding:30}}>Go To YAHOO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[4].url)} style ={{backgroundColor:DATA.page[4].mainColor, borderRadius:20,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:15,color:'white',padding:30}}>Go To BING</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[5].url)} style ={{backgroundColor:DATA.page[5].mainColor, borderRadius:20,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:15,color:'white',padding:30}}>Go To ZUM</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Linking.openURL(DATA.page[6].url)} style ={{backgroundColor:DATA.page[6].mainColor, borderRadius:20,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
                    <Text style = {{fontSize:15,color:'white',padding:30}}>Go To NATE</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}


export default SearchEngine