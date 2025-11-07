import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    ProductDetails: {data: {name: string, price: string, category_name: string, market_price: string, variations: [{color: {}, varation_images: [{fullImage: string, thumbnail: string}], size_variations: [{size: string, price: string}] }]}}
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
export type RootNavigationProps = NavigationProps['navigation'];
export type RootRouteProps = NavigationProps['route'];

export type ItemDataProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;