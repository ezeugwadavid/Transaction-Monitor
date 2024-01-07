import React from 'react';
import { HeaderContainer } from './header.styles';
import MobileHeader from '../mobile-header/mobile-header.component';
import DesktopHeader from '../desktop-header/desktop-header.component';

const Header = () => (
	<HeaderContainer>
		<div className="mobile">
        <MobileHeader />
        </div>
        <div className="desktop">
        <DesktopHeader />
        </div>
	</HeaderContainer>
);

export default Header;
