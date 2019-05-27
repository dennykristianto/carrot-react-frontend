import {createMuiTheme} from "@material-ui/core/styles"

const theme=createMuiTheme({
    typography: {
        useNextVariants: true,
      },
      palette: {
        primary: {
          light: '#FFECB3',
          main: '#FFC107',
          dark: '#FFA000',
          contrastText: '#fff',
        },
        secondary:{
            main:'#757575'
        },
      },
    
})

export default theme;