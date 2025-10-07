import React, { useRef, useEffect } from 'react';
import { Animated, ViewStyle } from 'react-native';

interface PulseAnimationProps {
  children: React.ReactNode;
  style?: ViewStyle;
  duration?: number;
  scale?: number;
}

const PulseAnimation: React.FC<PulseAnimationProps> = ({
  children,
  style,
  duration = 1000,
  scale = 1.05,
}) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: scale,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ])
    );

    pulseAnimation.start();

    return () => pulseAnimation.stop();
  }, [pulseAnim, duration, scale]);

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ scale: pulseAnim }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default PulseAnimation;