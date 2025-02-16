import React, {useEffect} from 'react';

type KeyboardEventKey = 'Escape' | ' ' | 'Alt' | 'AltGraph' | 'CapsLock' | 'Control' | 'Fn' | 'FnLock' | 'Hyper' | 'Meta' | 'NumLock' | 'ScrollLock' | string

const useKeydown = (keys: KeyboardEventKey | KeyboardEventKey[], closure?: () => void) => {

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (
        typeof (closure) !== 'undefined' &&
        typeof (closure) === 'function') {
        if (
          (
            Array.isArray(keys) &&
            keys.length > 0 &&
            keys.includes(event.key)
          ) || (typeof (keys) === 'string' && keys === event.key)
        ) {
          closure()
        }
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);
  return null
}

export default useKeydown;
