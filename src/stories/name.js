import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Box, Score} from "../App";

storiesOf('Data Integrated', module)
    .add('Cheki', () =>  (
        <div>
            <h2>Normal</h2>
            <h1>Hello World</h1>
        </div>
    ));

storiesOf('react-bootstrap', module)
    .add('bootstrap', () =>  (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Test Bootstrap</h1>
                    </Col>
                    <Col>
                        <h4>Score</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    ));

