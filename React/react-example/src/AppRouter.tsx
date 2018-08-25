import {Route, Switch, Redirect} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import App from "./components/App";
import * as React from 'react';
import {AboutPage} from './components/about/AboutPage';
import {ManageAuthorPage} from './components/authors/manageAuthorPage';
import {AuthorPage} from './components/authors/authorPage';
import {NotFoundPage} from './components/NotFoundPage';
import { Contactanos } from './components/Contactanos';
import AuthorNew from './components/authors/authorNew';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/authors" component={AuthorPage}/>
        <Route path="/about" component={AboutPage}/>
        <Redirect from='/autores' to = '/authors'/>
        <Route path="/author" exact component={ManageAuthorPage}/>
        <Route path="/author/:id" component={ManageAuthorPage}/>
        <Route path="/contactanos" component={Contactanos}/>
        <Route path="/authornew/:id" component={AuthorNew}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
};

