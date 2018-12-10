import i18n from 'i18next'

i18n
.init({
    // we init the resources
    resources : {
        en : {
            translations : {
                "Welcome to React.js": "Welcome to React.js",
                "About" : "About",
                "About page" : "This is the about page.",
                "Language" : "Language",
                "Declarative": "Declarative",
                "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
                "Declarative views make your code more predictable and easier to debug.": "Declarative views make your code more predictable and easier to debug."
            }
        },
        el : {
            translations : {
                "Welcome to React.js": "Καλώς 'Ηρθατε στο React.js!",
                "About" : "σχετικά με",
                "About page" : "Αυτή είναι η σελίδα.",
                "Language" : "Γλώσσα",
                "Declarative": "Δηλωτικό",
                "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.": "To {{name}} καθιστά ανώφελη τη δημιουργία διαδραστικών διεπαφών χρήστη. Σχεδιάστε απλές προβολές για κάθε κράτος στο δικό σας\\n\" +\n" +
                "                    εφαρμογή και το React θα ενημερώσει αποτελεσματικά και θα αποδώσει τα σωστά στοιχεία όταν τα δεδομένα σας " +
                "                    αλλαγές.",
                "Declarative views make your code more predictable and easier to debug.": "Οι δηλωτικές προβολές καθιστούν τον κώδικα πιο προβλέψιμο και πιο εύκολο στον εντοπισμό σφαλμάτων."
            }
        },
        es : {
            translations : {
                "Welcome to React.js": "Bienvenido a React.js",
                "About" : "Nosotros",
                "About page" : "Esta es la pagina acerca de nosotros.",
                "Language" : "Lenguage",
                "Declarative": "Declarativo",
                "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.": "React hace que sea fácil crear interfaces de usuario interactivas. Diseñe vistas simples para cada estado en su aplicación, y React actualizará y representará de manera eficiente los componentes correctos cuando sus datos cambien.",
                "Declarative views make your code more predictable and easier to debug.": "Las vistas declarativas hacen que su código sea más predecible y más fácil de depurar."
            }
        },
    },
    fallbackLng : 'en',
    debug : true,

    // have a common namespace used around the full app
    ns : ['translations'],
    defaultNS : 'translations',

    keySeparator : false, // we use content as keys

    interpolation : {
        escapeValue : false, // not needed for react
        formatSeparator : ','
    },

    react : {
        wait : true
    }
})

export default i18n