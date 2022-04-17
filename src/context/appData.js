import React, { Component } from "react";
import Loading from "../shared/Loading";
import axios from "axios";
import { API } from "../config";

const Context = React.createContext({
  pokemons: [],
  loading: true,
  error: false,
});

class AppDataProvider extends Component {
  state = {
    pokemons: [],
    loading: true,
    error: false,
  };

  get actions() {
    return {
      getPokemons: this.getPokemons,
    };
  }

  getPokemons = (hasParams) => {
    axios
      .get(API)
      .then((data) => {
        console.log("data", data);
        this.setState({ pokemons: data.results, loading: false});
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
