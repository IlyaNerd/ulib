import React, {Component} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import Book from '../Book';
import BookSection from '../BookSection';
import Library from '../Library'
import NetInfo from "@react-native-community/netinfo";
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';
import {getBookDetailById} from "../../datasource/ulib.datasource";
import {withNavigation} from "react-navigation";

class BookDetail extends Component {

    constructor(args) {
        super(args);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        if (!NetInfo.isConnected) {
            alert('Отсутсвует соединение с интернетом');
            return;
        }
        Geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getBookDetailById(this.props.navigation.state.params.bookId, lat, lon).then(resp => {
                this.setState({
                    isLoading: false,
                    book: resp,
                }, function () {
                });
            });
        }, err => {
            this.setState({isLoading: false});
            alert(err);
        }, {
            timeout: 5000,
            maximumAge: 3600000, //1h
            enableHighAccuracy: false,
        });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size={100}/>
                </View>
            );
        }
        return (
            <ScrollView>
                <Book>
                    <BookSection>
                        <Image style={styles.imageStyle} source={{uri: this.state.book.image}}/>
                    </BookSection>
                    <BookSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.headerTextStyle}>{this.state.book.title}</Text>
                            <Text>{this.state.book.author}</Text>
                            <Text>{this.state.book.year}</Text>
                        </View>
                    </BookSection>
                    <BookSection>
                        <View>
                            <Text style={styles.descriptionStyle}>{this.state.book.description}</Text>
                        </View>
                    </BookSection>
                    {this.renderLibraries()}
                </Book>
            </ScrollView>
        );
    }

    renderLibraries() {
        if (this.state.book.libraries.length === 0) {
            return (<Text style={styles.libHeader}>Библиотеки по близости с этой книгой не найдены</Text>)
        }

        const libs = this.state.book.libraries.map(lib => <Library library={lib}/>);
        return (
            <View styles={styles.libsContainer}>
                <Text style={styles.libHeader}>Библиотеки</Text>
                {libs}
            </View>
        );
    }
}

export default withNavigation(BookDetail);
