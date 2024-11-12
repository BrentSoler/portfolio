import { Route, Switch } from "wouter";
import Index from "../../pages/Index";
import Projects from "../../pages/Projects";
import Socials from "../../pages/Socials";
import AboutMe from "../../pages/AboutMe";

export default function ServerRoutes() {
    return (
        <Switch>
            <Route path="/" component={Index} />
            <Route path="/projects" component={Projects} />
            <Route path="/socials" component={Socials} />
            <Route path="/aboutme" component={AboutMe} />
        </Switch>
    );
}
