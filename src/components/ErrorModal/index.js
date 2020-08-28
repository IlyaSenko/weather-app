import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export const ErrorModal = () => {
    return (
        <Card body inverse color="danger">
            <CardTitle>Network Error</CardTitle>
            <CardText>This city undefined.</CardText>
        </Card>     
    )
}