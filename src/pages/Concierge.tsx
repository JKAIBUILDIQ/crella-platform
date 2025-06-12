const Concierge = () => {
  return (
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh', 
      backgroundImage: 'url(/crella_concierge.svg)',
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
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '2rem',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          background: 'linear-gradient(45deg, #00ff88, #00ddff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>🤖 AI Concierge</h1>
        <p style={{ 
          fontSize: '1.4rem', 
          marginBottom: '2rem',
          textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
        }}>
          Your personal AI assistant for everything
        </p>
        <div style={{ 
          background: 'rgba(0, 20, 40, 0.8)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 255, 136, 0.3)',
          padding: '2rem', 
          borderRadius: '20px',
          marginTop: '2rem',
          boxShadow: '0 8px 32px rgba(0, 255, 136, 0.2)'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>🚧 Integration point for AI Concierge</p>
          <p>Your stunning concierge design meets intelligent AI assistance!</p>
          <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <strong>🤖 AI Chat</strong><br/>
              <small>Intelligent conversations</small>
            </div>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <strong>📱 Mobile First</strong><br/>
              <small>Optimized for mobile</small>
            </div>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <strong>🎯 Personal Assistant</strong><br/>
              <small>Task management</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Concierge
