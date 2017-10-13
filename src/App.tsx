import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { default as SlotApi } from './components/api/slots';
import { default as Form } from './components/form';
import { default as Header } from './components/header';
import { default as Introduction } from './components/introduction';
import { default as Slots } from './components/slots';
import { default as How } from './components/how';
import { default as Footer } from './components/footer';
import { default as Portfolio } from './components/portfolio';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* LOAD API CALLS INTO THE REDUX STORE */}
          <SlotApi />
          {/* MAIN PAGE */}
          <Header />
          <Introduction />
          <Portfolio />
          <Slots />
          <How />
          <Form />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
