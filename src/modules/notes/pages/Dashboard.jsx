
import { Container, Grid } from "@mui/material";
import  Header  from "../../../shared/components/Header"
import Main from "../../../shared/components/Main";
import Menu1 from "../../../shared/components/Menu1";


//import Grid from "../components/grid";
export const Dashboard  =() =>{

   
   return ( <Container>
      <Header/>
      
      
      <Grid container rowSpacing={2} columnSpacing={2}>
         <Grid item xs={3}>
            <Menu1/>
         </Grid>
         <Grid item xs={9}>
            <Main/>
         </Grid>
      </Grid>
   
   </Container>
            
            
              
       
   )

}