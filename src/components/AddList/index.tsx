import React, { useState, useCallback } from 'react';
import Form from './Form';

interface Props {
  addList: Function,
}

const AddList = (props: Props) => {
  const {
    addList,
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
          addList={addList}
          onClose={closeForm}
        /> 
      : <p onClick={openForm}>+ Add List</p>
    }
    </div>
  );
};

export default AddList