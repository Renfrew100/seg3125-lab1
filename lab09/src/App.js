import Navbar from './Navbar';
import Home from './Home'


function App() {
  //const title = "Welcome to my new blog";
  //const likes = 50;
  // const person = { name: 'yoshi', age: 30}; objects are not valid
//  const link = "http://www.google.com";
  
  return (    
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
    {/*     <h1>{title}</h1>
        <p>Liked {likes} times </p>
        <p>{Math.random() * 50} </p>
        <a href={link}>google site</a> */}
      </div>
    </div>
  );
}

export default App;
