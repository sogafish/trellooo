import React, { useState, useCallback } from 'react';
import Form from './Form';

interface Props {
  add: Function,
}

export const AddList = (props: Props) => {
  const {
    add,
  } = props;

  const [isFormOpen, setOpen] = useState(false);
  const openForm = useCallback(() => {
    setOpen(true);
  }, []);
  const closeForm = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
    {isFormOpen
      ? <Form
          add={add}
          onClose={closeForm}
        /> 
      : <p onClick={openForm}>+ Add List</p>
    }
    </div>
  );
};
