import { Text, View, StyleSheet, SafeAreaView,TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.content}>
                <View style={styles.textWrapper}>
                    <Text style={styles.hiText}>Xin chào</Text>
                    <Text style={styles.userText}>NGUYỄN TẤN TOẠI</Text>
                    <Text style={styles.userText}>0985956340</Text>
                </View>
                <View style={styles.form}>
                    <TextInput placeholder="Nhập mật khẩu" style={styles.inputPassword} />
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
        marginLeft:25,
        marginRight:25,
        marginTop:30
    },
    inputPassword:{
        height:50,
        backgroundColor:'#fff',
        borderRadius:40,
        fontSize:16,
        paddingLeft:20
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