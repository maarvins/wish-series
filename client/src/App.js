import { Form } from './components/Form'
import { Header } from './components/Header'
import { CardList } from './components/CardList';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Form />
      <CardList />
    </div>
  );
}

export default App;
