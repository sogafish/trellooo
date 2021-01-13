import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onClose: () => void,
  add: Function,
}

const Form = (props: Props) => {
  const {
    onClose,
    add,
  } = props;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: $FixMe) => {
    add(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" defaultValue="" ref={register}/>
        <input type="submit" ref={register} />
      </form>
      <p onClick={onClose}>CLOSE</p>
    </>
  );
}

export default Form;
