import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="box">
        <h1 className="home-heading">Welcome to My Calculator Website</h1>
        <p className="home-paragraph">
          This website is designed to provide you with a convenient and user-friendly calculator.
        </p>
        <p className="home-paragraph">
          Features of our calculator:
          <ul>
            <li>Basic arithmetic operations such as addition, subtraction, .</li>
            <li>Support for parentheses to handle complex expressions.</li>
            <li>Clear button to easily reset the calculator.</li>
            <li>Responsive design, allowing you to use it on various devices.</li>
          </ul>
        </p>
        <p>
          Start using our calculator now and make your calculations hassle-free!
        </p>
      </div>
    </div>
  );
}

export default Home;
