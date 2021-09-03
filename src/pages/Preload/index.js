import React , {useEffect} from 'react'
import {Container, LoaderIcon} from '../../styles'
import {Text} from 'react-native'
import Logo from '../../assets/logo.svg'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
const Preload = () => {
    const navigation = useNavigation()
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')

            if(token){

            }else{
                navigation.navigate('SignIn')
            }
        }

        checkToken();
    },[])

    return (
        <Container>
            <Logo width="100%" height="160" />
            <LoaderIcon size="large" color="#FFFFFF" />
        </Container>    
    )
}

export default Preload;