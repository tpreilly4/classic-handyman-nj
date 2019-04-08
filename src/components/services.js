import React from 'react';
import './services.css';

const Services = () => (

  <section id="services" class="bg-light py-3">
      <div className="container">
        <h2 className="m-heading text-center">
          <span class="text-primary">What</span> We Do
        </h2>
        <div className="items">
          <div className="item">
            <i className="fas fa-university fa-2x"></i>
            <div>
              <h3>Home Renovations</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi?</p>
            </div>
          </div>
          <div className="item">
            <i className="fas fa-book-reader fa-2x"></i>
            <div>
              <h3>Repairs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi?</p>
            </div>
          </div>
          <div className="item">
            <i className="fas fa-pencil-alt fa-2x"></i>
            <div>
              <h3>Custom Furniture</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, consequuntur!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
)

export default Services