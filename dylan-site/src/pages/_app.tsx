import '@/styles/globals.css'
import '@/styles/slidetextlarge.css';
import '@/styles/slidetextsmall.css';
import '@/styles/slidetext.css';
import '@/styles/fliptext.css';
import '@/styles/markdown.css';

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
