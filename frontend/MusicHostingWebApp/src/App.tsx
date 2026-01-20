import Layout from './components/Layout';
import Footer from './components/Footer';

export function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Layout />
      <Footer />
    </div>
  )
}
