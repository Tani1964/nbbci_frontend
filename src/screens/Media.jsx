import { Box } from '@chakra-ui/react'
import React from 'react'
import CustomSlider from '../components/CustomSlider'
import FacebookPage from '../components/FacebookPage'
import Mixlr from '../components/Mixlr'

const Media = () => {
  return (
    <Box>
      <CustomSlider/>
      <FacebookPage/>
      <Mixlr/>
    </Box>
  )
}

export default Media