import React, { useState, useCallback } from 'react';
import Form from './Form';

const AddList = () => {
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
      ? <Form onClose={closeForm} /> 
      : <p onClick={openForm}>+ Add List</p>
    }
    </div>
  );
}

export default AddList