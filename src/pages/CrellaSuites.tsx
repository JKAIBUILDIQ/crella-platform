const CrellaSuites = () => {
  return (
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh', 
      backgroundImage: 'url(/Crella_Suites.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative'
    }}>
      {/* Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>🏨 Crella Suites</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Premium bot hosting and management suites
        </p>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          padding: '2rem', 
          borderRadius: '20px',
          marginTop: '2rem'
        }}>
          <p>🚧 Integration point for Bot Management System</p>
          <p>Bot Father, Elle, Juliet, Moderator suites and configurations</p>
          <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>🤖 Elle Suite</strong><br/>
              <small>AI Assistant Management</small>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>💫 Juliet Suite</strong><br/>
              <small>Creative Bot Platform</small>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>👥 Bot Father</strong><br/>
              <small>Bot Orchestration Hub</small>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>🛡️ Moderator Suite</strong><br/>
              <small>Content & Safety Control</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrellaSuites
