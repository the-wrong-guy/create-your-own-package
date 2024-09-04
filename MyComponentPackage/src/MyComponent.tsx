// src/MyComponent.tsx
import React from 'react';
import './styles.css';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <h1 className="my-component">{title}</h1>;
};

export default MyComponent;
