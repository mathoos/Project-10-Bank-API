// On défini une URL de base de votre API
const API_BASE_URL = "http://localhost:3001/api/v1";


// Fonction pour effectuer la requête de connexion
export const loginUser = async (email, password) => {
    try {
        // On envoie une requête de connexion POST à l'API de connexion avec les données de l'utilisateur saisies dans le formulaire
        const response = await fetch(`${API_BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        // On traite la réponse de l'API
        const responseData = await response.json();
        return responseData;
    } 

    catch (error) {
        console.error("Erreur lors de la requête de connexion :", error);
        throw error;
    }
}


// Fonction pour effectuer la requête de récupération du profil de l'utilisateur
export const getUserProfile = async (token) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const responseData = await response.json();
        return responseData;
    } 

    catch (error) {
        console.error("Erreur lors de la requête de profil de l'utilisateur :", error);
        throw error;
    }
}


export const updateUserProfile = async (token, firstName, lastName) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            }),
        });
    
        const resJson = await response.json();
    
        if (resJson.status === 200) {
            return true; // La mise à jour a réussi
        } 
        else {
            return false; // La mise à jour a échoué
        }
    } 
    catch (err) {
        console.error(err);
        return false; // Une erreur s'est produite
    }
};




