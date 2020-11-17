import React from 'react';
import { Box, Button, Heading, Text, Flex } from 'rebass';
import Widget from './Widget';
import TutorialButton from "./TutorialButton"


export default class NotesWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Notes Widget";
        this.widgetType = "notes-widget"
        this.tutorialText = <Text>This is a basic widget for storing any information needed in text format. It may be editted at will and is there for refernce.</Text>
    }

    renderPanel=()=> {
        return (<>
        <Flex>
            <Text>{this.props.children}</Text>

        <Text
            fontSize={[ 3, 4, 5 ]}
            fontWeight=''
            color='primary'>
            Text
        </Text>
            </Flex>
            <Flex>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>
        </>
        )
    }
}
