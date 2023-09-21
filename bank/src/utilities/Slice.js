import {createSlice} from "@reduxjs/toolkit";

// Création de l'état initial du Slice défini sur null 
const initialState = {
    token: null,
    user: null,
}

// Création du Slice
const userSlice = createSlice({
    name: 'user', // un nom pour générer automatiquement des noms d'action basés sur le nom du Slice
    initialState, // un état initial
    reducers: { // des reducers qui modifient l'état du Slice en réponse à des actions

        // Reducer pour mettre à jour le token
        setToken(state, action) { 
            state.token = action.payload // action.payload permet d'obtenir les données associées à l'action
        },

        // Reducer pour mettre à jour le user
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

export const {setToken, setUser} = userSlice.actions

export default userSlice.reducer