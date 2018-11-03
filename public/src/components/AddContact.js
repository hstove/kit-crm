import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Nav from './Nav'
import Form from './styles/Form';
import Error from './ErrorMessage';

export default class AddContact extends Component {
 
  state = {
    name: '',
    lastName:'',
    twitterHandle: '',
    email:'',
    phoneNumber:'',
    age: '',
    country: '',
    region: '',
  };

  selectCountry(val) {
    this.setState({ country: val, region: '' });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    const loading = false;
    const error = false;
    return (
      <div>
        <Nav />
        <h1>Add Contact</h1>
      <Form
        onSubmit={async e => {
          e.preventDefault();
        }}
      >
        <Error error={error} />
        <fieldset >
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name.."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset >
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Name.."
              required
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset >
          <label htmlFor="email">
            Last Name
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Name.."
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset >
          <label htmlFor="phoneNumber">
            Last Name
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Name.."
              required
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset >
          <label>
            Sex
            <select onChange={this.handleChange} id="sex" name="sex">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </fieldset>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="twitterHandle">
            Twitter Handle
            <input
              type="text"
              id="twitterHandle"
              name="twitterHandle"
              placeholder="Twitter handle.. (eg. 0xferruccio)"
              required
              value={this.state.twitterHandle}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="age">
            Birth Date
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age.."
              required
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="country">
            Country
            <CountryDropdown
              name="country"
              id="country"
              value={this.state.country}
              onChange={val => this.selectCountry(val)}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="region">
            Region
            <RegionDropdown
              name="region"
              id="region"
              country={this.state.country}
              value={this.state.region}
              onChange={val => this.selectRegion(val)}
            />
          </label>
        </fieldset>
        <button type="submit" className="bg-black">Submit</button>
      </Form>
      </div>
    );
  }
}
