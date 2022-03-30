class Config{
    static loginUrl="http://127.0.0.1:8000/api/gettoken/";
    static refreshApiUrl = "http://127.0.0.1:8000/api/resfresh_token/";
    static acteApiUrl = "http://127.0.0.1:8000/api/acte/";
    static domaineApiUrl = "http://127.0.0.1:8000/api/domaine/";
    static baseLegaleApiUrl = "http://127.0.0.1:8000/api/baselegale/";

    static homeUrl="/home";
    static logoutPageUrl = "/logout";

    static sidebarItem=[
        {"index":"0", "title":"Home", "url":"/home", "icon":"home"},
        {"index":"1", "title":"Acte", "url":"/actes", "icon":"view_list"},
        {"index":"2", "title":"Préoccupations", "url":"/preoccupations", "icon":"message"}
    ];
    static sidebarConfigItem=[
        {"index":"3", "title":"Domaines", "url":"/domaines", "icon":"business"},
        {"index":"4", "title":"Bases Legales", "url":"/basesLegales", "icon":"library_books"},
        {"index":"5", "title":"Categories Actes", "url":"/categoriesactes", "icon":"sort"},
        {"index":"6", "title":"Types De Centres", "url":"/typesdecentres", "icon":"work"},
        {"index":"7", "title":"Sources De Donnees", "url":"/sourcesdedonnees", "icon":"folder"},
        {"index":"8", "title":"Types De Preoccupations", "url":"/typespreoccupations", "icon":"warning"}
    ]
}

export default Config;