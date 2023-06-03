import { FC, PropsWithChildren } from 'react';
import FlowbiteContext from './context/FlowbiteContext';

import './globals.css';

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Cullen Music</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
};

export default RootLayout;
