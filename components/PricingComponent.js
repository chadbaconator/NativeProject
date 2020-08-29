import React, { Component } from 'react';
import { ScrollView,} from 'react-native';
import { PricingCard } from 'react-native-elements';

class Pricing extends Component {
    
    static navigationOptions = {
        title: 'Pricing Options'
    };

    render() {
        return(
            <ScrollView>
                <PricingCard 
                    color="#0CEDB1"
                    title="Free"
                    price="$0"
                    info={['Inquiry', 'Free Quote Service Not Seen']}
                    button={{title: 'Click Here', icon: 'camera'}}
                />
                <PricingCard 
                    color="#230BE0"
                    title="Headshots"
                    price="$150"
                    info={['5 Headshots', 'Editing included']}
                    button={{title: 'Click Here', icon: 'camera'}}
                />
                <PricingCard 
                    color="#ff75e3"
                    title="Wedding's"
                    price="$1000"
                    info={['~300 Photos', 'Editing included']}
                    button={{title: 'Click Here', icon: 'camera'}}
                />
                <PricingCard 
                    color="#b30000"
                    title="Commerical Use"
                    price="$750"
                    info={['Advertising and Commerical use', 'Editing included']}
                    button={{title: 'Click Here', icon: 'camera'}}
                />
            </ScrollView>
        );
    }
}

export default Pricing;