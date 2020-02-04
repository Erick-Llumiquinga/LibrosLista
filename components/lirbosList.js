import React, { Component } from 'react';
import {
  StyleSheets,
  Text,
  View,
  FlatList
} from 'react-native';

export default class LibrosList extends Component {
  state = {
    books: {}
  }

  componentDidMount(){
    const books = require('../db/book.json');
    this.setState(books);
  }

  render(){
    return(
      <FlatList
        data={this.state.books}
    renderItem={({ item }) => <Text style={{margin: 20, top: '20%'}}>Libro: {item.title}, por: {item.author}</Text>}
        keyExtractor={item => item.id}
      />
    )
  }
}