import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./authHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./config");

class APIHandler {
    async checkLogin() {
        if (AuthHandler.checkTokenExpiry()) {
        try {
            var response = await Axios.post(Config.refreshApiUrl, {
            refresh: AuthHandler.getRefreshToken(),
            });

            reactLocalStorage.set("token", response.data.access);
        } catch (error) {
            console.log(error);

            //Not Using Valid Token for Refresh then Logout the User
            AuthHandler.logoutUser();
            window.location = "/";
        }
        }
    }

    //Acte
    async saveActeData(
        name,
        description,
        finalite,
        dossier,
        cout,
        precision_cout,
        quittance_reçu_timbre,
        validite,
        delai_de_delivrance,
        lieu_de_delivrance
    ){
        this.checkLogin();
        var response = await Axios.post(
            Config.acteApiUrl, 
            {
                name:name, 
                description:description, 
                finalite:finalite, 
                dossier:dossier, 
                cout:cout, 
                precision_cout:precision_cout, 
                quittance_reçu_timbre:quittance_reçu_timbre, 
                validite:validite, 
                delai_de_delivrance:delai_de_delivrance, 
                lieu_de_delivrance:lieu_de_delivrance
            }, 
            {headers: {Authorization: "Bearer " + AuthHandler.getLoginToken()}}
        );
        return response;
    };

    async fetchAllActe() {
        await this.checkLogin();
    
        var response = await Axios.get(Config.actApiUrl, {
          headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
        });
    
        return response;
    };


    // Domaine
    async saveDomaineData(
        name,
        description
    ){
        this.checkLogin();
        console.log("SAVE");
        console.log(name);
        console.log(description);
        console.log(AuthHandler.getLoginToken());
        var response = await Axios.post(
            Config.domaineApiUrl, 
            {
                name:name, 
                description:description
            }, 
            {headers: {Authorization:"Bearer " + AuthHandler.getLoginToken()}}
        );
        var responseAll = await Axios.get(Config.domaineApiUrl, {
            headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
        });
        console.log(responseAll)

        return (response);
    };

    async fetchAllDomaine() {
        await this.checkLogin();
    
        var response = await Axios.get(Config.domainApiUrl, {
          headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
        });
    
        return response;
    };

    // BaseLegale
    async saveBaseLegaleData(
        name,
        contenu,
        link,
        page_number
    ){
        this.checkLogin();
        var response = await Axios.post(
            Config.BaseLegaleApiUrl, 
            {
                name:name,
                contenu:contenu,
                link:link,
                page_number:page_number
            }, 
            {headers: {Authorization:"Bearer " + AuthHandler.getLoginToken()}}
        );
        var responseAll = await Axios.get(Config.BaseLegaleApiUrl, {
            headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
        });
        console.log(responseAll)

        return (response);
    };

    async fetchAllBaseLegale() {
        await this.checkLogin();
    
        var response = await Axios.get(Config.BaseLegaleApiUrl, {
          headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
        });
    
        return response;
    };
}
export default APIHandler;