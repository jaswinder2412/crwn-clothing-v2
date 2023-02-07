import {FormInputLabel, FromInput,Group } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <FromInput {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.length} >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
