import React from 'react'
import styled from 'styled-components/native'


const Button = styled.TouchableOpacity`
    height: 60px;
    background-color: orange
    border-radius: 10px;
    justify-content: center;
    align-items: center
`;


const ButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

const MessageButton = styled.TouchableOpacity`
    flex-direction : row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const MessageButtonText = styled.Text`
    font-size: 16px;
    color : #FFF; 
`;

const MessageButtonTextBold = styled.Text`
    font-size: 16px;
    color : #fff;
    font-weight: bold;
    margin-left: 5px;

`;



export { Button, ButtonText, MessageButton, MessageButtonText, MessageButtonTextBold }