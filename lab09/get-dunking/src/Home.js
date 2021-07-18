import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = 'mario';

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome', body: 'lorem ipsum...', author: 'apple', id: 2},
        { title: 'Hellos', body: 'lorem ipsum...', author: 'bananas', id: 3},

    ]);
    const[name, setName] = useState('mario'); 
    const[age, setAge] = useState(25);

    const handleClick = (e) => {
        console.log('hello,ninjas', e);
        setName('apple');
        setAge(30);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }
    return(
        <div className="Home">
            <h2>Home page</h2>
            <BlogList blogs={blogs} title="All Blogs" />
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>Click me </button>
            <button onClick={(e) =>  handleClickAgain('mario', e)}>Click me again </button>
        
        </div> 
    );
}
export default Home;