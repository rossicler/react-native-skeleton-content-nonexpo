import { StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
declare type _animationType = 'none' | 'shiver' | 'pulse' | undefined;
declare type _animationDirection = 'horizontalLeft' | 'horizontalRight' | 'verticalTop' | 'verticalDown' | 'diagonalDownLeft' | 'diagonalDownRight' | 'diagonalTopLeft' | 'diagonalTopRight' | undefined;
export interface ICustomViewStyle extends ViewStyle {
    children?: ICustomViewStyle[];
    key?: number | string;
}
export interface ISkeletonContentProps {
    isLoading: boolean;
    layout?: ICustomViewStyle[];
    duration?: number;
    containerStyle?: StyleProp<ViewStyle>;
    animationType?: _animationType;
    animationDirection?: _animationDirection;
    boneColor?: string;
    highlightColor?: string;
    easing?: Animated.EasingFunction;
    children?: any;
}
export interface IDirection {
    x: number;
    y: number;
}
export declare const DEFAULT_BORDER_RADIUS = 4;
export declare const DEFAULT_DURATION = 1200;
export declare const DEFAULT_ANIMATION_TYPE: _animationType;
export declare const DEFAULT_ANIMATION_DIRECTION: _animationDirection;
export declare const DEFAULT_BONE_COLOR = "#D9D9D9";
export declare const DEFAULT_HIGHLIGHT_COLOR = "#F8F8FF";
export declare const DEFAULT_EASING: Animated.EasingFunction;
export declare const DEFAULT_LOADING = true;
export {};
