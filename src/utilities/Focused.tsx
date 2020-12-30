import React from 'react';

function Focused({ children }: { children: any }) {
  const ref = React.useRef<HTMLElement>();

  React.useLayoutEffect(() => {
    ref.current?.focus();
  });

  if (React.isValidElement(children))
    return React.cloneElement(children, { ref } as any);
  
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default Focused;
export { Focused };