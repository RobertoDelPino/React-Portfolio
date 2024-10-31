import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import React, { ReactNode } from 'react';

interface NavigationButtonProps {
    newRoute: string;
    children: ReactNode;
    className?: string;
    id?: string;
    setOpenNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ newRoute, children, className, id, setOpenNav }) => {
  const MAX_MOBILE_WIDTH = 1024;
  const navigate = useNavigate();

  const viewNavigate = () => {
    if (newRoute === window.location.pathname) return;
    if (setOpenNav && window.innerWidth < MAX_MOBILE_WIDTH) setOpenNav(current => !current);
    window.scroll({
      top: 0,
      left: 0,
    });

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
    <a id={id} className={className + " cursor-pointer"} onClick={viewNavigate}>
      {children}
    </a>
  );
};

export default NavigationButton;