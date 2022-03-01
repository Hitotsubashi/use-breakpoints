import React from 'react';
import useBreakpoints from '@bottle/use-breakpoints';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const breakpoints = useBreakpoints({
    sm: '(max-width: 700px)',
    md: '(max-width: 900px)',
    lg: '(max-width: 1200px)',
    xl: '(max-width: 1600px)',
  });

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        任何情况下都能看到我
      </div>
      {breakpoints.sm && (
        <div className="alert alert-warning" role="alert">
          屏幕小于700px时能看到我
        </div>
      )}
      {breakpoints.md && (
        <div className="alert alert-secondary" role="alert">
          屏幕小于900px时能看到我
        </div>
      )}
      {breakpoints.lg && (
        <div className="alert alert-success" role="alert">
          屏幕小于1200px时能看到我
        </div>
      )}
      {breakpoints.xl && (
        <div className="alert alert-danger" role="alert">
          屏幕小于1600px时能看到我
        </div>
      )}
    </div>
  );
};

export default App;
