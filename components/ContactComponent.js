import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';



class Contact extends Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return(
            <ScrollView>
                <Card
                title='Contact Information'
                wrapperStyle={{margin:20}}>
                    <Text>1 Something Way</Text>
                    <Text>San Jose, CA 95136</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: 1-652-237-7777</Text>
                    <Text>Email: Chadbaconator@gmail.com</Text>
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;