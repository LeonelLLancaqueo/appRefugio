
import styles from "./styles";
import { Text, TextInput, View } from "react-native";

const FormInput= ({labelInput, onChangeText, valueText, inicio, errors, invalid}) => {
    return(
        <View>
            <Text style={styles.titleInputStyle}>{labelInput}</Text>
            <TextInput 
                onChangeText={onChangeText}
                value={valueText}
                style={styles.inputStyle}
            />
            {!inicio && errors && invalid && <Text style={styles.errorText}> Este campo es requerido</Text>}
            
        </View>
    );
}

export default FormInput;