import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import ProductList from "./src/ProductList/list.js";
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);


const list = [
  {
    id: 1,
    name: "minh",
  },
  {
    id: 2,
    name: "kien",
  },
  {
    id: 3,
    name: "vuong",
  },
  {
    id: 4,
    name: "Hoang",
  },
];
export default function App() {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");
  const [status, setSatus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm Sinh Viên</Text>
      <AppButton
        title="Thêm"
        size="sm"
        backgroundColor="#007bff"
        onPress={() => setSatus(true)}
      />
      <StatusBar style="auto" />
      {status ? (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={onChangeText}
          />
          <TextInput
            style={styles.input}
            placeholder="id"
            onChangeText={onChangeNumber}
          />
          <AppButton
            title="xác nhận"
            size="sm"
            backgroundColor="#007bff"
            onPress={() => setSatus(false)}
          />
        </View>
      ) : null}
      <ProductList data={list} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 100,
    marginHorizontal: 50,
  },
  form: {
    width: 300,
    height: 200,
    marginHorizontal: 50,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  styleButton: {
    width: 100,
    height: 50,
  },
  appButtonContainer: {
    marginLeft: 180,
    elevation: 8,
    margin: 10,
    width: 100,
    backgroundColor: "#668cff",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
