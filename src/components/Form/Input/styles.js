import { chakra, shouldForwardProp } from '@chakra-ui/react';

export const Input = chakra('input', {
  shouldForwardProp: (prop) => {
    const isChakraProp = !shouldForwardProp(prop);

    if (isChakraProp) return false;

    return ['simple'].includes(prop);
  },
  baseStyle: {
    width: '100%',
    height: '50px',
    bg: 'gray.300',
    borderRadius: 'md',
    _hover: {
      background: 'gray.500'
    }
  }
});
