import React, { createContext } from 'react'
import Step2 from '../Mainpages/Forms/Step2'

const First = createContext()
const NoteState = () => {


  return (
    <>
<First.Provider value = {"test"}>
 <Step2 />
</First.Provider>
    </>
  )
}

export default NoteState
export {First}