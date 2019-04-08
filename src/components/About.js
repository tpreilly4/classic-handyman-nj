import React from 'react';
import yanni from '../images/yanni.png'

const About = () => (

<section id="about" style={{display:'flex'}}>
  <div style={{flex: 1, background: `url(${yanni}) no-repeat center center/cover`,}}/>
  <div style={{flex:2}}>
    <h2 class="m-heading" style={{margin:'10px'}}>
      <span class="text-warning">Who</span> We Are
    </h2>
    <p style={{margin: '10px'}}>My name is Yanni Paitakis and I just started a fresh new handyman business, called The Classic Handyman LLC! I will be sharing pictures of my work to ensure my customers that they will always receive quality. I am a father of one, with the greatest son in the world. My business is fully licensed and insured. Follow me to see what can be done and contact me for any information or inquiries!</p>
  </div>
</section>
)

export default About