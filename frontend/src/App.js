import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import {Header, Footer} from './components'
import {HomePage, ProductPage} from './pages'
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component= {HomePage} exact/>
          <Route path='/product/:id' component= {ProductPage} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;