import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tile, SocialIcon } from 'react-native-elements';
import { PHOTOS } from '../shared/photos';

function RenderItem({item}) {
    if (item) {
        return (
            <Tile
                title={item.name}
                imageSrc={require('./images/bw.jpg')}
                featured

            >
            </Tile>
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
        title: 'Breezy Photography'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.photos.filter(photos => photos.featured)[0]} 
                />
                <Text style={styles.header}>
                    Heading
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit libero placerat risus suscipit, non viverra libero imperdiet. Donec eget tincidunt velit. Ut tristique mi augue, sed malesuada sem pretium vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ultricies ullamcorper pharetra. Maecenas gravida enim ligula, non congue libero molestie et. Quisque maximus posuere leo, vel ultrices ex.
                </Text>
                <View style={styles.icons}>
                    <SocialIcon 
                        light
                        type='twitter'    
                    />
                    <SocialIcon 
                        light
                        type='medium'    
                    />
                    <SocialIcon 
                        light
                        type='instagram'    
                    />
                    <SocialIcon 
                        light
                        type='facebook'    
                    />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        color: 'black',
        padding: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text: {
        margin: 10,
        padding: 20,
    },
    icons: {
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;