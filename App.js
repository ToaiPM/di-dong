import { Text, View, StyleSheet, SafeAreaView,TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons,Fontisto  } from "@expo/vector-icons";
function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content}>
                <View style={styles.textWrapper}>
                    <Text style={styles.hiText}>Xin chào</Text>
                    <Text style={styles.userText}>Lê Trần Quan Huy</Text>
                    <Text style={styles.userText}>0985956340</Text>
                </View>
                <View style={styles.form}>
                    <Fontisto  style={styles.iconLock} name="locked" size={22} color="black" />  
                    <TextInput 
                        style={styles.inputPassword} 
                        placeholder="******" 
                        keyboardType="numberic"
                        secureTextEntry={true}
                        autoFocus={true}
                    />
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity style={styles.buttonAction}>
                        <Text style={styles.buttonActionText}>QUÊN MẬT KHẨU</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAction}>
                        <Text style={styles.buttonActionText}>THOÁT TÀI KHOẢN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default App;
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eb0847',
        flex: 1,
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        
    },
    content:{
        marginBottom:180,
        width:'100%'
    },
    textWrapper:{

    },
    hiText:{
        textAlign:'center',
        color:'#fff',
        fontSize:18
    },
    userText:{
        textAlign:'center',
        color:'#fff',
        fontSize:18,
        marginTop:8,
        fontWeight:600
    },
    form:{
        position:'relative',
        marginLeft:25,
        marginRight:25,
        marginTop:30
    },
    iconLock:{
        zIndex:10,
        position:'absolute',
        top:10,
        left:20
    },
    inputPassword:{
        height:50,
        backgroundColor:'#fff',
        borderRadius:40,
        fontSize:16,
        textAlign:"center"
    },
    buttonLogin:{
        marginTop:15,
        backgroundColor:'#8b0026',
        borderRadius:40,
    },
    buttonLoginText:{
        textAlign:'center',
        color:'#fff',
        lineHeight:40,
        fontWeight:500
    },
    action:{
        marginLeft:25,
        marginRight:25,
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    buttonAction:{
        
    },
    buttonActionText:{
        color:'#fff',
        fontSize:16,
    }
})