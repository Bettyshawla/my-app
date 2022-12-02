// All your imports should be at the top
// import logo from './logo.svg';
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";
import Board from "./components/Board";
// import Square from "./components/Square";

export default function App() {
  // What is JSX? JSX is a hybrid of JavaScript and HTML.  In JSX, we can only return one parent element. If we want to return more than one element, we have to wrap it in a parent element. Typically a div or you can use a React.Fragment

  // PROPS: we add props by adding key value pairs inside our rendered components. They look like attributes. We can call props anything that we want.

  return (
    <>
      <Header />
      {/* We only adding one header because we only need 1 title */}
      <div className="container">
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
      </div>

      {/* The reason we are adding 2 players is because we have player X & O */}
      <Board />
      
    </>
  );
}

// if we writing it this way all we have to do is add export before the const.
//NO NEED TO ADD DEFAULT
// const App = () => {
//   return (
//     <h1>
//       React Tac Toe
//     </h1>
//   )
// }

// Forms of writing the app function in Vanilla JS
// function declarations using the function
// function expressions
// arrow functions
