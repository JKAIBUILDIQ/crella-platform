const TalentMap = () => {
  return (
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh', 
      backgroundImage: 'url(/crellaverse.svg)',
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
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>🌍 Global Talent Map</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Discover and connect with talent worldwide
        </p>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          padding: '2rem', 
          borderRadius: '20px',
          marginTop: '2rem'
        }}>
          <p>🚧 Coming from your global-talent-map project</p>
          <p>Interactive world map with player profiles and talent discovery!</p>
        </div>
      </div>
    </div>
  )
}

export default TalentMap
