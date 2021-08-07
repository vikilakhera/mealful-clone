import './App.css';
import Calendar from './components/calendar';
import Footer from './components/footer';
import Header from './components/header/header';
import LunchMenu from './components/lunch/lunchMenu';
import Note from './components/note';

function App() {
  const tests = [
    {as: "first",
    countB: 2,
    bs: ["second", "third"]}
  ]
  return (
    <div className="App">
      <Header />
      <Note />
      <Calendar />
      <LunchMenu />
      <Footer />
    </div>
  );
}

export default App;


// {
//   tests.map(test => {
//     <button>{test.as}</button>
//     if(test.countB > 1)
//       test.bs.map((b) => (
//         <button>{b}</button>
//       ))
//     }
//   )
// }

// {
//   tests.map(test => {
//     return(
//       <div>
//         <button>{test.as}</button>
//         {
//           test.bs.map(b => {
//             return(
//               <button>{b}</button>
//             )
//           })
//         }
//       </div>
//     )
//   }
//   )
// }