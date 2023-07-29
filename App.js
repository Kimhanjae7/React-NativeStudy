import React from 'react'
import {
	SafeAreaView,
	Text,
	View,
	FlatList,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	Image,
	Alert,
    Linking
} from 'react-native'

const DATA = [
    {
        id: 1,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 2,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 3,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 4,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 5,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 6,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 7,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 8,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 9,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 10,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 11,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 12,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 13,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 14,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 15,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 16,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 17,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 18,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 19,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 20,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 21,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 22,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 23,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 24,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 25,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 26,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 27,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    }
];

const createAlert = (press = '정의되지 않은') => {
	Alert.alert(
		`${press}`,
		`${press} 버튼입니다.`,
		[
			{
				text:'CANCEL',
				onPress:()=>console.log('취소버튼을 눌렀습니다.'),
				style:'cancel'
			},
			{
				text:'OK',
				onPress:()=>console.log('확인버튼을 눌렀습니다.')
			}
		]
	)
}

const chatAlert = (press = '정의되지 않은') =>{
    Alert.alert(
        `${press}`,
        `${press} 님과의 채팅방입니다.`,
        [
			{
				text:'CANCEL',
				onPress:()=>console.log('취소버튼을 눌렀습니다.'),
				style:'cancel'
			},
			{
				text:'OK',
				onPress:()=>console.log('확인버튼을 눌렀습니다.')
			}
		]

    )
}

const Item = ({title,description,date}) =>(
    
    <TouchableOpacity onPress={()=>chatAlert(title)} style={{flexDirection:'row',padding:15,alignItems:'center'}}>
            <Image source={require('./img/kakaoProfileImg/profileimg.jpg')} style ={{flex:1,height:60,width:60,borderRadius:20,borderColor:'black',borderWidth:0.8}}/>
        <View style={{flex:5,paddingLeft:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{fontSize:13}}>{date}</Text>
            </View>
            <Text style={{fontSize:10,paddingTop:8}}>{description}</Text>
        </View>
    </TouchableOpacity>

)



const App = () => {
	return(
		<SafeAreaView style={{flex:1}}>
            <View style = {{padding:15,justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,flexDirection:'row'}}>

                
                    <Text style={{fontSize:20,fontWeight:'bold',}}>채팅</Text>
                
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>createAlert('찾기')} style={{marginHorizontal:8}}>
                            <Image source={require('./img/kakaoChatImg/search.png')} style={styles.icon}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>createAlert('채팅방 만들기')} style={{marginHorizontal:8}}>
                            <Image source={require('./img/kakaoChatImg/newChat.png')} style={styles.icon}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>createAlert('설정')} style={{marginHorizontal:8}}>
                            <Image source={require('./img/kakaoChatImg/setting.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
            </View>

                <FlatList
                    data={DATA}
                    ListHeaderComponent={() => (
                        <TouchableOpacity style={{backgroundColor:'lightgray',borderRadius:25,justifyContent:'center',alignItems:'center'}} onPress={()=>Linking.openURL('http://www.naver.com')}>
                        <Text style={{fontSize:20,color:'gray',padding:25}}>광고 배너</Text>
                        </TouchableOpacity>

                    )}
                    renderItem={({item}) => <Item title={item.title} description={item.description} date={item.date} />}
                    keyExtractor={item => item.id.toString()} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	icon : {
		height:20,
		width:20
	},
    item : {
        padding:15,
        marginVertical:8,
        marginHorizontal:16
    },
    title : {
        fontSize:15
    },
    chat : {
        fontSize:10,
    },
})
export default App