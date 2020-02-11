import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onClose: () => void,
  addList: Function,
}

const Form = (props: Props) => {
  const {
    onClose,
    addList,
  } = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    addList(data);
  }

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
