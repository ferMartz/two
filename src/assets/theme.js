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
                    light : "rgba(79, 91, 98, 1)",
                    main : "rgba(38, 50, 56, 1)",
                    dark : "rgba(0, 10, 18, 1)",
                    contrastText : "#fff"
                },
            secondary : 
                {
                    light : "rgba(98, 235, 255, 1)",
                    main : "rgba(0, 184, 212, 1)",
                    dark : "rgba(0, 136, 163, 1)",
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
                    primary : "rgba(0, 0, 0, 0.87)",
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