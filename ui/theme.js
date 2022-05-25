import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/


    const theme = StyleSheet.create({
    userTile:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#000',
        padding:5,
        paddingTop:35,
        paddingBottom:35,
        margin:5,
    
        
    },
    userTileButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
      

    },
    userTileButton:{
        backgroundColor:'#c64c38',
        padding:5,
        marginLeft:2.5,
        minWidth:55,

    },
    userTileButtonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily: 'Trebuchet',
        fontWeight: 'bold'
        
    },
    addContactButton:{
        backgroundColor:'#c64c38',
        padding:5
    },
    addContactButtonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily: 'Trebuchet',
        fontWeight: 'bold'

    },
    saveButton:{
        backgroundColor:'#c64c38',
        padding:5,
        marginTop:5
    },
    saveButtonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily: 'Trebuchet',
        fontWeight: 'bold'

    },
    cancelButton:{
        backgroundColor:'#c64c38',
        padding:5,
        marginTop:5
    },
    cancelButtonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily: 'Trebuchet',
        fontWeight: 'bold'
    },  
    textInput:{
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
        margin:2.5,
        padding:2.5,
        fontFamily: 'Trebuchet',
        fontWeight: 'bold'
    },
  

}); 

export default theme; 