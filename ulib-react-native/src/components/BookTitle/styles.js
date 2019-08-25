import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: '600',
    },
    imageStyle: {
        height: 300,
        flex: 1,
    },
});

EStyleSheet.build();
