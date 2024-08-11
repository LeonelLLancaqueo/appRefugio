import {View, Text, Image, StyleSheet} from "react-native";

import styles from "./styles";

const Card= ({nombre, url, descripcion})=>{
    
    return(
        <View style= {styles.card}>
            <Text style= {styles.tituloRefugio}>{nombre} </Text>  
            <Image  style={styles.imageRefugio} source={{uri:(url),}}/>
            <Text style= {styles.descriptionText}>{descripcion}</Text>
        </View>
    )
}




export default Card;