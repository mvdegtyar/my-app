import { createRoot } from 'react-dom/client';
import  Product from './components/Product';
import './global.css';

// const props1 = {
//   hours: 10,
//   minutes: 20
// };

// // const hours = props1.hours;
// // const minutes = props1.minutes;

// const {hours, minutes} = props1;

const Time = ({ hours, minutes }) => (
  <div className="time">
    <span className="time__hours">{hours}</span>
    :
    <span className="time__mins">{minutes}</span>
  </div>
)
const number = [1, 2, 3];
const number2 = number.map(n => n * 2);

const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const mails = names.map(name => `${name}@seznam.cz`);

console.log(number2)
console.log(mails)

const User = ({ login }) => <div className="user__login">{login}</div>;
const logins = names.map(name => <User login={name}></User>);
console.log(logins)

// const App = () => (
// <div>
//   {logins}
// </div>
// )

// <li> den </li>
const days = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek'];
// const list = days.map(day => <li>{day}</li>);

// const App = () => (
//   <ul>
//     {days.map(day => (
//       <li>{day}</li>)
//     )
//     }
//   </ul>
// )

const list = [
  { product: 'mrkev', amount: '3ks', done: false },
  { product: 'paprika', amount: '2ks', done: true },
  { product: 'cibule', amount: '2ks', done: false },
  { product: 'čínské zelí', amount: '1ks', done: true },
  { product: 'arašídy', amount: '250g', done: false },
  { product: 'sojová omáčka', amount: '1ks', done: false },
];

const App = () => (
  <div>
    {list.map(p => <Product key={p.product} product={p.product} amount={p.amount} done={p.done} ></Product>)}
  </div>
)

createRoot(
  document.querySelector('#app'),
).render(<App />);
