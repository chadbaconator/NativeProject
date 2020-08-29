import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, SocialIcon } from 'react-native-elements';

function Mission() {
    return(
        <Card
        title='Our Mission'>
            <Text style={{margin: 10,
                        fontSize: 20}}>
                Our mission is to provide various top quality services without breaking the bank.  Around since 2019.  
            </Text>
        </Card>
    )
}

class About extends Component {
    
    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        return(
            <ScrollView>
                <Mission />
                <Card>
                    <Text>
                        Check out our socials!
                    </Text>
                    <View>
                    <SocialIcon 
                        button
                        type='twitter'    
                    />
                    <SocialIcon 
                        button
                        type='medium'    
                    />
                    <SocialIcon 
                        button
                        type='instagram'    
                    />
                    <SocialIcon 
                        button
                        type='facebook'    
                    />
                    </View>
                </Card>
            </ScrollView>
        );
    }
}

export default About;