const iState={
  sections:[
    {
       title:'hats',
       imageUrl:'https://ae01.alicdn.com/kf/HTB1.eZONpXXXXaRXpXXq6xXFXXXx/Sedancasase-New-2017-Fashion-100-Australia-Wool-Men-s-Fedora-Hat-with-Pork-Pie-Hat-for.jpg',
       id:1,
       linkUrl:"shop/hats"
       },
   {
     title:'jackets',
     imageUrl:'https://tse4.mm.bing.net/th?id=OIP.Wthkj5ZS_ngBlPLvPeow_wHaJY&pid=Api&P=0&w=300&h=300',
     id:2,
     linkUrl:"shop/jackets"
   },
   {
     title:'snekers',
     imageUrl:'https://tse1.mm.bing.net/th?id=OIP.0kbSjh7MRqa9i-PQRCaQcwHaE9&pid=Api&P=0&w=226&h=152',
     id:3,
     linkUrl:"shop/snekers"
   },
   {
       title:'womens',
       imageUrl:'https://i.pinimg.com/originals/27/e6/bb/27e6bbc5fc200e34fd73184b3b5a45f1.jpg',
       size:'large',
       id:4,
       linkUrl:"shop/womens"
    },
    {
         title:'mens',
         imageUrl:'https://tse4.mm.bing.net/th?id=OIP.I-5un75luOtYon3zTzfcdgAAAA&pid=Api&P=0&w=300&h=300',
         size:'large',
         id:5,
         linkUrl:"shop/mens"
     }
 ]
};

const directoryReducer =(state=iState,action)=>{
  switch (action.type){
      default:
        return state
  }
}
export default directoryReducer;