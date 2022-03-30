import React from "react";
import AuthHandler from "../utils/authHandler";
import APIHandler from "../utils/apiHandler";

class ActeComponent extends React.Component{
    async formSubmit(event){
        event.preventDefault();
        var apiHandler = new APIHandler();
        var response = await apiHandler.saveActeData
            (
                event.target.name.value,
                event.target.description.value,
                event.target.finalite.value,
                event.target.dossier.value,
                event.target.cout.value,
                event.target.precision_cout.value,
                event.target.quittance_reçu_timbre.value,
                event.target.validite.value,
                event.target.delai_de_delivrance.value,
                event.target.lieu_de_delivrance.value
            );
        console.log(response);
    }
    render(){
        return(
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>GESTION DES ACTES</h2>
                    </div>
                </div>


                <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                AJOUTER UN ACTE/SERVICE
                            </h2>
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlform="email_address">Nom</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Entrez ici le nom de l'acte ou du service"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Description</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="description" name="description" className="form-control" placeholder="Entrez ici la desciption de l'acte ou du service"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Finalité</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="finalite" name="finalite" className="form-control" placeholder="Quelle est la finalité/but de l'acte ou du service"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Dossier</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="dossier" name="dossier" className="form-control" placeholder="Composition du dossier d'accès à l'acte ou au service"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Coût</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="cout" name="cout" className="form-control" placeholder="Entrez ici le coût l'acte ou du service"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Précision sur le coût</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="precision_cout" name="precision_cout" className="form-control" placeholder="S'il y a des precisions sur le coût inscrivez les ici"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Quittance/Reçu/Timbre</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="quittance_reçu_timbre" name="quittance_reçu_timbre" className="form-control" placeholder="Entrez ici le type de réçu après payement"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Validité</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="validite" name="validite" className="form-control" placeholder="Entrez ici la durée de validité du payement"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Délai de délivrance</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="delai_de_delivrance" name="delai_de_delivrance" className="form-control" placeholder="Entrez ici le délai de délivrance de l'acte ou du service"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Lieu de délivrance</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="lieu_de_delivrance" name="lieu_de_delivrance" className="form-control" placeholder="Entrez ici le lieu de délivrance de l'acte ou du service"/>
                                    </div>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-primary m-t-15 waves-effect">Ajouter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            </section>
        );
    };
};
export default ActeComponent;