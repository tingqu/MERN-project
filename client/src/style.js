
//import specific style from material-ui
import { makeStyles } from "@material-ui/core/styles";
import { borderRadius } from "@material-ui/system";

export default makeStyles(()=>({
    appBar:{
        borderRadius:15,
        margin: '30px 0',
        display:'flex',
        flexdirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

}))

