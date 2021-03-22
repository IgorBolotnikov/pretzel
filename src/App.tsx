import React from 'react';

import { CalculationForm } from 'src/Calculation/components/CalcularionForm/CalculationForm';

import 'src/App.scss';

function App(): React.ReactElement {
  return (
    <div className="App">
      <CalculationForm />
    </div>
  );
}

export default App;
