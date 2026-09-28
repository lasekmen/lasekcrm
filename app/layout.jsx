export const metadata = {
  title: 'Lasek CRM',
  description: 'Twoja aplikacja CRM',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0b0b0b', color: '#e6e6e6' }}>
        {children}
      </body>
    </html>
  );
}
