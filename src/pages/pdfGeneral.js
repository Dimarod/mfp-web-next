import Form from '../components/FormGeneral';
import { saveAs } from 'file-saver';

export default function Home() {
  const handleFormSubmit = async (formData) => {
    
    const res = await fetch('/api/generatePdfGeneral', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    });
    
    console.log(formData);
    
    if (res.ok) {
      const blob = await res.blob();
      saveAs(blob, `ficha-clinica-general-${formData.nombre}.pdf`);
    } else {
      console.error('Failed to generate PDF');
    }
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}
