import './globals.css'

export const metadata = {
  title: 'Intro section page',
  description: 'A task from Frontendmentor by code with mercy',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
