import React, { useState } from 'react'
import { Container } from '../../styles'
import { FormArea } from '../../components/FormArea'
import { Button, ButtonText, MessageButton, MessageButtonText, MessageButtonTextBold } from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../assets/logo.svg'
import Email from '../../assets/email.svg'
import Lock from '../../assets/lock.svg'
import User from '../../assets/user.svg'

import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
    const [emailField, setEmailField] = useState('')
    const [nameField, setNameField] = useState('')

    const [passwordField, setPasswordField] = useState('')
    const navigation = useNavigation()

    const handleSignupClick = () => {
        // Validate
    }

    const handleSigninClick = () => {
        navigation.reset({
            routes: [{name : 'SignIn'}]
        })
    }

    return (
        <Container>
            <Logo width="100%" height="160" />

            <FormArea>

                <Input InputIconSvg={User} placeholder="Nome" value={nameField} onChangeText={character => setNameField(character)} />
                <Input InputIconSvg={Email} placeholder="Email" value={emailField} onChangeText={character => setEmailField(character)} />
                <Input InputIconSvg={Lock} placeholder="Senha" value={passwordField} onChangeText={character => setPasswordField(character)} password/>

                <Button>
                    <ButtonText>
                        CONTINUAR
                    </ButtonText>
                </Button>

            </FormArea>

            <MessageButton onPress={handleSigninClick}>
                <MessageButtonText>Já possui conta?</MessageButtonText>
                <MessageButtonTextBold>Entrar</MessageButtonTextBold>
            </MessageButton>

        </Container>
    )
}

export default SignUp;