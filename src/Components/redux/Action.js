var Action={
    addItem(msg){
        return{
            type:"ADD",
            text:msg
        }
    }
}

export default Action;