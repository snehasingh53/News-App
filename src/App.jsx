
import Navbar from './components/Navbar';
import News from './components/News';

import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-400 min-h-screen">
        <News />
        <Footer/>
      </div>
    </>
  );
}

export default App;
