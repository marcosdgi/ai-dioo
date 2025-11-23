import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, useColorScheme } from 'react-native';

export const WaveBackground = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  // Valores animados para cada onda (0 a 1 en loop continuo)
  const wave1Anim = useRef(new Animated.Value(0)).current;
  const wave2Anim = useRef(new Animated.Value(0)).current;
  const wave3Anim = useRef(new Animated.Value(0)).current;
  const wave4Anim = useRef(new Animated.Value(0)).current;
  const wave5Anim = useRef(new Animated.Value(0)).current;
  const wave6Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Función para crear animación continua de 0 a 1
    const createLoopAnimation = (animValue: Animated.Value, duration: number, delay: number = 0) => {
      return Animated.loop(
        Animated.timing(animValue, {
          toValue: 1,
          duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
          delay,
        })
      );
    };

    // Crear y iniciar animaciones con diferentes duraciones y delays
    const animations = [
      createLoopAnimation(wave1Anim, 8000, 0),
      createLoopAnimation(wave2Anim, 10000, 0),
      createLoopAnimation(wave3Anim, 12000, 0),
      createLoopAnimation(wave4Anim, 9000, 0),
      createLoopAnimation(wave5Anim, 11000, 0),
      createLoopAnimation(wave6Anim, 9500, 0),
    ];

    animations.forEach(anim => anim.start());

    return () => {
      animations.forEach(anim => anim.stop());
    };
  }, []);

  // Interpolaciones para movimientos suaves en X e Y
  const wave1TranslateY = wave1Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-20, 20, -20],
  });
  const wave1TranslateX = wave1Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-10, 10, -10],
  });

  const wave2TranslateY = wave2Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [20, -20, 20],
  });
  const wave2TranslateX = wave2Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [10, -10, 10],
  });

  const wave3TranslateY = wave3Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-15, 15, -15],
  });
  const wave3TranslateX = wave3Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [15, -15, 15],
  });

  const wave4TranslateY = wave4Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [25, -25, 25],
  });
  const wave4TranslateX = wave4Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-15, 15, -15],
  });

  const wave5TranslateY = wave5Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-30, 30, -30],
  });
  const wave5TranslateX = wave5Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [20, -20, 20],
  });

  const wave6TranslateY = wave6Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [18, -18, 18],
  });
  const wave6TranslateX = wave6Anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-12, 12, -12],
  });

  // Colores para modo claro y oscuro
  const wave1Color = isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(191, 219, 254, 0.3)';
  const wave2Color = isDark ? 'rgba(37, 99, 235, 0.1)' : 'rgba(147, 197, 253, 0.2)';
  const wave3Color = isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(233, 213, 255, 0.2)';
  const wave4Color = isDark ? 'rgba(79, 70, 229, 0.12)' : 'rgba(199, 210, 254, 0.25)';
  const wave5Color = isDark ? 'rgba(96, 165, 250, 0.15)' : 'rgba(219, 234, 254, 0.3)';
  const wave6Color = isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(165, 180, 252, 0.25)';

  return (
    <View className="absolute inset-0 overflow-hidden">
      {/* Onda 1 */}
      <Animated.View
        style={{
          position: 'absolute',
          top: -160,
          left: -160,
          width: 384,
          height: 384,
          borderRadius: 192,
          backgroundColor: wave1Color,
          transform: [
            { translateY: wave1TranslateY },
            { translateX: wave1TranslateX },
          ],
        }}
      />

      {/* Onda 2 */}
      <Animated.View
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: 160,
          backgroundColor: wave2Color,
          transform: [
            { translateY: wave2TranslateY },
            { translateX: wave2TranslateX },
          ],
        }}
      />

      {/* Onda 3 */}
      <Animated.View
        style={{
          position: 'absolute',
          top: '33%',
          left: -80,
          width: 288,
          height: 288,
          borderRadius: 144,
          backgroundColor: wave3Color,
          transform: [
            { translateY: wave3TranslateY },
            { translateX: wave3TranslateX },
          ],
        }}
      />

      {/* Onda 4 */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 80,
          right: -128,
          width: 384,
          height: 384,
          borderRadius: 192,
          backgroundColor: wave4Color,
          transform: [
            { translateY: wave4TranslateY },
            { translateX: wave4TranslateX },
          ],
        }}
      />

      {/* Onda 5 */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: '33%',
          left: '25%',
          width: 256,
          height: 256,
          borderRadius: 128,
          backgroundColor: wave5Color,
          transform: [
            { translateY: wave5TranslateY },
            { translateX: wave5TranslateX },
          ],
        }}
      />

      {/* Onda 6 - Inferior izquierda */}
      <Animated.View
        style={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 340,
          height: 340,
          borderRadius: 170,
          backgroundColor: wave6Color,
          transform: [
            { translateY: wave6TranslateY },
            { translateX: wave6TranslateX },
          ],
        }}
      />
    </View>
  );
};
