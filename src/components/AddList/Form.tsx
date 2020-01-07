import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onClose: () => void,
}

const Form = (props: Props) => {
  const {
    onClose,
  } = props;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => { console.log(data) }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="newList" defaultValue="" ref={register}/>
        <input type="submit" />
      </form>
      <p onClick={onClose}>CLOSE</p>
    </>
  );
}

export default Form;
