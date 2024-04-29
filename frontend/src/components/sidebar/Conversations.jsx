import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div>
      <div className='py-2 flex flex-col overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
      </div>
    </div>
  )
}

export default Conversations


//STARTER CODE
// import React from 'react'
// import Conversation from './sidebar/Conversation'

// const Conversations = () => {
//   return (
//     <div>
//       <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//       </div>
//     </div>
//   )
// }

// export default Conversations