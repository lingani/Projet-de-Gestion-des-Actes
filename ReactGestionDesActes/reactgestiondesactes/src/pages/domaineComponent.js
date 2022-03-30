import React from "react";
import AuthHandler from "../utils/authHandler";
import APIHandler from "../utils/apiHandler";

class DomaineComponent extends React.Component{
    async formSubmit(event){
        event.preventDefault();
        var apiHandler = new APIHandler();
        var response = await apiHandler.saveDomaineData
            (
                event.target.name.value,
                event.target.description.value
            );
        console.log(response);
    }
    render(){
        return(
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>GESTION DES DOMAINES</h2>
                    </div>
                </div>


                <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                AJOUTER UN DOMAINE
                            </h2>
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlform="email_address">Nom</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Entrez ici le nom du domaine"/>
                                    </div>
                                </div>
                                <label htmlform="email_address">Description</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="description" name="description" className="form-control" placeholder="Entrez ici la desciption du domaine"/>
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
export default DomaineComponent;