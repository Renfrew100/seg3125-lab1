import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    //let name = 'mario';

  /*   const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'apple', id: 1},
        { title: 'Welcome', body: 'lorem ipsum...', author: 'apple', id: 2},
        { title: 'Hellos', body: 'lorem ipsum...', author: 'bananas', id: 3},

    ]); */

    ///const [blogs, setBlogs] = useState(null);
    //const [isPending, setIsPending] = useState(true);
   // const [error, setError] = useState(null);
    const { error, isPending, data: blogs } = useFetch("http://localhost:8000/blogs");

    //const[name, setName] = useState('mario'); 
   // const[age, setAge] = useState(25);

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
/* 
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:8000/blogss')
        .then(res => {
            console.log(res);
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => { 
            console.log(err.message);
            setIsPending(false);
            setError(err.message);
        })
    },1000);
}, []); 
 */

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
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div> 
    );
}
export default Home;