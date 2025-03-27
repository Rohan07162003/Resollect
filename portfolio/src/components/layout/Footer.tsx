const Footer: React.FC = () => {
    return (
      <footer className="fixed bottom-0 left-0 h-16 bg-white border-t border-gray-300 flex items-center text-sm text-gray-500 px-4 w-64">
        <span className="mr-1">Powered by</span>
        <div className="flex items-center">
          <img
            src="/resollectimg.png"
            alt="REsollect Logo"
            className="h-10 w-auto mr-1"
          />
        </div>
      </footer>
    );
  };
  
  export default Footer;
  