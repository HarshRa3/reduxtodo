import { Stack } from '@mui/material';
import React, { useState } from 'react';
import FIlterButtn from './FIlterButtn';

const Filter = ({ handleFilter }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const title = ['all', 'completed', 'incompleted'];

  const handleButtonClick = (filter) => {
    setActiveFilter(filter);
    handleFilter(filter);
  };

  return (
    <Stack direction={'row'} spacing={3} sx={{ justifyContent: 'center' }}>
      {title.map((e, i) => (
        <FIlterButtn
          key={i}
          title={e}
          handleFilter={() => handleButtonClick(e)}
          filterBtnColor={e === activeFilter ? 'secondary' : 'primary' }
        />
      ))}
    </Stack>
  );
};

export default Filter;
