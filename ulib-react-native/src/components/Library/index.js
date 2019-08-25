import {Linking, Text, TouchableOpacity} from "react-native";
import styles from "../BookDetail/styles";
import React from "react";

class Library extends React.Component {

    render() {
        return (
            <TouchableOpacity
                key={this.props.library.libraryId}
                onPress={() => this.findLibOnMap(this.props.library.name)}>
                <Text style={styles.libItem}>{this.props.library.name}</Text>
            </TouchableOpacity>
        );
    }

    findLibOnMap(name) {
        Linking.openURL('https://www.google.com/maps/search/' + encodeURIComponent(name))
    }
}

export default Library;
