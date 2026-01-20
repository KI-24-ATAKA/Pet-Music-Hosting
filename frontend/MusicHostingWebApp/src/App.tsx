import Content from './components/Content';
import Footer from './components/Footer';

export function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Content />
      <Footer />
    </div>
  )
}
