const Card = ({ children, className = '', title }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border-2 border-toraja-merah ${className}`}>
      {title && (
        <div className="px-6 py-3 bg-toraja-merah text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;