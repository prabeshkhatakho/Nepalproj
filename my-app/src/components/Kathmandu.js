
  import './component.css';
  import React from 'react'
  import Navbar from './Navbar'
  import Sidebar from './SideBar'

  function Kathmandu() {
    return (
      <div className="locations">
        <Navbar />
        <Sidebar />
        <div className="location">
        
<h1>Tell me about Kathmandu.</h1>
<p>Kathmandu is the capital of Nepal and the largest city in the country. It is also the cultural and economic center of Nepal. The city is home to many historical and religious sites, as well as a number of museums, galleries, and other cultural institutions. Kathmandu is also a popular tourist destination, and the city's tourism industry is a major contributor to the Nepalese economy.</p>
<img src="https://th.bing.com/th/id/R.836fdb7c5001dfa98ffce65506d28291?rik=htK8MUzoRkM9fA&pid=ImgRaw&r=0" alt="Image"/>
        </div>
      </div>
    )
  }

  export default Kathmandu;

  