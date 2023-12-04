// App.tsx
import React from 'react';
import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent';

const App: React.FC = () => {
  return (
    <div className='container-fluid min-vh-100 d-flex flex-column gap-4 bg-dark'>
      <h1 className='text-center text-white mt-5'>Todo List Apps</h1>
      <InputComponent />
      <OutputComponent />
    </div>
  );
};

export default App;