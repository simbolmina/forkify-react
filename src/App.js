import './App.css';
//import { Fragment } from 'react';
import Layout from './components/UI/Layout';
import Header from './components/Header/Header';
import SearchResults from './components/ResultsPage/SearchResults';
import Card from './components/UI/Card';
import { Route, Switch } from 'react-router-dom';
import EmptyPage from './components/Recipe/EmptyPage';
import Recipe from './components/Recipe/Recipe';

function App() {
  return (
    <Layout>
      <Header />
      <Card>
        <SearchResults />
        <Switch>
          <Route path="/" exact>
            <EmptyPage />
          </Route>
          <Route path="/:recipeId">
            <Recipe />
          </Route>
        </Switch>
      </Card>
    </Layout>
  );
}

export default App;
