import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        color: '#9356DC'
      }}>
        404
      </h1>
      <h2 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '1rem',
        color: '#353535'
      }}>
        Restaurant introuvable
      </h2>
      <p style={{ 
        fontSize: '1rem', 
        marginBottom: '2rem',
        color: '#666',
        maxWidth: '400px'
      }}>
        Désolé, le restaurant que vous recherchez n'existe pas. 
        Peut-être a-t-il changé d'adresse ou n'est-il plus disponible.
      </p>
      <Link 
        href="/" 
        style={{
          background: 'linear-gradient(to bottom right, #FF79DA, #9356DC)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'transform 0.2s ease',
          display: 'inline-block'
        }}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}