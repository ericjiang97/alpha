import React, { useContext } from 'react';

import { Button, TopNav, useColorMode, Icon, useBreakpoint, Popover, Avatar, Switch } from 'bumbag';
import SideBar from './SideBar';
import { doSignOut } from '../lib/firebase';
import AuthenticationContext from '../contexts/AuthenticationContext';
import { useRouter } from 'next/dist/client/router';

const Nav: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { isLoaded, user } = useContext(AuthenticationContext);
  const router = useRouter();
  const isDesktopOrLarger = useBreakpoint('min-desktop');

  const isLightMode = colorMode === 'light';

  const buttonProps = Button.useProps({ variant: 'ghost' });

  return (
    <TopNav>
      <TopNav.Section>
        {!isDesktopOrLarger && (
          <TopNav.Item marginLeft="minor-1">
            <SideBar />
          </TopNav.Item>
        )}
        <TopNav.Item href="/" marginLeft="major-2">
          Eric Jiang
        </TopNav.Item>
      </TopNav.Section>
      {isDesktopOrLarger && (
        <TopNav.Section>
          <TopNav.Item href="/blog">Blog</TopNav.Item>
          <TopNav.Item href="/projects">Projects</TopNav.Item>
          <TopNav.Item href="/photos">Photos</TopNav.Item>
          <TopNav.Item href="/philanthropy">Philanthropy</TopNav.Item>
          <TopNav.Item href="/talks">Talks</TopNav.Item>
          <TopNav.Item href="/videos">Videos</TopNav.Item>
          <TopNav.Item href="/about">About</TopNav.Item>
        </TopNav.Section>
      )}
      <TopNav.Section marginRight="major-2">
        <TopNav.Item>
          <Popover.State placement="bottom">
            <Popover.Disclosure use={Button} {...buttonProps}>
              {!user ? (
                <Icon icon="solid-user" />
              ) : user.photoURL ? (
                <Avatar src={user.photoURL} variant="circle" size="small" />
              ) : (
                <Avatar
                  initials={`${user.displayName ? user.displayName[0] : 'U'}`}
                  variant="circle"
                  palette="primary"
                  size="small"
                />
              )}
            </Popover.Disclosure>
            <Popover title={user ? `Welcome ${user.displayName}` : 'Login to Continue!'}>
              {/* <Heading use="h6">User Settings</Heading> */}
              <Switch
                label={`${isLightMode ? 'Light' : 'Dark'} Mode`}
                checked={isLightMode}
                onChange={() => {
                  if (isLightMode) {
                    setColorMode('dark');
                  } else {
                    setColorMode('light');
                  }
                }}
              />
              <hr />
              {isLoaded && !user && <Button onClick={() => router.push('/login')}>Login with Google</Button>}
              {user && <Button onClick={() => doSignOut()}>Log out</Button>}
            </Popover>
          </Popover.State>
        </TopNav.Item>
      </TopNav.Section>
    </TopNav>
  );
};

export default Nav;
