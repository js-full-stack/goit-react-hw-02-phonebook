import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Components/ContactForm';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;
