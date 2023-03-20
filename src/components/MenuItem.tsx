import classNames from 'classnames';
import { MenuItemConfig } from '../lib/interfaces';
import './MenuItem.css';
import { ReactElement, useCallback } from 'react';

export type MenuItemProps = {
  config : MenuItemConfig;
  onEnter : ( items : MenuItemConfig[] ) => void;
}

export default function MenuItem( props : MenuItemProps ) : ReactElement {
  const isParent = props.config.hasOwnProperty( 'items' );

  const onClick = useCallback( () => {
    if ( isParent ) {
      props.onEnter( props.config.items! );
    }
  }, [
    isParent,
    props.onEnter,
    props.config,
  ] );

  return (
    <button className={ classNames( {
      'MenuItem' : true,
      'MenuItem-Parent' : isParent,
    } ) }
      onClick={ onClick }
    >
      { props.config.label }
    </button>
  );
}