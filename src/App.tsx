import React from 'react';

import Navigation from './components/layout/Navigation';

const App = () => {
  return (
    <main className="dark min-h-screen w-screen flex">
      <Navigation className="w-72" />
      <div className="grow dark:bg-neutral-700">
        <h1>README</h1>
      </div>
    </main>
  );
}

export default App;