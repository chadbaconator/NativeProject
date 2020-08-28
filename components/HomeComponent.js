import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PHOTOS } from '../shared/photos';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/bw.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: PHOTOS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.photos.filter(photos => photos.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;