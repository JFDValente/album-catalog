import React from 'react';
import {
  string,
  bool,
} from 'prop-types';

import Style from './InputField.style';

function InputField({ type, name, label, value, placeholder, required }) {
  return (
    <Style.Container>
      <Style.Label>{label}</Style.Label>
      <Style.Input type={type} name={name} defaultValue={value} placeholder={placeholder} required={required}/>
    </Style.Container>
  );
}

InputField.propTypes = {
  type: string,
  name: string,
  label: string,
  value: string,
  placeholder: string,
  required: bool,
};
    
InputField.defaultProps = {
  type: 'text',
  name: '',
  label: '',  
  value: '',
  placeholder: '',
  required: false,
};

export default InputField;