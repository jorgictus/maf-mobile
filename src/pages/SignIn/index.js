import React, { useState } from 'react'
import { Container } from '../../styles'
import { FormArea } from '../../components/FormArea'
import { Button, ButtonText, MessageButton, MessageButtonText, MessageButtonTextBold } from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../assets/logo.svg'
import Email from '../../assets/email.svg'
import Lock from '../../assets/lock.svg'
import { useNavigation } from '@react-navigation/native'


const SignIn = () => {
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const navigation = useNavigation()

    const handleSignupClick = () => {
        navigation.reset({
            routes: [{name : 'SignUp'}]
        })
    }

    const handleSigninClick = () => {
        //validate
    }

    return (
        <Container>
            <Logo width="100%" height="160" />

            <FormArea>

                <Input InputIconSvg={Email} placeholder="Email" value={emailField} onChangeText={character => setEmailField(character)} />
                <Input InputIconSvg={Lock} placeholder="Senha" value={passwordField} onChangeText={character => setPasswordField(character)} password/>

                <Button>
                    <ButtonText>
                        LOGIN
                    </ButtonText>
                </Button>

            </FormArea>

            <MessageButton onPress={handleSignupClick}>
                <MessageButtonText>Ainda não possui conta ?</MessageButtonText>
                <MessageButtonTextBold>Cadastre-se</MessageButtonTextBold>
            </MessageButton>

        </Container>
    )
}

export default SignIn;