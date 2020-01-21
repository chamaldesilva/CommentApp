import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements'; //import our avatar library 

const url = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'; //Here I put the image URL in to a variable
let name = 'Chamal'; //here i initialize the name variable.

export default class AddComments extends React.Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.comments}>
                <Avatar size="large" rounded source={{ uri: url }} />
                <View>
                    <Text style={styles.commentNameText}>{name}</Text>
                    <Text style={styles.commentText}>{this.props.val.comments}</Text>
                    <Text style={styles.dateText}>{this.props.val.date}</Text>
                </View>
                <View style={{ flexDirection:'row', alignItems:'center', marginLeft: 80, position: 'absolute', right: 20, bottom: 15}}>
                    <TouchableOpacity>
                        <Ionicons style={{ marginRight: 20 }} name="md-star-outline" size={25} color="orange" onPress={this.props.starMethod} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="md-trash" size={25} color="red" onPress={this.props.deleteMethod} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create({
    comments: {
        flexDirection:'row',
        alignItems:'center',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    commentText: {
        fontWeight: '500',
        paddingLeft: 10,
        marginBottom: 10,
        borderLeftWidth: 10,
        borderLeftColor: '#fff',
    },
    commentNameText: {
        fontWeight: '800',
        paddingLeft: 10,
        borderLeftWidth: 10,
        borderLeftColor: '#fff',
    },
    dateText: {
        bottom: 0,
        paddingLeft: 10,
        borderLeftWidth: 10,
        borderLeftColor: '#fff',
    },
    commentButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 15,
        bottom: 15,
        right: 10,
    },
    commentDeleteText: {
        color: 'white',
    },
});