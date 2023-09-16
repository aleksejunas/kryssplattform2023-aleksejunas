import React from "react";
import { View, Text } from "react-native";
import Assets from "../../Assets";

const Welcome: React.FC = () => {
    return (
        <View>
            <Text>
                <Assets.images.BackgroundApp />
            </Text>
        </View>
    )
}