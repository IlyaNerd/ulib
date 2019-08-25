import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Book from '../Book';
import BookSection from '../BookSection';
import Button from '../Button';

import styles from './styles';
import {withNavigation} from "react-navigation";

class BookTitle extends Component {

    render() {
        return (
            <Book>
                <BookSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.book.title}</Text>
                        <Text>{this.props.book.author}</Text>
                    </View>
                </BookSection>
                <BookSection>
                    <Image style={styles.imageStyle} source={{uri: this.props.book.image}}/>
                </BookSection>
                <BookSection>
                    <Button
                        onPress={() => this.props.navigation.navigate('BookDetailsScreen',
                            {
                                bookId: this.props.book.bookId,
                                title: this.props.book.title
                            })}/>
                </BookSection>
            </Book>
        );
    }

}

export default withNavigation(BookTitle);