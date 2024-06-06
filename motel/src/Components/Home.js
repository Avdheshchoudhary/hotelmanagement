import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt } from 'react-icons/fa';
// import herobackground from '../images/herobackground.jpg'
import Cards from './Card';

const Home= ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };



 

  
  return (
  <>
  
  <div className='container-fluid  row d-flex justify-content-center align-items-center'
  style={{borderRadius:'20px',backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundImage:"linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)"}}>
   
   {/* <h1 className='row mt-4  '>Over 174,000+ hotels and homes across 35+ countries</h1> */}


    <Form className=" my-5"  onSubmit={handleSearch} style={{ position: 'relative', width:'60%', textAlign:'center', justifyContent:'center' }}>
      <FormControl 
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ paddingLeft: '2.5rem', height:'60px'}} // Adjust padding to make space for the icon
      />
      <FaMapMarkerAlt style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', color: 'dark' }} />
     
    </Form>

    
    </div>

    <div className='text-center' style={{backgroundImage:'url("https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=dug-out-pool-hotel-poolside-1134176.jpg&fm=jpg") ',height:'400px'}}>


{/* <img  className="mt-5" src='https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=dug-out-pool-hotel-poolside-1134176.jpg&fm=jpg' alt='a'
style={{height:'400px', width:'100%', borderRadius:'30px'}}/> */}
<h1 className='fs-1'>Get Upto 60% off on Your Bookings</h1>

<div className='row'>
    <div className='col-md-6'>
        <img style={{height:"70%", width:'80%', borderRadius:'20px'}} src='https://th.bing.com/th?id=OIP.B67WQzZTphNEq9xnupgdngHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2'alt='a'/>
       
    </div>

    <div className='col-md-6'>
    <img style={{height:"70%", width:'80%', borderRadius:'20px'}}  src='https://th.bing.com/th?id=OIP.WQzjkG93g77MONpYrrgwswHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2'alt='a'/>
    </div>
</div>
    </div>
    <div className='mt-5'>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>

    </>
  );
};

export default Home;
