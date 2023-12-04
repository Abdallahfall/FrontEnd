import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ReservationVol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depart: 'JFK',
      arrivee: 'LHR',
      date: '',
      passagers: 1,
      typeVoyage: 'allerSimple',
    };
  }
  
  handleTypeVoyageChange = (e) => {
    const typeVoyage = e.target.id === 'formHorizontalRadios1' ? 'allerSimple' : 'allerRetour';
    this.setState({ typeVoyage });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez traiter les données ici (par exemple, en les envoyant à un serveur).
    console.log(this.state);
  }
  render() {
    const { typeVoyage } = this.state;
    return (
      <div style={{boxShadow:'0 2px 2px -2px rgba(0, 0, 0, 0.1)'}}>
        <div style={{backgroundColor:'#eee', width:'100%', height:'50px',flexWrap:'wrap', borderStartEndRadius:'7px', borderStartStartRadius:'7px', display:'flex', justifyContent:'center', alignItems:'center', borderBottom: '1px solid gray'}}>
        <div style={{ display: 'flex', alignItems: 'center',borderBottom: '3px solid #006ee3',height:'50px', width:'150px', justifyContent:'center'}}>
        <img src="avion.png" alt="logo avion" style={{
    height: '25px',
    width: '25px',
    marginRight: '10px',
  }} />
        <h1 style={{
          fontSize:'1.3rem',
    color: '#006ee3',
    textDecoration: 'none',
    fontFamily: 'initial',
    margin: '0',
    fontWeight:'700'
  }}>Flights</h1>
      </div>
        </div>
        <div style={{ marginLeft: '10%', marginTop: '10px', marginBottom: '15px', display: 'flex', flexWrap: 'wrap' }}>
      <Form.Check
        type="radio"
        label="Allez simple"
        name="formHorizontalRadios"
        id="formHorizontalRadios1"
        checked={typeVoyage === 'allerSimple'}
        onChange={this.handleTypeVoyageChange}
      />
      <Form.Check
        type="radio"
        label="Allez retour"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
        style={{ marginLeft: '8px' }}
        checked={typeVoyage === 'allerRetour'}
        onChange={this.handleTypeVoyageChange}
      />
    </div>
        <form onSubmit={this.handleSubmit}>
        <div style={{ display:'flex', alignItems:'center',justifyContent:'center', flexWrap:'wrap', paddingLeft:'25px',paddingRight:'25px'}}>
        <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #cccccc',
      borderRadius: '4px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      margin: '5px',
      maxWidth: '200px',
      height: '60px'
    }}>
      <svg width="16" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 7.826C.5 2.956 4.333 0 8 0s7.5 2.957 7.5 7.826c0 4.609-6.667 11.652-6.917 11.913C8.417 19.913 8.25 20 8 20c-.25 0-.417-.087-.583-.26C7.167 19.477.5 12.434.5 7.825zM8 10a3 3 0 100-6 3 3 0 000 6z" fill="#313541"/></svg>
      <select
        name="depart"
        id="depart"
        value={this.state.depart} onChange={this.handleInputChange}
        style={{ flex: '1', width: '50%', border: 'none', outline: 'none', background: 'transparent' }}
      >
        <option value="JFK">New York (JFK)</option>
        <option value="LAX">Los Angeles (LAX)</option>
        <option value="LHR">Londres (LHR)</option>
        <option value="CDG">Paris (CDG)</option>
        <option value="GOBD">Dakar (DSS)</option>
        {/* Ajoutez d'autres aéroports ici */}
      </select>
    </div>

          <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #cccccc',
      borderRadius: '4px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      margin: '5px',
      maxWidth: '200px',
      height: '60px'
    }}>
<svg width="16" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 7.826C.5 2.956 4.333 0 8 0s7.5 2.957 7.5 7.826c0 4.609-6.667 11.652-6.917 11.913C8.417 19.913 8.25 20 8 20c-.25 0-.417-.087-.583-.26C7.167 19.477.5 12.434.5 7.825zM8 10a3 3 0 100-6 3 3 0 000 6z" fill="#313541"/></svg>      <select
        name="arrivee"
        id="arrivee"
        value={this.state.arrivee} onChange={this.handleInputChange}
        style={{ flex: '1', width: '50%', border: 'none', outline: 'none', background: 'transparent' }}
      >
        <option value="" disabled hidden>To...</option>
        <option value="JFK">New York (JFK)</option>
        <option value="LAX">Los Angeles (LAX)</option>
        <option value="LHR">Londres (LHR)</option>
        <option value="CDG">Paris (CDG)</option>
        <option value="GOBD">Dakar (DSS)</option>
        {/* Ajoutez d'autres aéroports ici */}
      </select>
    </div>

    <div>
      <input
        type="date"
        name="date"
        id="date"
        value={this.state.date} onChange={this.handleInputChange} required 
        style={inputStyle}
      />
      </div>
      {typeVoyage === 'allerRetour' && (
      <div style={inputStyle}>
        <input
          type="date"
          name="dateRetour"
          id="dateRetour"
          value={this.state.dateRetour}
          onChange={this.handleInputChange}
          required
        />
      </div>
    )}
      <div style={passengerInputStyle}>
      <svg width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9c2.367 0 4.286-1.958 4.286-4.375S10.367.25 8 .25c-2.367 0-4.286 1.958-4.286 4.375S5.633 9 8 9zm-1.53 1.64C3.172 10.64.5 13.369.5 16.736c0 .56.445 1.015.994 1.015h13.012c.549 0 .994-.455.994-1.015 0-3.367-2.672-6.094-5.97-6.094H6.47z" fill="#313541"/></svg>        <input
          type="number"
          name="passagers"
          id="passagers"
          value={this.state.passagers} onChange={this.handleInputChange} 
          min="1"
          max="10"
          required
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', marginLeft:' 10px',maxWidth:'40px'}}
        />
      </div>
      <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #cccccc',
      borderRadius: '4px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      margin: '5px',
      maxWidth: '200px',
      height: '60px'
    }}>
      <img src="class.png" alt="class" style={{ width: '20px', height: '20px', marginRight: '20px' }} />
      <select
        name="arrivee"
        id="arrivee"
        style={{ flex: '1', width: '50%', border: 'none', outline: 'none', background: 'transparent' }}
      >
        <option value="">Economie</option>
        <option value="">Bussines</option>
        <option value="">First</option>
        {/* Ajoutez d'autres aéroports ici */}
      </select>
    </div>
    <button type="submit" style={{backgroundColor:'#fff', border:'3px solid #ff4600',height: '60px', padding:'14px', borderRadius:'5px', color:'#ff4600', margin: '10px', fontWeight:'500'}}>Rechercher un vol</button>
          <button type="submit" style={{backgroundColor:'#ff4600', borderColor:'#ff4600',height: '60px', padding:'14px', borderRadius:'5px', color:'#fff', margin: '10px',fontWeight:'500'}}>Réserver un billet</button>
          </div>
          <div style={{display:'flex', justifyContent:'flex-end',marginRight:'5rem'}}>
            
          <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Direct Flights" 
    defaultChecked
  />
  </Form>
          </div>
        </form>
      </div>
    );
  }
}

const inputStyle = {
  padding: '5px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #cccccc',
  margin: '10px',
  height: '60px',
  maxWidth: '125px',
  display:'flex',
  alignItems:'center'
};

const passengerInputStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  maxWidth: '120px', // Largeur maximale ajustée selon vos besoins
  padding: '5px',
  border: '1px solid #cccccc',
  borderRadius: '4px',
  height: '60px'
};

export default ReservationVol;