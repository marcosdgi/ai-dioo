import React from "react";
import { View, Text } from "react-native";

const IndexScreen = () => {
    return (
        <View className="flex-1 justify-center items-center bg-slate-100">
            <Text className="text-2xl font-bold text-blue-600">
                Aquí estoy yo
            </Text>
            <Text className="text-base text-gray-600 mt-2">
                Tailwind CSS está configurado correctamente
            </Text>
        </View>
    )
}


export default IndexScreen;
