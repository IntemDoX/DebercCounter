/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, TextInput,
    View,
    ToastAndroid,

    ListView, Button, TouchableHighlight
} from 'react-native';

export default class DebercCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TeamsContainer teamNameOne="We" teamNameTwo="They"/>
                <TotalPointsContainer teamOneTotalPoints="900" teamTwoTotalPoints="800"/>
                <GameHistoryList />
                <AddButton/>
            </View>
        );
    }
}

class AddButton extends Component {

    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
    }

    _handlePress() {
        ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
    render() {
        return (
        <TouchableHighlight style={styles.buttonContainer}
                            underlayColor='red'
            onPress={() => this._handlePress()}>
            <Text>Add points</Text>
        </TouchableHighlight>
        )
    }
}



class TeamsContainer extends Component {
    render() {
        return (
            <View style={teamStyles.teamContainer}>
                <Text style={teamStyles.teamField}>{this.props.teamNameOne}</Text>
                <Text style={teamStyles.teamField}>{this.props.teamNameTwo}</Text>
            </View>
        );
    }
}

class TotalPointsContainer extends Component {
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

class Distribution {
    constructor(totalPoints, teamOnePoints,teamTwoPoints) {
        this.totalPoints = totalPoints;
        this.teamOnePoints = teamOnePoints;
        this.teamTwoPoints = teamTwoPoints;
    }
}

var gameHistory = [
    new Distribution(162,100,62),
    new Distribution(182,120,62),
    new Distribution(162,52,110),
    new Distribution(162,42,120),
    new Distribution(252,2,250),
];

class GameHistoryList extends Component {
    constructor() {
        super();
        const teamOne = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: teamOne.cloneWithRows(gameHistory),
         };
    }

    render() {
        return (
            <ListView style={styles.gameList}
                dataSource={this.state.dataSource}
                //todo real values
                renderRow={(rowData) => <View style={styles.listRow}>
                    <Text style={styles.textListRow}>
                        {rowData.teamOnePoints}
                    </Text>
                    <View style={separatorsStyles.separatorVertical} />
                    <Text style={styles.textListRow}>
                        {rowData.teamTwoPoints}
                    </Text>
                </View>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={separatorsStyles.separatorHorizontal} />}
            />
        );
    }
}

const teamStyles = StyleSheet.create({
    teamContainer: {
        // flex: 1,
        flexDirection: 'row',
        // marginBottom: 10,
        // height:30,
        // marginTop: 10,
    },
    teamField: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 30,
        textAlign: 'center',
    },
});

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

const separatorsStyles = StyleSheet.create({
    separatorHorizontal: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
    },
    separatorVertical: {
        // flex: 1,
        // width: 1,
        // backgroundColor: '#8E8E8E',
    },
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    addButton: {
        fontSize:30
    },
    gameList: {
        marginTop: 20,
    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        alignItems:'center',
        marginTop: 5,
    },
    textListRow: {
        fontSize: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#2E9298',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right:0,
    }
});

AppRegistry.registerComponent('DebercCounter', () => DebercCounter);
