import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Home from "./home";

function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        value: state.value + 1,
      };
    case "counter/decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}

const store = createStore(combineReducers({ counter }));

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>hello everyone!</Text>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
