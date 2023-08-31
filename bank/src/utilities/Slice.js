import { createSlice } from "@reduxjs/toolkit"


// état initial du slice qui stocke les informations sur l'utilisateur
const initialState = {
    isLogged: false,
    logFailed: false,
}

// Création du slice
const userSlice = createSlice({
    name: "user", // nom du slice
    initialState, // état initial du slice
    reducers: { 
        login: (state) => { // Action qui indique que l'utilisateur s'est connecté avec succès
            state.isLogged = true // on passe isLoged à true
            state.logFailed = false
        },

        apierror: (state) => { // Erreur lors de la requête API
            state.logFailed = true // la connexion a échoué
        }, 
    },
})

// Actions
export const { login, logout, apierror } = userSlice.actions

// Selectors pour accéder à des parties spécifique de l'état global
export const selectIsLogged = (state) => state.user.isLogged //Récupérer le statut de connexion de l'utilisateur
export const selectLogFailed = (state) => state.user.logFailed //Récupérer le statut d'erreur de connexion
export const selectUserName = (state) => state.user.email //Récupérer le mail de l'utilisateur

export default userSlice.reducer