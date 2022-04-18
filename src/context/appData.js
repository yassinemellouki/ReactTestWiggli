import React, { Component } from "react";
import Loading from "../shared/Loading";
import axios from "axios";
import { API } from "../config";

const Context = React.createContext({
  pokemons: [],
  count: null,
  loading: true,
  error: false,
});

class AppDataProvider extends Component {
  state = {
    pokemons: [],
    count: null,
    loading: true,
    error: false,
  };

  get actions() {
    return {
      getPokemons: this.getPokemons,
      getPokemon: this.getPokemon,
      gotPaginate: this.gotPaginate,
    };
  }

  getPokemons = (hasParams) => {
    this.setState({loading: true})
    axios
      .get(API)
      .then(({ data }) => {
        this.setState({ 
          pokemons: data.results,
          count: data.count,
          prev: data.previous,
          next: data.next,
          loading: false});
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, error: true });
      });
  };

  gotPaginate = (url) => {
    this.setState({loading: true})
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({ 
          pokemons: data.results,
          count: data.count,
          prev: data.previous,
          next: data.next,
          loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, error: true });
      });

  }

  getPokemon = (id) => {
    this.setState({loading: true, pokemon: null})
    axios
      .get(`${API}/${id}`)
      .then(({ data }) => {
        this.setState({ 
          pokemon: data,
          loading: false});
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, error: true });
      });
  };

  componentWillMount = () => {
    this.getPokemons();
  };

  render() {
    const { children } = this.props;
    const { loading } = this.state;

    if (!loading) {
      return (
        <Context.Provider
          value={{
            store: this.state,
            actions: this.actions,
          }}
        >
          {children}
        </Context.Provider>
      );
    } else {
      return <Loading />;
    }
  }
}

const AppDataConsumer = (ComposedComponent) => (props) =>
  (
    <Context.Consumer>
      {({ store, actions }) => (
        <ComposedComponent store={store} actions={actions} {...props} />
      )}
    </Context.Consumer>
  );

export { AppDataProvider, AppDataConsumer };
