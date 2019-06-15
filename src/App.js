import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './components/Pages/dashboard';
import Layout from './components/Layout';
import NotFound from './components/Pages/notFound';
import UserProfile from './components/Pages/staff/userProfile';
import AddStockItem from './components/Pages/store/addStockItem';
import AllStockItems from './components/Pages/store/allStockItems';
import UnreturnedStockItems from './components/Pages/store/unreturnedStockItems';
import Login from './components/Pages/staff/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Layout>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/userProfile" component={UserProfile} />
              <Route exact path="/addStockItem" component={AddStockItem} />
              <Route exact path="/allStockItems" component={AllStockItems} />
              <Route path="" component={NotFound} />
            </Switch>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
