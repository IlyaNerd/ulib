import React from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from "react-native-elements";

import styles from './styles';

class HomeHeader extends React.Component {

    searchRef;

    constructor(args) {
        super(args);
        this.state = {
            searchText: null,
            searchInputStyle: styles.searchInput
        };
    }

    render() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.appNameStyle}>ULib</Text>
                <SearchBar containerStyle={styles.searchBarStyle}
                           inputStyle={this.state.searchInputStyle}
                           ref={search => this.searchRef = search}
                           searchIcon={{onPress: () => this.searchRef.focus()}}
                           onFocus={() => this.setState({searchInputStyle: styles.searchInputFocused})}
                           onBlur={() => this.setState({searchInputStyle: styles.searchInput})}
                           value={this.state.searchText}
                           platform={'android'}
                           onChangeText={(text) => this.searchText(text)}
                />
            </View>
        );
    }

    searchText(text) {
        this.setState({searchText: text});
        this.props.searchHandler(text);
    }
}

export default HomeHeader;
