import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { LoginForm, LoginFormData } from '@/components/forms/LoginForm';
import { useRouter } from 'expo-router';
import { WaveBackground } from '@/components/WaveBackground';
import { GlassView } from 'expo-glass-effect';

export default function LoginScreen() {
    const router = useRouter();

    const handleLogin = async (data: LoginFormData) => {
        console.log('Login data:', data);
        // Aquí irá la lógica de autenticación
        // Por ejemplo: await login(data.email, data.password);

        // Simulación de delay de autenticación
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Navegar a la pantalla principal después del login exitoso
        // router.push('/home');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View className="flex-1 bg-white dark:bg-gray-900">
                    {/* Ondas animadas de fondo */}
                    <WaveBackground />

                    <View className="flex-1  justify-center px-6 py-8">
                        {/* Header */}
                        <GlassView glassEffectStyle='regular' isInteractive style={{ padding: 20, borderRadius: 15 }}>
                            <View className="mb-8 justify-center items-center">
                                <Text className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    Bienvenido
                                </Text>
                            </View>

                            {/* Form */}
                            <LoginForm onSubmit={handleLogin} />

                            {/* Footer Links */}
                            <View className="mt-6">
                                <TouchableOpacity>
                                    <Text className="text-center text-black dark:text-white text-sm font-medium">
                                        ¿Olvidaste tu contraseña?
                                    </Text>
                                </TouchableOpacity>

                                <View className="flex-row justify-center mt-4">
                                    <Text className="text-gray-600 dark:text-gray-400 text-sm">
                                        ¿No tienes cuenta?{' '}
                                    </Text>
                                    <TouchableOpacity>
                                        <Text className="text-black dark:text-white text-sm font-medium">
                                            Regístrate
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </GlassView>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
}