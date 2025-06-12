const CustomerInterface = () => {
  return (
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh', 
      backgroundImage: 'url(/crellabeauty.svg)',
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
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>👥 Customer Interface</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Customer chat and gallery interface
        </p>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          padding: '2rem', 
          borderRadius: '20px',
          marginTop: '2rem'
        }}>
          <p>🚧 Integration point for Customer Communication System</p>
          <p>Customer Gallery, Live Chat, and Support Interface</p>
          <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>📸 Customer Gallery</strong><br/>
              <small>customer_gallery.html integration</small>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>💬 Live Chat</strong><br/>
              <small>Real-time communication hub</small>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>🎯 Chat Interface</strong><br/>
              <small>chat-interface integration</small>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '10px' }}>
              <strong>📺 KTV UI</strong><br/>
              <small>Karaoke and entertainment</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerInterface
