import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen options={{headerShown:false}} name="login" />
        </Stack>
    )
}

export default AuthLayout;

