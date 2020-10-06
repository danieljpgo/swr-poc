import React from 'react';

const ErrorMessage: React.FC = () => {
  return (
    <div>
      <h4>Error on fetching that user's</h4>
      <p>after a few seconds, it will be tried to fetch the information again.</p>
    </div>
  )
}

export default ErrorMessage;