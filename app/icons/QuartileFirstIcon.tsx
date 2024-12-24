const QuartileFirstIcon = ({ 
    size = 23,
    className = '',
    darkMode = false
  }) => {
    const strokeColor = darkMode ? '#9ca3af' : '#5e5e5e';
    
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 15 15"
        width={size}
        height={size}
        className={`transition-all duration-200 ${className}`}
      >
        <path 
          vectorEffect="non-scaling-stroke" 
          fill="none" 
          stroke={strokeColor}
          strokeWidth="1.1"
          strokeMiterlimit="10"
          d="M1.5 1.5h12v12h-12zM1.5 4.5h12M1.5 10.46h12M1.5 7.5h12"
        />
        <path 
          vectorEffect="non-scaling-stroke" 
          stroke="none"
          fill={strokeColor}
          d="M1.5 1.5h12v3h-12z"
        />
      </svg>
    );
  };
  
  export default QuartileFirstIcon;