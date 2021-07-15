import React from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // Fetch data from https://reqres.in/api/users?page=1
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
        //  console.log(isDateLoaded);
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Navbar Start */}
      <section className='wholecontainer'>
        <nav className='navbar navbar-expand-lg navbar-light glassnav'>
          <div className='container-fluid '>
            <span className='brandname'>Let's Grow More</span>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav ms-auto  me-5'>
                <button className='glassButton' onClick={handleClick}>
                  Get Users
                </button>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}

        <div className='container'>
          <div className='row justify-content-center '>
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div className='col-4 mt-5'>
                  <span className='loader'></span>
                </div>
              )
            ) : (
              <div className='col-6  col-sm-8 instruction'>
               <b>Click on "Get Users" button to get users of LGM Users</b>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
