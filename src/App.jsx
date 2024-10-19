import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Footer from './components/Footer';
import AboutUs from './screens/AboutUs';
import Ministries from './screens/Ministries';
import Resources from './screens/Resources';
import Media from './screens/Media';
import Link from './screens/Link';

function App() {
  return (
    <BrowserRouter>
      <Box 
        minHeight="100vh" 
        display="flex" 
        flexDirection="column"
      >
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <Box flexGrow={1}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/ministries' element={<Ministries />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/media' element={<Media />} />
            <Route path='/link' element={<Link />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
