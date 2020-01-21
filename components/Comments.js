import React from "react";
import { StatusBar, RefreshControl, KeyboardAvoidingView, Dimensions, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import AddComments from './AddComments'; //import the AddComments component
import moment from 'moment'; //import the moment library for timestamp use

export default class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentArray: [], //store our comments in a array
            commentText: '', //store the comment text
            refreshing: false, //status of refreshing
        }
    }

    //Render the AddComment component
    render() {
        let comments = this.state.commentArray.map((val, key, dt) => {
            return <AddComments key={key} keyval={key} val={val}
                    deleteMethod={ () => this.deleteComment(key) }
                    starMethod={ () => this.starComment(key) } />
        });

        //Return the user input interface and comment list view
        return (
            <View>
            <StatusBar backgroundColor = "#b3e6ff" barStyle = "dark-content"/>  
                <ScrollView style={styles.scrollContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh} />
                }>
                {comments}
                </ScrollView>
                <KeyboardAvoidingView behavior="padding" enabled>
                <View>
                <TouchableOpacity onPress={ this._addComment.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    placeholder='Add comment'
                    onChangeText={(commentText) => this.setState({commentText})}
                    value={this.state.commentText}
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                </KeyboardAvoidingView>
            </View>
        );
    }

    //What we do in our app onRefresh function
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.forceUpdate();
        this.setState({refreshing: false});
    }

    //What we do in adding a new comment. pass data to the array
    _addComment() {
        var date = moment().format('MMM DD HH:mm')
        if (this.state.commentText) {
            this.setState({ commentArray: this.state.commentArray })
            this.state.commentArray.push({ 'comments': this.state.commentText, 'date': date });
            this.setState({ commentText: '' })
        } else {
            alert("First you should type your comment!")
        }
    }

    //When we deleting the comment
    deleteComment(key) {
        this.state.commentArray.splice(key, 1);
        this.setState({ commentArray: this.state.commentArray })
    }

    //When we star the comment
    starComment(key) {
        alert('You starred the comment!')
    }

}

const styles =StyleSheet.create({
  scrollContainer: {
      flex: 1,
      marginTop: 20,
  },
  textInput: {
      width: Dimensions.get('window').width,
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopColor: '#ededed',
  },
  addButton: {
      alignSelf: 'flex-end',
      right: 20,
      bottom: 20,
      backgroundColor: '#ffa500',
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
  addButtonText: {
      marginBottom: 3,
      color: '#fff',
      fontSize: 35,
  },
});