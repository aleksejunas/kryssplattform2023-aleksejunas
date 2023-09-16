import React = require("react");
import WelcomeRoutes from "./src/Routes/Welcome.Routes";
import Welcome from "./src/pages/Welcome";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Button from "./src/components/Button";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  // Comment

  const log = () => {
    console.log("Hello");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Join the journey" Icon={() => <></>} onPress={log} />
    </View>
  );
}
