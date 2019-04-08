import React from 'react';
import { Button } from 'reactstrap';
import boardsimg from '../images/boards.jpg'

const Banner = () => (
  
  <header 
    style = {{
      background: `#333 url(${boardsimg}) no-repeat center center/cover`,
      height: "100vh",
      color: "#fff",
    }}>
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '0 2rem',
        /*Overlay*/
        maxWidth: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }
    }>
      <h2>We are an all-purpose handyman service based in Toms River, NJ.</h2>
      <Button className="primaryButton"color="warning">Start A Project</Button>
      <p>We are fully licensed and insured.</p>
    </div>
  </header>
  
)

export default Banner

