import Nvbar from "./Nvbar"
import Footer from "./footer";
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css'

const Pages = () => {
  const [showReturnFields, setShowReturnFields] = useState(false);

  const handleRadioChange = (e) => {
      setShowReturnFields(e.target.id === 'formHorizontalRadios2');
  };
    return (
        <div>
            <Nvbar/>
            <div className="bg-[#f8f8f8]">
              <div class='flex justify-center'>
              <p style={{color:'#022d5c', fontSize:'2rem',textDecoration:'none', fontWeight:'500',lineHeight:'46px', paddingTop:'20px',paddingBottom:'px'}}>Reserver vos Billets</p>
              </div>
            <div className="flex wrap justify-center bg-[#f8f8f8]">
            <form>
            <div style={{ marginLeft: '30px', marginTop: '30px', display: 'flex', flexWrap: 'wrap', marginBottom:'20px' }}>
      <Form.Check
        type="radio"
        label="Allez simple"
        name="formHorizontalRadios"
        id="formHorizontalRadios1"
        onChange={handleRadioChange}
        defaultChecked
      />
      <Form.Check
        type="radio"
        label="Allez retour"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
        style={{ marginLeft: '10px' }}
        onChange={handleRadioChange}
      />
    </div>
  <div class="form-row flex wrap">
    <div class="form-group" style={{height:'30px', width:'170px', marginLeft:'30px',marginRight:'30px',marginBottom:'30px'}}>
      <label for="inputNom">Nom</label>
      <input type="text" class="form-control" id="inputNom" placeholder="Nom"/>
    </div>
    <div class="form-group" style={{height:'30px', width:'170px',marginLeft:'30px',marginRight:'30px',marginBottom:'30px'}}>
      <label for="inputPrenom">Prénom</label>
      <input type="text" class="form-control" id="inputPrenom" placeholder="Prénom"/>
    </div>
    <div class="form-group" style={{height:'30px', width:'170px', marginLeft:'30px',marginRight:'30px',marginBottom:'30px'}}>
    <label for="inputDateNaissance">Date de Naissance</label>
    <input type="date" class="form-control" id="inputDateNaissance"/>
  </div>
  </div>
  <div class='form-row flex wrap'>
  <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
    <label for="inputAdresse">Adresse</label>
    <input type="text" class="form-control" id="inputAdresse" placeholder="Adresse"/>
  </div>
  <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
    <label for="inputTelephone">Numéro de Téléphone</label>
    <input type="tel" class="form-control" id="inputTelephone" placeholder="Numéro de Téléphone"/>
  </div>
  <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
    <label for="inputEmail">Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
  </div>
  </div>
  <div class='form-row flex wrap'>
  <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
    <label for="nationnalite">Nationalité</label>
    <input type="email" class="form-control" id="inputnationnalite" placeholder="Pays de naissance"/>
  </div>
    <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
      <label for="inputDepartPays">Départ - Pays</label>
      <input type="text" class="form-control" id="inputDepartPays" placeholder="Pays de Départ"/>
    </div>
  <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
      <label for="inputDepart">Départ - Ville</label>
      <input type="text" class="form-control" id="inputDepartVille" placeholder="Ville de Départ"/>
    </div>
  </div>
  <div class="form-row flex wrap">
    <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
      <label for="inputArriveePays">Arrivée - Pays</label>
      <input type="text" class="form-control" id="inputArriveePays" placeholder="Pays d'Arrivée"/>
    </div>
    <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
      <label for="inputArrivee">Arrivée - Ville</label>
      <input type="text" class="form-control" id="inputDepartVille" placeholder="Ville de Départ"/>
    </div>
    <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
      <label for="inputArriveePays">  Nombre de passager</label>
      <input type="number" class="form-control" id="inputArriveePays"/>
    </div>
  </div>
  <div class='flex wrap'>
  <div class="form-group" style={{height:'30px', width:'170px', margin:'30px'}}>
    <label for="inputDateNaissance">Date de Départ</label>
    <input type="date" class="form-control" id="inputDateNaissance"/>
  </div>
  {showReturnFields && (
                            <div className="form-group" style={{ height: '30px', width: '170px', margin: '30px' }}>
                                <label htmlFor="inputDateArrivee">Date d'Arrivée</label>
                                <input type="date" className="form-control" id="inputDateArrivee" />
                            </div>
                    )}
  
  <div class="form-group" style={{height:'30px', width:'170px',margin:'30px'}}>
      <label for="inputArriveePays">Class</label>
      <select name="" id="" style={{height:'35px', width:'170px', border:'1px solid gray', borderRadius:'5px'}}>
        <option value="">Economie</option>
        <option value="">Premier class</option>
        <option value="">Bussiness</option>
      </select>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" style={{margin:'30px'}}>Envoyer</button>
</form>
</div>
                </div>
            <div>
        <Footer/>
        </div>
        </div>
    )}
export default Pages;