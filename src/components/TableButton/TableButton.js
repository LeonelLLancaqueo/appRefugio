
import { Pressable, Text } from "react-native";

import styles from "./styles";

const TableButtom= ({onPress, disabled, text}) => {

    return (
        <Pressable style={styles.loadMoreButtom} onPress={onPress} disabled={disabled}>
            <Text style={styles.textStyle}>{text}</Text>
        </Pressable>
    )
}

export default TableButtom;
