// Config
import Color from '../../config/Color';

export default {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Color.main.background,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Color.main.green,
  },
  contentInput: {
    width: '70%',
    height: 40,
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  inputIcon: {
    width: '12%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.main.background,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputSearch: {
    height: 40,
    borderColor: 'gray',
  },
  contentOvoPoint: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 70,
  },
  ovoPoint: {
    flex: 1,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Color.main.gray05,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    borderWidth: 1,
    borderColor: Color.main.gray05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOvo: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#590166',
  },
  contentRp: {
    height: 40,
    justifyContent: 'flex-start',
  },
  textRp: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Color.main.gray05,
    marginLeft: 5,
  },
  textAmount: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '900',
  },
  contentWallet: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallet: {
    width: 160,
    height: 50,
    padding: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 6,
    shadowColor: '#eee',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4.27,
    elevation: 7,
  },
  textTopup: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  badgePlus: {
    position: 'absolute',
    left: 13,
    bottom: 14,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: Color.main.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPlus: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  dot: {
    position: 'absolute',
    right: 55,
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    backgroundColor: 'black',
  },
  contentMenu: {
    width: '100%',
    height: 190,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 7,
    borderBottomColor: Color.main.gray05,
    borderBottomWidth: 1,
  },
  contentDiscount: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: Color.main.gray05,
    borderBottomWidth: 1,
  },
}