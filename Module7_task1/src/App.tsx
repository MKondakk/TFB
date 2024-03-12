import { FC } from 'react';
import JSXRules from './components/JSXRules';
import FancyTablePage from './components/FancyTablePage';
import Multiple from './components/Multiple';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="App">
      <JSXRules text="Jakiś text" />
      <FancyTablePage n={10} />
      <Multiple name="Nazwa" number={5} />
    </div>
  );
};
