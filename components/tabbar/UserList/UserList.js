import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../../styles';

class UserList extends Component {
    render() {
        const { conversation } = styles
        return (
            <View>
                <FlatList
                    data={this.props.data.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('chats')}>
                            <View style={conversation}>
                                <Text key={item.id}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(UserList);