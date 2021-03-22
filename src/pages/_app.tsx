import '../styles/global.css';

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { useState } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';


//parei no challenges provider kk
function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <CountdownProvider>
      <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
