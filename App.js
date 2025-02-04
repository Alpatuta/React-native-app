import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/colors';
import Home from './src/screens/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Categorias' />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: colors.third,
    alignItems: "center",
    justifyContent: "center",
  },
});
