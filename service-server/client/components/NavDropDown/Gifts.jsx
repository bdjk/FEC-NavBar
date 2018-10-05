import React from 'react';

const Gifts = props => {
  return (
    <div className="NavDrops">
      <div className="navs-text">
        <h4>
          <a href="/product">Gift Cards</a>
        </h4>
        <h4>
          <a href="/product">Gift Finder</a>
        </h4>
        <h4>
          <a href="/product">View All Gifts</a>
        </h4>
        <h4>
          <a href="/product">Mini Size</a>
        </h4>
        <h4>
          <a href="/product">Value Sets</a>
        </h4>
        <h4>By Price</h4>
        <div>
          <a href="https://www.w3schools.com/images/">$10 and Under</a>
        </div>
        <div>
          <a href="/product">$25 and Under</a>
        </div>
        <div>
          <a href="/product">$50 and Under</a>
        </div>
        <div>
          <a href="/product">$75 and Under</a>
        </div>
        <div>
          <a href="/product">$100 and Under</a>
        </div>
      </div>
      <div className="navs-text">
        <h4>By Category</h4>
        <div>
          <a href="/product">Makeup</a>
        </div>
        <div>
          <a href="/product">Skincare</a>
        </div>
        <div>
          <a href="/product">Fragrance</a>
        </div>
        <div>
          <a href="/product">Bath {'&'} Body</a>
        </div>
        <div>
          <a href="/product">Candles {'&'} Home Scents</a>
        </div>
        <div>
          <a href="/product">Men</a>
        </div>
      </div>
      <img src="https://imgur.com/FzpVRJy.jpg" />
      <div className="column">
        <img src="https://imgur.com/7DaGRVS.jpg" />
        <img src="https://imgur.com/PuZNfK7.jpg" />
      </div>
    </div>
  );
};
export default Gifts;
