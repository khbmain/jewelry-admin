import { useEffect } from 'react';

export default function OutsideClick({
  children,
  outsideClick,
}: {
  children: any;
  outsideClick: Function;
}) {
  useEffect(() => {
    return () => {};
  }, [outsideClick]);

  return <div>children</div>;
}
