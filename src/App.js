import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Header from './components/Header';
import BooksList from './components/BooksList';
import AddBooks from './components/AddBooks';
import './css/styles.css'
import useLocalStorage from './hooks/useLocalStorage';
import EditBook from './components/EditBook';
import BooksContext from './contexts/BooksContext';

function App()
{
  const [books, setBooks] = useLocalStorage('book', [])

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="main-content"> 
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBooks} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
            </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <div className="container">
    //     <Header />
    //     <div className="main-content">
    //       <Switch>

    //         <Route
    //           render={(props) => (
    //             <BooksList {...props} books={books} setBooks={setBooks}/>
    //           )}
    //           path="/"
    //           exact={true}
    //         />

    //         <Route
    //           render={(props) => (
    //             <AddBooks {...props} books={books} setBooks={setBooks} />
    //           )}
    //           path="/add"
    //         />

    //         <Route
    //           render={(props) => (
    //             <EditBook {...props} books={books} setBooks={setBooks} />
    //           )}
    //           path="/edit/:id"
    //         />

    //         <Route component={() => <Redirect to="/" />} />

    //       </Switch>
    //     </div>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
