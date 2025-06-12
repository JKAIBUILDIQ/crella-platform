const TaskConverter = () => {
  return (
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh', 
      backgroundImage: 'url(/task_tower_crella.svg)',
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
        }}>🗼 Global Task Tower</h1>
        <p style={{ 
          fontSize: '1.4rem', 
          marginBottom: '2rem',
          textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
        }}>
          Transform tasks across cultures and languages
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
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>🚧 Integration point for Cultural Task Converter</p>
          <p>Your beautiful task conversion interface meets the stunning Task Tower!</p>
          <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <strong>🔄 Task Conversion</strong><br/>
              <small>Cross-cultural adaptation</small>
            </div>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <strong>🌍 Language Bridge</strong><br/>
              <small>Multilingual processing</small>
            </div>
            <div style={{ background: 'rgba(0, 255, 136, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <strong>🎯 Cultural Modules</strong><br/>
              <small>Region-specific adaptation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskConverter
