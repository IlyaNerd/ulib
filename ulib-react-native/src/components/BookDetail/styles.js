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
    descriptionStyle: {
        textAlign: 'justify'
    },
    activityIndicator: {
        top: 100,
    },
    libsContainer: {
        flex: 1,
        flexWrap: 'wrap',
    },
    libHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 22,
        paddingBottom: 10
    },
    libItem: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
});

EStyleSheet.build();
