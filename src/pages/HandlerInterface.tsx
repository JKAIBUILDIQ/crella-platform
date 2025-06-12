const HandlerInterface = () => {
  // Sample active conversations - in production, fetch from your API
  const activeConversations = [
    { id: 'chat1', userId: 'user123', customerName: 'Mike', lastMessage: 'hello', unread: 3, status: 'active' },
    { id: 'chat2', userId: 'user456', customerName: 'Sarah', lastMessage: 'Thanks!', unread: 0, status: 'active' },
    { id: 'chat3', userId: 'user789', customerName: 'John', lastMessage: 'Tell me more, babe 💋', unread: 1, status: 'waiting' },
  ];

  const openChatWindow = (chatId: string, userId: string, customerName: string) => {
    // Open your existing chat window URL in a new tab
    const chatUrl = `http://146.190.188.208:8000/chat?chatId=${chatId}&userId=${userId}`;
    window.open(chatUrl, `chat_${chatId}`, 'width=900,height=700,scrollbars=yes,resizable=yes');
  };

  const openHandlerDashboard = () => {
    // Open your handler dashboard
    const dashboardUrl = `http://146.190.188.208:8000/handler_dashboard.html`;
    window.open(dashboardUrl, 'handler_dashboard', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div style={{ 
      paddingTop: '100px', 
      minHeight: '100vh', 
      backgroundImage: 'url(/crella_datacenter.svg)',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1
      }} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '2rem',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          background: 'linear-gradient(45deg, #00ff88, #0066ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>🛠️ Handler Interface</h1>
        <p style={{ 
          fontSize: '1.4rem', 
          marginBottom: '2rem',
          textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
        }}>
          AI Companion Handler Management System
        </p>

        {/* Active Conversations Panel */}
        <div style={{ 
          background: 'rgba(0, 20, 40, 0.9)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 102, 255, 0.3)',
          padding: '2rem', 
          borderRadius: '20px',
          marginBottom: '2rem',
          boxShadow: '0 8px 32px rgba(0, 102, 255, 0.2)'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00ff88' }}>💬 Active Customer Conversations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {activeConversations.map((chat) => (
              <div key={chat.id} style={{ 
                background: 'rgba(0, 102, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '15px', 
                border: '1px solid rgba(0, 102, 255, 0.3)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ fontSize: '1.1rem' }}>👤 {chat.customerName}</strong>
                  {chat.unread > 0 && (
                    <span style={{ 
                      background: '#ff4444', 
                      color: 'white', 
                      borderRadius: '50%', 
                      padding: '0.2rem 0.5rem', 
                      fontSize: '0.8rem',
                      minWidth: '1.5rem',
                      textAlign: 'center'
                    }}>
                      {chat.unread}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#bbb', marginBottom: '1rem' }}>
                  Last: "{chat.lastMessage}"
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    background: chat.status === 'active' ? '#00ff00' : '#ffaa00' 
                  }}></span>
                  <span style={{ fontSize: '0.8rem', color: '#ccc' }}>{chat.status}</span>
                </div>
                <button 
                  onClick={() => openChatWindow(chat.id, chat.userId, chat.customerName)}
                  style={{
                    width: '100%',
                    marginTop: '1rem',
                    padding: '0.8rem',
                    background: 'linear-gradient(45deg, #00ff88, #0066ff)',
                    border: 'none',
                    borderRadius: '10px',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'transform 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  💬 Open Chat Window
                </button>
              </div>
            ))}
          </div>
          
          {/* Quick Access Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => openChatWindow('new', 'new_user', 'New Customer')}
              style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(45deg, #ff69b4, #ff1493)',
                border: 'none',
                borderRadius: '15px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              ➕ New Chat Window
            </button>
            
            <button 
              onClick={openHandlerDashboard}
              style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(45deg, #8a2be2, #4b0082)',
                border: 'none',
                borderRadius: '15px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              📊 Handler Dashboard
            </button>
          </div>
        </div>

        {/* System Integration Panel */}
        <div style={{ 
          background: 'rgba(0, 20, 40, 0.8)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 102, 255, 0.3)',
          padding: '2rem', 
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 102, 255, 0.2)'
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00ff88' }}>🏗️ System Integration</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(0, 102, 255, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 102, 255, 0.2)' }}>
              <strong>💬 Chat Windows</strong><br/>
              <small>External popup chat management</small>
            </div>
            <div style={{ background: 'rgba(0, 102, 255, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 102, 255, 0.2)' }}>
              <strong>🤖 AI Companions</strong><br/>
              <small>Jess, Juliet, Elle & custom models</small>
            </div>
            <div style={{ background: 'rgba(0, 102, 255, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 102, 255, 0.2)' }}>
              <strong>🌐 Multilingual Support</strong><br/>
              <small>English, Japanese, Korean, Tagalog, Cebuano</small>
            </div>
            <div style={{ background: 'rgba(0, 102, 255, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 102, 255, 0.2)' }}>
              <strong>⚡ FastAPI Backend</strong><br/>
              <small>KTV & companion API integration</small>
            </div>
            <div style={{ background: 'rgba(0, 102, 255, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 102, 255, 0.2)' }}>
              <strong>💰 Tipping System</strong><br/>
              <small>Customer engagement & monetization</small>
            </div>
            <div style={{ background: 'rgba(0, 102, 255, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(0, 102, 255, 0.2)' }}>
              <strong>📱 Mobile Integration</strong><br/>
              <small>Telegram WebApp & mobile support</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HandlerInterface
