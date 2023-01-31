import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
const ProductItem = (props) => {
  const item = props.item;
  return (
    <FlatList
      data={lists}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
const ProductList = (props) => {
  const lists = props.data || [];
  return (
    <FlatList
      data={lists}
      renderItem={({ item }) => (
        <>
          <Text>Tên sinh viên:{item.name}</Text>
          <Text>id: {item.id}</Text>
        </>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ProductList;
const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 400,
  },
});
