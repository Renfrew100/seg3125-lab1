import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = 'mario';

  /*   const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'apple', id: 1},
        { title: 'Welcome', body: 'lorem ipsum...', author: 'apple', id: 2},
        { title: 'Hellos', body: 'lorem ipsum...', author: 'bananas', id: 3},

    ]); */

    const [blogs, setBlogs] = useState(null);

    const[name, setName] = useState('mario'); 
    const[age, setAge] = useState(25);

 /*     const handleClick = (e) => {
        console.log('hello,ninjas', e);
        setName('apple');
        setAge(30);
    } */

/*     const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } */
 
 /*    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]); */

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
    }, [name]);

   /*  useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    } */
    return(
        <div className="Home">
            <h2>Home page</h2>
    {/*         <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author ==="apple")} title ="Mario's blogs"/>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>Click me </button>
            <button onClick={(e) =>  handleClickAgain('mario', e)}>Click me again </button>
         */}
           {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div> 
    );
}
export default Home;