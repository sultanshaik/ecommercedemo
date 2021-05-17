import {Container} from 'react-bootstrap';

import {Header, Footer} from './components'
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          My App
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;