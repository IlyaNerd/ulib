import React, {Component} from 'react';
import BookDetail from "../../components/BookDetail";

class BookDetailsScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`
    });

    render() {
        return (
            <BookDetail bookId={this.props.navigation.state.params.bookId}/>
        )
    };
}

export default BookDetailsScreen;
