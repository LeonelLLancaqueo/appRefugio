import { Pressable, Text, View } from "react-native";

import styles from "./styles";

const FormButon= ({onPress, disabled, inicio, enviado}) => {

    return (
        <View style={styles.containerFormButon}>
            <Pressable   style={styles.botonStyle} onPress={onPress}>
                <Text >Enviar</Text>
            </Pressable>
            {inicio && enviado && <Text style={styles.enviadoText}> Datos enviados </Text>}

        </View>
    )
}

export default FormButon;