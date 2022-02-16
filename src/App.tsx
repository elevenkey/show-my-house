import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import App1 from './App-1'
import App2 from './App-2'

// test
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  const userContext = React.createContext({})
  userContext.displayName = 'hello-user'

  const h = React.useContext(userContext)
  console.log(h, '-context')

  return (
    <userContext.Provider value="hello">
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
      <hr />
      <App1 index={value} onClick={setValue} />
      <hr />
      <App2 index={value} onClick={setValue} />
    </userContext.Provider>
  )
}
