'use strict';

var App = {
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two'],
  getOptions: function getOptions() {}
};
var count = 0;
var user = {
  name: "Barath G D Krishnan",
  age: 27,
  location: "Chennai, TN, India"
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);
// const onFormSubmit = (e) =>{};
var appRoot = document.getElementById('app');
var renderForm = function renderForm() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Indecision App'
    ),
    App.subtitle && React.createElement(
      'p',
      null,
      App.subtitle
    ),
    App.options.length > 0 ? React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Here are your options'
      ),
      React.createElement(
        'button',
        { onClick: function onClick() {
            alert(App.options[Math.floor(Math.random() * App.options.length)]);
            renderForm();
          }, name: 'resetAll' },
        'What should I do'
      ),
      React.createElement(
        'button',
        { onClick: function onClick() {
            count = 0;
            App.options = [];
            renderForm();
          }, name: 'resetAll' },
        'Reset All'
      ),
      React.createElement(
        'ol',
        null,
        App.options.map(function (option) {
          return React.createElement(
            'li',
            { key: App.options.indexOf(option) },
            option
          );
        })
      )
    ) : React.createElement(
      'p',
      null,
      'No options'
    ),
    React.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          e.preventDefault();
          var option = e.target.elements.option.value;
          if (option) {
            count++;
            App.options.push(option);
            e.target.elements.option.value = null;
          }
          renderForm();
        } },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add options'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderForm();
