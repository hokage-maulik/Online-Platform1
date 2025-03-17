// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>
//         m 
//     </div>
//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  async function getdata() {
    try {
      const res = await axios.get("https://online-platform-backend.onrender.com/course/get");
      setState(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function searchdata(e) {
    setSearch(e.target.value);
  }

  const filteredProducts = state.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getdata();
  }, []);

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    flexWrap: 'wrap',
  };

  const logoStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ecf0f1',
    textDecoration: 'none',
  };

  const ulStyles = {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#ecf0f1',
    transition: 'color 0.3s ease',
  };

  const searchBarStyles = {
    padding: '5px 10px',
    border: '1px solid #ecf0f1',
    borderRadius: '4px',
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    outline: 'none',
    flex: '1',
  };

  const searchResultsStyles = {
    position: 'absolute',
    background: 'white',
    zIndex: 1,
    marginTop: '10px',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '300px',
    overflow: 'hidden',
  };

  const searchItemStyles = {
    padding: '10px',
    textDecoration: 'none',
    color: '#2c3e50',
    borderBottom: '1px solid #ccc',
  };

  return (
    <div>
      <nav style={navStyles}>
        <Link to="/" style={logoStyles}>
          Learning Platform
        </Link>
        <ul style={ulStyles}>
          <li style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={searchdata}
              style={searchBarStyles}
            />
            {search && (
              <div style={searchResultsStyles}>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((el) => (
                    <Link
                      to={`/lesson/${el._id}`}
                      key={el._id}
                      style={searchItemStyles}
                    >
                      {el.name}
                    </Link>
                  ))
                ) : (
                  <p style={{ padding: '10px', color: '#7f8c8d' }}>No results found</p>
                )}
              </div>
            )}
          </li>
          <li>
            <Link to="/" style={linkStyles}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/signup" style={linkStyles}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" style={linkStyles}>
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}


