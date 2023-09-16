import React from 'react'
import Button from '../../components/Button'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import Assets from '../../Assets'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Fonts } from '../../Styles/StyleGuide'
import useOwnNavigation from '../../hooks/useOwnNavigation'


const Welcome: React.FC = () => {

    const { navigate } = useOwnNavigation();

    const handleContinueClick = () => {
        navigate('HomeRoutes')
    }

    return (
        <View style={styles.container} >
            <Assets.images.BackgroundApp style={styles.bgImage} />
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={[styles.title, Fonts.homeTitle()]}>Let's journey trough our solar system</Text>


            <View>
                <Text style={[styles.title, Fonts.paragraph(), styles.buttonMargin]}>Press the button below to embark</Text>

                <Button title="Continue" Icon={Assets.icons.Forward} onPress={handleContinueClick} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.brandBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        position: 'absolute', zIndex: 0,
    },
    welcome: {
        color: 'white', opacity: 0.65,
    },
    title: {
        color: 'white', maxWidth: '85%', textAlign: 'center',
    },
    buttonMargin: { marginTop: '50%' }

});

export default Welcome