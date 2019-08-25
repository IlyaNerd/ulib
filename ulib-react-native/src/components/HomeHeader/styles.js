import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    appNameStyle: {
        paddingLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        flex:1,
    },
    searchBarStyle: {
        width: '80%',
        flex: 5
    },
    searchInput: {
        borderWidth: 0.2,
        borderRadius: 5,
        borderColor: 'gray'
    },
    searchInputFocused: {
        borderWidth: 0.4,
        borderRadius: 5,
        borderColor: 'blue'
    }
});

EStyleSheet.build();
