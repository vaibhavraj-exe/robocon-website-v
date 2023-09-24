import { useEffect, useState } from 'react';

const useIsDesktop = (): [boolean] => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return [isDesktop];
};

export default useIsDesktop;
