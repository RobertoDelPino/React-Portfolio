import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import React, { ReactNode } from 'react';

interface NavigationButtonProps {
    newRoute: string;
    children: ReactNode;
    className?: string;
    id?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ newRoute, children, className, id }) => {
  const navigate = useNavigate();

  const viewNavigate = () => {
    if (newRoute === window.location.pathname) return;
    if (!document.startViewTransition) {
      return navigate(newRoute);
    }
    return document.startViewTransition(() => {
      flushSync(() => {
        navigate(newRoute);
      });
    });
  };

  return (
    <button id={id} className={className} onClick={viewNavigate}>
      {children}
    </button>
  );
};

export default NavigationButton;