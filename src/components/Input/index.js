import React from 'react'
import styled from 'styled-components/native'


const InputArea = styled.View `
   width : 100%;
   height : 60px;
   background-color : #639fff;
   flex-direction : row;
   border-radius: 10px;
   padding-left : 15px;
   align-items : center
   margin-bottom: 15px;

`;

const Input = styled.TextInput `
    flex: 1;
    font-size : 16px;
    color : white;
    margin-left : 10px;

`

export default ({InputIconSvg, placeholder, onChangeText, password}) => {
    return (
        <InputArea>
            <InputIconSvg width="24" color="white" />
            <Input placeholder={placeholder} placeholderTextColor="#f0f0f0" onChangeText={onChangeText}  secureTextEntry={password} />
        </InputArea>
    )
}