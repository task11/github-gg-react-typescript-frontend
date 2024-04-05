import { useCallback, useState } from 'react';

export default function useToggle() {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = useCallback(() => {
    setToggleState((currentState) => !currentState);
  }, [toggleState]);

  return { toggleState, handleToggle };
}
