import React, { Component } from 'react';
import { ScrollView, Text, View, Modal, StyleSheet } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            text: '',
            showModal: false
        }
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleSubmit() {
        console.log(JSON.stringify(this.state));
        this.setState({
            name: '',
            text: '',
            showModal: false
        });
    }

    resetForm() {
        this.setState({
            name: '',
            text: '',
            showModal: false
        });
    }

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
                <Button
                    style={{paddingTop: 10}}
                    type='outline'
                    title='Inquiries'
                    onPress={() => this.toggleModal()}
                />
                <Modal 
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}>
                    <View style={styles.modal}>
                        <Input
                            placeholder='Name'
                            leftIcon={{type: 'font-awesome', name: 'user-o'}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={name => {this.setState({name: name})}}
                            value={this.state.name}
                        />
                        <Input
                            placeholder='Question or Inquiries?'
                            leftIcon={{type: 'font-awesome', name: 'comment-o'}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={text => {this.setState({text: text})}}
                            value={this.state.text}
                        />
                        <View style={{margin: 10}}>
                            <Button
                                onPress={() => {
                                    this.handleComment();
                                    this.resetForm();
                                }}
                                color='#5637DD'
                                title='Submit'
                            />
                        </View>
                        <View style={{margin: 10 }}>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();}
                                }
                                color='#808080'
                                title='Cancel'
                            />
                        </View>
                    </View>
                </Modal>
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardItem: {
        flex: 1,
        margin: 10
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
});

export default Contact;

