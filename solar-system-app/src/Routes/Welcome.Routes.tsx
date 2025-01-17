import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeRoutes from ".";
import { Text, View } from "react-native";
const { Navigator, Screen } = createStackNavigator();
import Welcome from "../pages/Welcome";


const WelcomeRoutes: React.FC = () => {
  return (

    <NavigationContainer>
      <Navigator>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="HomeRoutes" component={HomeRoutes} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
  /*  <NavigationContainer independent={true}>
     <Navigator>
       <Screen name="Welcome" component={Welcome} />
       <Screen name="HomeRoutes" component={HomeRoutes} />
     </Navigator>
   </NavigationContainer> */

}
export default WelcomeRoutes;
