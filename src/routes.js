import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ModalSwitch as Switch, ModalRoute } from 'react-router-modal-gallery';

// pages.
import { Home, AddTool } from './pages';

export default function Routes() {
  return (
    <Switch
      renderModal={() => (
        <>
          {/* setup modal routes */}
          <ModalRoute
            defaultParentPath="/"
            path="/add-tool"
            component={AddTool}
          />
        </>
      )}
    >
      {/* application routes */}
      <Route path="/" component={Home} exact />

      {/* modal routes display on direct url access */}
      <ModalRoute path="/add-tool" component={AddTool} defaultParentPath="/" />

      {/* when not exists route, redirect to home */}
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
}
