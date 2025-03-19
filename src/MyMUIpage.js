import React from 'react'
import {Button} from '@mui/material';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function MyMUIpage() {
  return (
    <div>
        <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

<Switch {...label} defaultChecked />
      <Switch {...label} />
    </div>
  )
}

export default MyMUIpage