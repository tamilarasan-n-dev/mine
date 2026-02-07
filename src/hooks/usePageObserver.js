import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import observerAPI from '../api/observer.api.js';

/**
 * Hook to track page visits on route changes and refreshes
 */
const usePageObserver = () => {
  const location = useLocation();
  const lastTrackedPath = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Track only if the path is different from the last tracked one
    // This handles both initial load (refresh) and route changes
    if (currentPath !== lastTrackedPath.current) {
      lastTrackedPath.current = currentPath;
      observerAPI.create(currentPath);
    }
  }, [location.pathname]);
};

export default usePageObserver;
