import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { PHOTOS } from '../shared/photos';

function RenderPhoto({photo}) {
   
    if (photo) {
        return (
            <Card
                featuredTitle={photo.name}
                image={require('./images/bw.jpg')}>
                <Text style={{margin: 10,
                            justifyContent: 'center'
                            }}>
                    {photo.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class PhotoInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            photos: PHOTOS
        };
    }

    static navigationOptions = {
        title: 'Photo Information'
    };

    render() {
        const photoId = this.props.navigation.getParam('photoId');
        const  photo = this.state.photos.filter(photo => photo.id === photoId)[0];
        return <RenderPhoto photo={photo} />;
    }
}

export default PhotoInfo;