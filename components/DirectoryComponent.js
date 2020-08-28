import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PHOTOS } from '../shared/photos';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: PHOTOS
        };
    }

    static navigationOptions = {
        title:'Gallery'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('PhotoInfo', { photoId: item.id })}
                    leftAvatar={{ source: require('./images/bw.jpg')}}
                />
            );
        };

        return (
            <FlatList 
                data={this.state.photos}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;