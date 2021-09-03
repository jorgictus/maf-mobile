import React from 'react'
import styled from 'styled-components/native'


const Container = styled.SafeAreaView `
    background-color : #3B82F6;
    flex : 1;
    justify-content: center;
    align-items : center;
    
`;

const LoaderIcon = styled.ActivityIndicator`
    margin-top : 50px;
`

export {Container, LoaderIcon}