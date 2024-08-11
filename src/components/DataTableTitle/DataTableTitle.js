import { DataTable } from "react-native-paper";
import {Text} from "react-native";
import styles from "./Styles";

const DataTableTitle= ({value})=>{
    return (
        <DataTable.Title><Text style={styles.textStyle}>{value}</Text></DataTable.Title>
    )
}



export default DataTableTitle;