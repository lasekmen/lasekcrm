export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#0b0b0b', color: '#e6e6e6', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Paweł — CRM</div>
          <div style={{ fontSize: '12px', color: '#999' }}>Twoja aplikacja sprzedażowa</div>
        </div>
        <nav style={{ display: 'flex', gap: '12px', fontSize: '14px' }}>
          <span>🗺️ Mapa</span>
          <span>📁 Klienci</span>
          <span>📊 Dashboard</span>
          <span>🤖 Agent AI</span>
        </nav>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: '16px', marginBottom: '16px' }}>
        <section style={{ backgroundColor: '#151515', borderRadius: '8px', padding: '12px' }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>🗺️ Mapa klientów</div>
          <div style={{ height: '260px', backgroundColor: '#0f0f0f', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
            Tu będzie mapa Google
          </div>
        </section>

        <section style={{ backgroundColor: '#151515', borderRadius: '8px', padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: 'bold' }}>📁 Panel klientów</span>
            <button style={{ padding: '4px 8px', borderRadius: '4px', border: 'none', backgroundColor: '#00e5ff', color: '#000', fontSize: '12px' }}>
              + Dodaj klienta
            </button>
          </div>

          <div style={{ backgroundColor: '#1e1e1e', borderRadius: '6px', padding: '8px', marginBottom: '8px' }}>
            <div style={{ fontWeight: 'bold' }}>Przykładowy klient</div>
            <div>⭐ ⭐ ⭐ ⭐ — potencjał: wysoki</div>
            <div>🟣 Status: Target</div>
            <div>📍 Gorzów Wlkp.</div>
          </div>
        </section>
      </div>

      <section style={{ backgroundColor: '#151515', borderRadius: '8px', padding: '12px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📊 Dashboard</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', fontSize: '12px' }}>
          <div>
            <div style={{ fontWeight: 'bold' }}>🔥 Priorytety</div>
            <ul>
              <li>Firma X — brak kontaktu 45 dni</li>
              <li>Firma Y — follow-up</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>🧊 Zamrożeni</div>
            <ul>
              <li>Firma Z — 90 dni bez kontaktu</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>⭐ Strategiczni</div>
            <ul>
              <li>Firma A — ⭐⭐⭐⭐⭐</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>🎯 Pipeline</div>
            <ul>
              <li>4 szanse w toku</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
