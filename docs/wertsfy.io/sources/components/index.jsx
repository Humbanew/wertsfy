let react = require('react-dom/client');

function LaboComponent() {
  return <div>LaboComponent</div>;
};

const root = react.createRoot(document.getElementById('root'));
root.render(<LaboComponent />);
