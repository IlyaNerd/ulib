import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import BookTitle from '../BookTitle';
import {withNavigation} from "react-navigation";

class BookList extends Component {
    renderBooks() {
        return this.props.books.map(book =>
            <BookTitle key={book.bookId} book={book}/>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderBooks()}
            </ScrollView>
        );
    }
}

export default withNavigation(BookList);