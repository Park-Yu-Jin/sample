/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text,Button, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import {firebaseAuth, fireStoreDB} from './firebase'
function App() {
const [email, setEmail] = useState('');
const [pw, setPw] = useState('');
const [user, setUser] = useState(null);
const [data, setData] = useState([]);
useEffect(()=>{
    // 로그인 상태 변경 감지
    firebaseAuth.onChange((u)=>{
        setUser(u); })
        },[]);
    async function loadData(){
        const snap = await fireStoreDB.getAllUsers();
        const arr = snap.docs.map((d)=>({
            id: d.id,
            ...d.data(),
            }));
        setData(arr);
        }
    async function handleSignUp(){
        try{
            await firebaseAuth.signUp(email, pw);
            alert("회원가입 성공");
            } catch(e){
                alert(e.message);
                }
            }
        async function handleLogin(){
            try{
                await firebaseAuth.login(email, pw);
                 alert("로그인 성공");
                 console.log(user)
                 } catch(e){
                     alert(e.message);
                     }
                 }
             if(user){
                 {loadData();}
                 // 로그인 되어있을때 화면
                return( <View>
                 <TextInput style={style.input} placeholder="내용입력" />
                  <Button title="등록" />
                  {data.map((item)=><Text key={item.id}>{item.content}</Text>)}
                  </View>
                  )
                  }
              return(
                  <View>
                  <Text>로그인 화면</Text>
                   <TextInput style={style.input} placeholder="이메일" onChangeText={setEmail}/>
                   <TextInput style={style.input} placeholder="비밀번호" onChangeText={setPw}/>
                    <Button title="회원가입" onPress={handleSignUp}/>
                    <Button title="로그인" onPress={handleLogin}/>
                    <Button title="뒤로가기" onPress={()=>navigation.goBack()}/>
                    </View>
                    )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
red:{
    color: "red",
    },
input:{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    }
});

export default App;
