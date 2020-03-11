import * as React from 'react'

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  searchProperty = event => {
    event.preventDefault()
    // TODO: Use a property search API
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchProperty}>
          <label htmlFor="search_property">Search Property</label>
          <input
            type="text"
            id="search_property"
            className="form-control"
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
