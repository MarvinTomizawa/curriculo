import * as React from "react";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <main>
        <h1>Home</h1>
      </main>
    );
  }
}

export default Home;