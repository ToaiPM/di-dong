import { StyleSheet, TextInput } from "react-native";
function Button({children}) {
    return (
        <TextInput style={styles.dangnhap} placeholder="Nhập mật khẩu" />
    );
}

const styles = StyleSheet.create({
    dangnhap:{
        backgroundColor: '#fff',
        height: 60,
        width: '70%',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize:18
    }
})
export default Button;