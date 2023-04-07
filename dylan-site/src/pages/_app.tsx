import '@/styles/globals.css'
import '../styles/SlideTextSmall.css';
import '../styles/SlideTextLarge.css';
import '../styles/SlideText.css';
import '../styles/FlipText.css';

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
