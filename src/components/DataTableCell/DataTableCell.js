import { DataTable } from "react-native-paper";
import { Text } from "react-native";
import styles from "./Styles";

const DataTableCell = ({ value }) => {
  return (
    <DataTable.Cell>
      <Text style={styles.textStyle}>{value}</Text>
    </DataTable.Cell>
  );
};

export default DataTableCell;
