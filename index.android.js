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
    ListView
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
            </View>
        );
    }
}

class TeamsContainer extends Component {
    render() {
        return (
            <View style={styles.teamContainer}>
                <Text style={styles.teamField}>{this.props.teamNameOne}</Text>
                <Text style={styles.teamField}>{this.props.teamNameTwo}</Text>
            </View>
        );
    }
}

class TotalPointsContainer extends Component {
    render() {
        return (
            <View style={styles.totalPointsContainer}>
                <Text style={styles.totalPointsField}>{this.props.teamOneTotalPoints}</Text>
                <Text style={styles.totalPointsField}>{this.props.teamTwoTotalPoints}</Text>
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
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const teamOne = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
                // dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            dataSource: teamOne.cloneWithRows(gameHistory),
         };
    }

    render() {
        return (
            <ListView style={styles.gameList}
                dataSource={this.state.dataSource}
                //todo real values
                renderRow={(rowData) => <View style={styles.listRow}>
                    <Text>
                        {rowData.teamOnePoints}
                    </Text>
                    <View style={styles.separatorVertical} />
                    <Text>
                        {rowData.teamTwoPoints}
                    </Text>
                </View>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separatorHorizontal} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    gameList: {
        flex: 1,
        marginTop: 20,
    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
    },
    textListRow: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        textAlign: 'center',
    },
    teamContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
    totalPointsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
    },
    totalPointsField: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        textAlign: 'center',
    },
    teamField: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 30,
        textAlign: 'center',
    },
    separatorHorizontal: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
    },
    separatorVertical: {
        flex: 1,
        width: 1,
        backgroundColor: '#8E8E8E',
    },
});

AppRegistry.registerComponent('DebercCounter', () => DebercCounter);
