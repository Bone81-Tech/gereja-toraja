const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-blue-700 text-blue-700 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-700 hover:bg-blue-50 focus:ring-blue-500'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;