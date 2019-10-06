import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import components
import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Chatbot from './chatbot/Chatbot';

const App = () => {
   return (
       <div className="container">
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Landing} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/about" component={About} />
                <Chatbot/>
            </BrowserRouter>
       </div>
   )
}

export default App;
