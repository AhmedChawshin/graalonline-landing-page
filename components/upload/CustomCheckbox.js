import { Checkbox } from '@chakra-ui/react';

export default function CustomCheckbox({ name, isChecked, onChange, children, ...props }) {
  return (
    <Checkbox
      name={name}
      isChecked={isChecked}
      onChange={onChange}
      colorScheme="brand"
      color="gray.200"
      borderColor="gray.500"
      iconColor="white"
      _checked={{
        borderColor: 'brand.400',
        '& .chakra-checkbox__control': {
          boxShadow: '0 0 0 2px rgba(127, 156, 245, 0.6)', // Adjusted for brand.400
        },
      }}
      {...props}
    >
      {children}
    </Checkbox>
  );
}