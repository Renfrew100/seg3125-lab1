const Navbar = () => {
    return(
        <nav className="Navbar">
            <h1>Get Dunking!</h1>
            <div className="links">
                <a href="/" style={{ 
            color: 'white', 
            backgroundColor: '#f35f0c',
            borderRadius: '10px' 
          }}>Home</a>
                <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f35f0c',
            borderRadius: '10px' 
          }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;