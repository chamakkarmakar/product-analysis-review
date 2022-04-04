import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Accordion className='w-50 mx-auto my-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Context API?</Accordion.Header>
                    <Accordion.Body>
                    The context API helps the React Application to effectively produce global variables that can be used anywhere of the application. context is basically a component of React that can wrap a part or entire component tree. context provides API that helps to create context object, sharing states between themselves. The component can specify a value prop, which will be available to all nested components. Elements inside the components are calles consumer in this case. The main motto of the context API is to serve better in a small scope of sharing states.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Semantic tag?</Accordion.Header>
                    <Accordion.Body>
                    The Tags that clearly defined its contents or objectives are called Semantic Tags. Most of the semantic tags are introduced in HTML 5. There are several advantages of using these elements. When a semantic tag is applied, the developer will have a clear undertanding of which tag is responsible for which functionality. Some of the examples of smantic tags are <strong>article,section,nav</strong> etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Inline Element vs Block Element</Accordion.Header>
                    <Accordion.Body>
                    <strong>Block elements</strong> are start with new line. On the other hands, <strong>Inline elements</strong> do not start with new line, it can be placed withing a block element also. <strong>Block element</strong> takes the available full width. Whereas <strong>Inline element</strong> takes only the width required for this element. Some example of the <strong>Block elements</strong> are p,h1-h6 etc. Example of the <strong>Inline elements</strong> are a,img etc. 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;