import React from 'react';
import { useRoutes, Link } from 'react-router-dom';

import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const element = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/add", element: <AddCreator /> },
  ]);

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>💫 Creatorverse</h2>
        <nav>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/add">Add Creator</Link>
          </div>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1 className="main-title">🌟 Educational Platforms</h1>
        </header>

        {element}
      </main>
    </div>
  );
}

export default App;



