import { Stack } from "expo-router";
import React from "react";

const ScreensLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" />
      {/* <Stack.Screen name="home" /> */}
    </Stack>
  );
};

export default ScreensLayout;
