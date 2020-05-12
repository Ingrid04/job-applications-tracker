import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (

            <div > 
                <h4 className="home"> Please 
                    <Link to='/login'> 
                            Log In
                    </Link> 
                </h4>    
            </div>
);

export default Home;

