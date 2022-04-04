import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h1>Blog Page</h1>
            <Accordion className='w-50 mx-auto my-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Context API?</Accordion.Header>
                    <Accordion.Body>
                    Context API is the way to create global variables that can be passed around the component tree. Context API is an alternative to passing props manually in a component tree. Something that is also called Prop drilling.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Semantic tag?</Accordion.Header>
                    <Accordion.Body>
                    Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Inline Element vs Block Element</Accordion.Header>
                    <Accordion.Body>
                   <strong>Block Element:</strong> They consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it. <br />
                   <strong>Inline elements:</strong> Inline elements occupy only enough width that is sufficient to it and allows other elements next to it which are inline. Inline elements don't start from a new line and don't have top and bottom margins as block elements have.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;