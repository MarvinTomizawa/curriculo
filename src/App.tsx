import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Ui/GlobalStyle";
import { colorPalette } from "./components/Ui/Variables";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sobre from "./components/Sobre/Sobre";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import RouteModel from "./models/RouteModel";

const Contato = () => <h1>Contato</h1>;
const Experiencia = () => <h1>Experiencia</h1>;
const Habilidades = () => <h1>Habilidades</h1>;

class App extends React.Component {
  private routes: RouteModel[] = [
    new RouteModel("/", "Home", Home, true),
    new RouteModel("/sobre", "Sobre", Sobre),
    new RouteModel("/experiencia", "Experiencia", Experiencia),
    new RouteModel("/habilidades", "Habildades", Habilidades),
    new RouteModel("/contato", "Contato", Contato),
    new RouteModel("*", "NotFound", NotFound, false, false),
  ];

  mapRoutes() {
    return this.routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  }

  render() {
    return (
      <ThemeProvider theme={{ ...colorPalette }}>
        <GlobalStyle></GlobalStyle>
        <Router>
          <Header routes={this.routes}></Header>
          <Switch>{this.mapRoutes()}</Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;