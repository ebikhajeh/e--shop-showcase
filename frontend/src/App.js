import React from 'react';
import Layout from './Layout';
import Home from './Home'; // Import your page components

function App() {
  return (
    <Layout>
    <Home />
    {/* Other pages/components go here */}
  </Layout>
  );
}

export default App;
