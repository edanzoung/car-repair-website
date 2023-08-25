import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Spinner } from '/src/Components/Loader';
const Homepage = lazy(() => import('/src/Pages/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
