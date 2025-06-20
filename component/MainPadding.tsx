import React, { ReactNode, CSSProperties } from 'react';

interface LayoutProps {
  children: ReactNode;
  style?: CSSProperties; // Allow custom styles to be passed in
}

const MainPadding: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1607, // Corrected maxWidth for clarity
        display: "flex",
        alignItems:"center",
        padding: "0 20px",
        ...style, // Merge passed styles with default styles
      }}
    >
      {children}
    </div>
  );
};

export default MainPadding;