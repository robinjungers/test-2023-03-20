import './Menu.css';
import { ReactElement, useState } from 'react';
import { MenuItemConfig } from '../lib/interfaces';
import classNames from 'classnames';
import usePrevious from '../hooks/usePrevious';
import MenuColumn from './MenuColumn';
import { copyArray } from '../lib/utils';

export type MenuProps = {
  items : MenuItemConfig[];
}

export default function Menu( props : MenuProps ) : ReactElement {
  const [path, setPath] = useState<number[]>( [] );
  const previousPath = usePrevious( path, copyArray );

  const toParent = () => setPath( path.slice( 0, -1 ) );
  const toChild = ( i : number ) => setPath( [...path, i] );

  return (
    <div className="Menu">
      <div
        key={ path.length }
        className={ classNames( {
          'Menu_Carousel' : true,
          'Menu_Carousel-SlideForward' : previousPath.length < path.length,
          'Menu_Carousel-SlideBackward' : previousPath.length > path.length,
        } ) }
      >
        <MenuColumn
          items={ props.items }
          path={ previousPath }
          onBack={ toParent }
          onEnter={ toChild }
        />
        <MenuColumn
          items={ props.items }
          path={ path }
          onBack={ toParent }
          onEnter={ toChild }
        />
      </div>
    </div>
  )
}