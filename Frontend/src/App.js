import React from 'react';
import FeedbackForm from './Components/FeedbackForm';
import FeedbackList from './Components/FeedbackList';

function App() {
  return (
    <div>
      <h1>Real-Time Customer Feedback Portal</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <FeedbackForm />
        </div>
        <div style={{ flex: 1 }}>
          <FeedbackList />
        </div>
      </div>
    </div>
  );
}

export default App;
