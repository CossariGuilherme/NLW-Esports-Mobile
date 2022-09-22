import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 214,
    height: 120,
    marginTop: 74,
    marginBottom: 48,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  userName: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  avatar: {
    backgroundColor: "#ffff",
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});