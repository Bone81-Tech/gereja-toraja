const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-toraja-merah text-white hover:bg-toraja-merah-muda focus:ring-toraja-merah',
    secondary: 'bg-toraja-kuning text-toraja-hitam hover:bg-yellow-400 focus:ring-toraja-kuning',
    outline: 'border border-toraja-merah text-toraja-merah hover:bg-toraja-merah focus:ring-toraja-merah',
    ghost: 'text-toraja-merah hover:bg-toraja-merah focus:ring-toraja-merah'
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