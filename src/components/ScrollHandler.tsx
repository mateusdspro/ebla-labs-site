import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Otherwise, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return null;
};
