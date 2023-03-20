import { ReactElement } from 'react';
import './App.css';
import { MenuItemConfig } from '../lib/interfaces';
import Menu from './Menu';
import menuItems from '../menuConfig.json';

export default function App() : ReactElement {
  return (
    <div className="App">
      <Menu
        items={ menuItems as MenuItemConfig[] }
      />
    </div>
  )
};
