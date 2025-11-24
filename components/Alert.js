const Alert = ({ children, variant = 'info', title, dismissible = false, onClose }) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-700',
    success: 'bg-green-50 border-green-200 text-green-700',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    error: 'bg-red-50 border-red-200 text-red-700'
  };

  return (
    <div className={`border rounded-md p-4 ${variants[variant]}`}>
      <div className="flex justify-between">
        <div>
          {title && <h4 className="font-semibold">{title}</h4>}
          <div>{children}</div>
        </div>
        {dismissible && (
          <button 
            onClick={onClose} 
            className="text-current hover:opacity-75"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;