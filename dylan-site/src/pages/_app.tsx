import '@/styles/globals.css'
import '../styles/component.css';

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
