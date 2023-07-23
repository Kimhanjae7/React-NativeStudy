import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Alert
} from 'react-native'

const createAlert = (press = '정의되지 않은') =>{
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

const App = () => {
    return(
        <View style = {{flex:1}}>
            <ImageBackground source={require('./img/kakaoProfileImg/backgroundimg.jpg')} style={{flex:1,backgroundColor:'grey'}} imageStyle={{opacity:0.5}}>
                {/*상단*/}
                <View style = {styles.topContainer}>
                    {/*닫기 버튼*/}
                    <TouchableOpacity onPress={()=>createAlert('닫기')}>
                        <Image source={require('./img/kakaoProfileImg/close.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <View style = {{flexDirection:'row',}}>
                        {/*선물하기 버튼*/}
                        <TouchableOpacity style = {{marginHorizontal:5}} onPress={()=>createAlert('선물하기')}>
                            <Image source={require('./img/kakaoProfileImg/gift.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        {/*QR 버튼*/}
                        <TouchableOpacity style = {{marginHorizontal:5}} onPress={()=>createAlert('QR')}>
                            <Image source={require('./img/kakaoProfileImg/QR.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        {/*설정 버튼*/}
                        <TouchableOpacity style = {{marginHorizontal:5}} onPress={()=>createAlert('설정')}>
                            <Image source={require('./img/kakaoProfileImg/setting.png')} style={styles.icon}/>    
                        </TouchableOpacity>
                    </View>
                
                </View>
                {/*중간*/}
                <View style = {{flex:11,alignItems:'center',justifyContent:'flex-end',paddingBottom:50}}>
                    <TouchableOpacity onPress={()=>createAlert('프로필')}>
                        <Image source={require('./img/kakaoProfileImg/profileimg.jpg')} style={{height:100, width:100,borderRadius:35}}/>
                    </TouchableOpacity>
                    <Text style ={{color:'white',fontWeight:'bold',fontSize:17,marginTop:8}}>김한재</Text>
                </View>
                {/*하단*/}
                <View style = {{flex:3,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',borderTopWidth:0.6,borderTopColor:'lightgray'}}>
                    <TouchableOpacity style = {{alignItems:'center'}} onPress={()=>createAlert('나와의 채팅')}>
                        <Image source={require('./img/kakaoProfileImg/chat.png')} style={styles.icon}/>
                        <Text style = {{color:'white',marginTop:8}}>나와의 채팅</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{alignItems:'center'}} onPress={()=>createAlert('프로필 편집')}>  
                        <Image source={require('./img/kakaoProfileImg/edit.png')} style={styles.icon}/>
                        <Text style = {{color:'white',marginTop:8}}>프로필 편집</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{alignItems:'center'}} onPress={()=>createAlert('카카오스토리')}>
                        <Image source={require('./img/kakaoProfileImg/story.png')} style={styles.icon}/>
                        <Text style = {{color:'white',marginTop:8}}>카카오스토리</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer :{
        flex:1.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20
    },

    icon : {
        height:20,
        width:20
    }
    

})
export default App