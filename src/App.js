import React from 'react'
import styled from 'styled-components'

const App = () => (
  <Root>
    This is React App Template based on Create-React-App with following
    libraries added: styled-components and material-ui!
    <br />
    Enjoy!
  </Root>
)

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;
  font-weight: 600;
`

export default App
