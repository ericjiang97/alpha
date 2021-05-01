import React from 'react';
import FormLabel from './FormLabel';

export interface InputFieldProps {
  inputType: 'text' | 'email' | 'url' | 'password ';
  variant: 'simple' | 'underline' | 'solid';
  label?: string;
  value?: string;
  onChange?: (e: any) => {};
}

const InputField: React.FC<InputFieldProps> = ({ inputType, label, value, onChange = (e: any) => {} }) => {
  return (
    <div className="mt-2">
      {label && <FormLabel>{label}</FormLabel>}
      <input type={inputType} className="mt-1 w-full rounded-md" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
