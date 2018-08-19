import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { createNavigator } from 'react-navigation'

import styles from '../../../styles';
import ChatScreen from '../ChatScreen/ChatScreen';


class Conversation extends Component {
    render() {
        const { conversation } = styles
        return (
            <View>
                <FlatList
                    data={this.props.data.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={navigate('ChatScreen')}>
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

// createNavigator({
//     conversations: {
//         screen: Conversation,
//     },
//     chat: {
//         screen: ChatScreen,
//         navigationOption: ({ navigation }) => ({
//             title: `${navigation.state.params.title}`
//         })
//     }
// })

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openChat: dispatch({ type: 'OPEN_CHAT' })
    }
}

export default connect(mapStateToProps)(Conversation);