import React from 'react';
import { HeaderProps, HeaderState } from '../../types/types';

class Header extends React.Component<HeaderState, HeaderProps> {

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      header: props.header,
    }
  }

  render() {
    return <h1>{this.state.header}</h1>
  }
}

export default Header;
