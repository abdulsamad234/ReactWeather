var React = require('react');



var About = (props) => {
  return(
    <div>
      <h1 className = "text-center">About</h1>
      <p>This is a weather application built on react by Abdulsamad Aliyu. I have built this just to cure my boredom</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href = "https://facebook.github.io/react">React</a> - This was the javascript framework used.
        </li>
        <li>
          <a href = "http://openweathermap.org">Open Weather Map</a> - A very useful API
        </li>
      </ul>
    </div>

  );
}

module.exports = About;
