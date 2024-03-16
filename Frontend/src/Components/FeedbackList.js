import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:5000');
    socket.on('feedback', (newFeedback) => {
      setFeedbackList((prevFeedbackList) => [newFeedback, ...prevFeedbackList]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbackList.map((feedback, index) => (
          <li key={index}>{feedback}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
