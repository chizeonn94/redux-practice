import { createStore } from 'redux'

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const number = document.getElementById("number");

let count = 0;
number.innerText = count;
const handleMinus = () => {
 countStore.dispatch({type:'MINUS'})
 console.log(count)
}
const handlePlus = () => {
  countStore.dispatch({ type: 'ADD' })
  console.log(count)
}

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return count + 1;
    case 'MINUS':
      return count - 1;
    default:
      return count;
    
  }
}
const countStore = createStore(countModifier)
minus.addEventListener('click', handleMinus)
plus.addEventListener('click', handlePlus)

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);
