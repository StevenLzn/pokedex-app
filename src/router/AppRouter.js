import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PokedexScreen } from "../components/pokedex/PokedexScreen";
import { Sidebar } from "../components/ui/Sidebar";

export const AppRouter = () => {
    return (
        <Router>
            <div className="pokedex__main-content">
                <Sidebar />
                <main>
                    <Switch>
                        <Route path="/pokedex" component={PokedexScreen}/>
                        <Redirect to="/pokedex" />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}
