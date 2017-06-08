import React, {Component} from 'react';
import {Text, StyleSheet, View,} from 'react-native';

export default class TotalPointsContainer extends Component {
    render() {
        return (
            <View style={pointsStyles.totalPointsContainer}>
                <Text style={pointsStyles.totalPointsField}>{this.props.teamOneTotalPoints}</Text>
                <Text style={pointsStyles.totalPointsField}>Total</Text>
                <Text style={pointsStyles.totalPointsField}>{this.props.teamTwoTotalPoints}</Text>
            </View>
        );
    }
}


const pointsStyles = StyleSheet.create({
    totalPointsContainer: {
        // flex: 1,
        flexDirection: 'row',
        // height:30,
        // marginBottom: 5,
        // marginTop: 5,
    },
    totalPointsField: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        textAlign: 'center',
    },
});
