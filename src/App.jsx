import React from 'react';
// Importing the Header and Footer components
import Header from './components/Header';
import Footer from './components/Footer';

// Outlet is used by React Router to render the matched child route component
import { Outlet } from 'react-router-dom';

// Importing the Redux store
import store from './utils/store';
// Importing the Redux Provider to connect the store to the React app
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      {/* Provider wraps the entire app to give all components access to the Redux store */}
      <Provider store={store}>
        {/* Header component — usually contains navigation */}
        <Header />

        {/* Main content area */}
        {/* min-h-screen ensures the main section takes at least full viewport height */}
        {/* bg-black sets background color, text-white sets text color */}
        <main className="min-h-screen bg-black text-white">
          {/* Outlet renders the component matching the current route */}
          <Outlet />
        </main>

        {/* Footer component — usually contains copyright or links */}
        <Footer />
      </Provider>
    </>
  );
}

// Exporting the App component as the default export
export default App;
