import FileField from './ui/form/FileField';
import Button from './ui/form/Button';
import InputField from './ui/form/InputField';
import Footer from './components/Footer';

export function App() {
  return (
    <div>
      <Button label='Test' onClick={() => {}} />
      <InputField label='222' placeholder='FFF' value='' type='text'/>
      <FileField />
      <Footer />
    </div>
  )
}
