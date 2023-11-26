import { Link } from 'react-router-dom'; // Assuming you are using React Router

const Footer = () => {
  return (
    <footer className="bg-f1-red xs:mt-8 text-white text-center py-3 static bottom-0 left-0 right-0">
      <div>
        {/* Direct link to the API documentation HTML file */}
        <a href="/api-instructions.html" className="underline">
          API Instructions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
