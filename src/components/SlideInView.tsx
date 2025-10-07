import React, { useRef, useEffect } from 'react';
import { Animated, ViewStyle, Dimensions } from 'react-native';

interface SlideInViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
  delay?: number;
}

const SlideInView: React.FC<SlideInViewProps> = ({
  children,
  style,
  direction = 'left',
  duration = 500,
  delay = 0,
}) => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    let initialValue = 0;
    let toValue = 1;

    switch (direction) {
      case 'left':
        initialValue = -screenWidth;
        break;
      case 'right':
        initialValue = screenWidth;
        break;
      case 'top':
        initialValue = -screenHeight;
        break;
      case 'bottom':
        initialValue = screenHeight;
        break;
    }

    slideAnim.setValue(initialValue);

    Animated.timing(slideAnim, {
      toValue: toValue,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, [slideAnim, direction, duration, delay, screenWidth, screenHeight]);

  const getTransform = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return [{ translateX: slideAnim }];
      case 'top':
      case 'bottom':
        return [{ translateY: slideAnim }];
      default:
        return [{ translateX: slideAnim }];
    }
  };

  return (
    <Animated.View
      style={[
        style,
        {
          transform: getTransform(),
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SlideInView;