'use client';

import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Content,
  Theme,
} from '@carbon/react';
import {
  Search,
  Notification,
  UserAvatar,
  Help,
} from '@carbon/icons-react';
import './globals.scss';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <title>MyCourses - IBM Carbon Version</title>
      </head>
      <body>
        <Theme theme="g100">
          <Header aria-label="MyCourses">
            <HeaderName href="/" prefix="IBM">
              [MyCourses] v4
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search" tooltipAlignment="end">
                <Search size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="end">
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Help" tooltipAlignment="end">
                <Help size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="User Profile" tooltipAlignment="end">
                <UserAvatar size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        </Theme>
        <Content className="p-0">
          {children}
        </Content>
      </body>
    </html>
  );
}
