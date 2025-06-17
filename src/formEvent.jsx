import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Blogs() {
    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState('');
    const [author, setAuthor] = useState('james');

    const handleSubmit = (event) => {
        event.preventDefault();
        const blogData = { title, blog, author };
        console.log(blogData);
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Create a Blog</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Enter Title</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        placeholder="Enter blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBlog">
                    <Form.Label>Enter Blog</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        required
                        placeholder="Write your blog here"
                        value={blog}
                        onChange={(e) => setBlog(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Select Author</Form.Label>
                    <Form.Select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="james">James</option>
                        <option value="john">John</option>
                        <option value="kelvin">Kelvin</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Blogs;


// import React, { useState } from 'react';

// function Blogs() {
//     const [title, settitle] = useState('');
//     const [blog, setblog] = useState('');
//     const [author, setauthor] = useState('james');

//     // <>
//     return (
//         <form onsubmit={(event) => {
//             event.preventDefault();
//             const blogdata = { title, blog, author };
//             console.log(blogdata);
//         }}>
//             <label>Enter Title</label>
//             <input
//                 type="text"
//                 required
//                 onChange={(event) => settitle(event.target.value)}
//                 value={title}
//             />
//             <br />

//             <label>Enter Blog</label>
//             <input
//                 type="text"
//                 required
//                 onChange={(event) => setblog(event.target.value)}
//                 value={blog}
//             />
//             <br />

//             <select
//                 onChange={(event) => setauthor(event.target.value)}
//                 value={author}
//             >
//                 <option value="john">john</option>
//                 <option value="kelvin">kelvin</option>
//             </select>
//             <br />

//             <button type="submit">Submit</button>
//         </form>
//     )
// }
// export default Blogs;