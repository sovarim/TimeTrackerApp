import { StyleSheet } from 'react-native';

export const FontFamily = {
  RubikMedium: 'Rubik-Medium',
  RubikRegular: 'RubikRegular',
};

export const TypographyStyles = StyleSheet.create({
  bigText: {
    fontFamily: FontFamily.RubikMedium,
    fontSize: 48,
  },
  bigText2: {
    fontFamily: FontFamily.RubikMedium,
    fontSize: 40,
  },
  title: {
    fontFamily: FontFamily.RubikMedium,
    fontSize: 24,
  },
  title2: {
    fontFamily: FontFamily.RubikMedium,
    fontSize: 20,
  },
  textLg: {
    fontFamily: FontFamily.RubikRegular,
    fontSize: 18,
  },
  text: {
    fontFamily: FontFamily.RubikRegular,
    fontSize: 16,
  },
  textSm: {
    fontFamily: FontFamily.RubikRegular,
    fontSize: 14,
  },
  textXs: {
    fontFamily: FontFamily.RubikRegular,
    fontSize: 12,
  },
});
