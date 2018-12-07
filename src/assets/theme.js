import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme( 
    {
        palette: {
            common : 
                {
                    black : "#000",
                    white : "#fff"
                },
            background : 
                {
                    paper : "rgba(250, 250, 250, 1)",
                    default : "rgba(255, 255, 255, 1)"
                },
            primary : 
                {
                    light : "#64e5dc",
                    main : "#20b2aa",
                    dark : "#00827b",
                    contrastText : "#003930"
                },
            secondary : 
                {
                    light : "#718792",
                    main : "#455a64",
                    dark : "#1c313a",
                    contrastText : "#fff"
                },
            error : 
                {
                    light : "#e57373",
                    main : "rgba(244, 67, 54, 1)",
                    dark : "#d32f2f",
                    contrastText : "#fff"
                },
            text : 
                {
                    primary : "rgba(0, 0, 0, 0.77)",
                    secondary :  "rgba(0, 0, 0, 0.54)",
                    disabled : "rgba(0, 0, 0, 0.38)",
                    hint : "rgba(0, 0, 0, 0.38)"
                }
        },
        typography: {
            useNextVariants: true,
        },
    }

)