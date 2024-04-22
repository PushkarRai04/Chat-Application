export const sendMessage = async (req,res) => {
   try {
    const {message} = req.body;
    const {id} = req.params;
    const senderId = req.user._id;
    
   } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    req.status(500).json({error: "Internal server error"});
   }
}