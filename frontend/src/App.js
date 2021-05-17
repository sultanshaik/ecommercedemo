import {Container} from 'react-bootstrap';

import {Header, Footer} from './components'
import {HomePage} from './pages'
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;