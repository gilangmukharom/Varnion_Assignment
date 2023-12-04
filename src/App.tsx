// App.tsx
import React from 'react';
import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent';

const App: React.FC = () => {
  return (
    <div className='container-fluid w-100 d-flex flex-column gap-5'>
      <InputComponent />
      <OutputComponent />
    </div>
  );
};

export default App;