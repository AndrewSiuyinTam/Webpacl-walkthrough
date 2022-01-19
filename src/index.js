import _ from 'lodash';
import './style.css';
import Barberry from './barberry.png';
import myName from './myName';
import Data from './data.xml';
import Notes from './data.csv';
function component(){
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'], ' ');
    // element.innerHTML = myName('Cody')
    element.classList.add('hello');

    // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Barberry;

  element.appendChild(myIcon);
  console.log(Data);
  console.log(Notes);

    return element;

}

document.body.appendChild(component());