import { chakra } from '@chakra-ui/react';

export const Button = chakra('button', {
  baseStyle: {
    width: '100px',
    height: '50px',
    bg: 'gray.50',
    borderRadius: 'md',
    variant: 'outline',
    _hover: {
      background: 'gray.300',
      color: 'gray.900'
    }
  }
});
