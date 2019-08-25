import React, {Component} from 'react';
import BooksList from '../../components/BooksList';
import HomeHeader from '../../components/HomeHeader'
import {getBooks, searchBooks} from "../../datasource/ulib.datasource";
import NetInfo from "@react-native-community/netinfo";

class HomeScreen extends Component {
    state = {books: []};

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <HomeHeader
                searchHandler={navigation.getParam('searchHandler')}
            />
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({searchHandler: this.searchBooks.bind(this)});
        if (!NetInfo.isConnected) {
            alert('Отсутсвует соединение с интернетом');
            return;
        }
        getBooks().then(resp => {
            this.setState({
                isLoading: false,
                books: resp.content,
            }, function () {
            });

        }).catch(err => alert(err));
    }

    searchBooks(text) {
        searchBooks(text).then(resp => {
            this.setState({
                books: resp.content
            });
        })
    }

    render() {
        return (
            <BooksList books={this.state.books}/>
        );
    }
}

export default HomeScreen;
