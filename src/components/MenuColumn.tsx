import './MenuColumn.css';
import { ReactElement } from 'react';
import { MenuItemConfig } from '../lib/interfaces';
import MenuItem from './MenuItem';

export type MenuColumnProps = {
  items : MenuItemConfig[];
  path : number[];
  onBack? : () => void;
  onEnter? : ( i : number ) => void;
}

function getNestedItems( items : MenuItemConfig[], path : number[] ) : MenuItemConfig[] {
  // This assumes that the provided path correctly points to a nested value
  return path.reduce( ( nestedItems, i ) => {
    return nestedItems[i].items!;
  }, items );
}

export default function MenuColumn( props : MenuColumnProps ) : ReactElement {
  const hasParent = ( props.path.length > 0 );
  const currentItems = getNestedItems( props.items, props.path );

  return (
    <div className="MenuColumn">
      { hasParent && (
        <button
          className="MenuColumn_Back"
          onClick={ props.onBack }
        />
      ) }

      { currentItems.map( ( item, i ) => (
        <MenuItem
          key={ i }
          config={ item }
          onEnter={ () => props.onEnter?.( i ) }
        />
      ) ) }
    </div>
  );
}