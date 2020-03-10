import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App'

import Layout from './Layout'
import Home from './pages/home';
import Basicform from './pages/form';
import Dynamicform from './pages/dynamicform';

import Componentform from './pages/componetform'

import Dialogform from './pages/dialogform'

import Comformtest from './pages/formtest'

import Parenttoson from './pages/parenttoson'

import Sontoparent1 from './pages/sontoparent1'

import Sontoparent2 from './pages/sontoparent2'

import Container from './pages/container'

class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                 <App>
                    {/* <Route path="/login" component={Login}/> */}
                    <Route render={()=>
                        <Layout>
                             <Switch>
                                <Route path='/' exact={true} component={Home} />
                                <Route path='/home/index' component={Home} />
                                <Route  path="/home/form" component={Basicform}/>
                                <Route path="/home/dynamicform" component={Dynamicform}/>   
                                <Route path="/home/componentform" component={Componentform}/>
                                <Route path="/home/dialogform" component={Dialogform}/>
                                <Route path="/home/comdialogform" component={Comformtest}/>
                                <Route path="/home/parenttoson" component={Parenttoson}/>
                                <Route path="/home/sontoparent1" component={Sontoparent1}/>
                                <Route path="/home/sontoparent2" component={Sontoparent2}/>
                                <Route path="/home/container" component={Container}/>
                                
                                {/* <Route  component={NoMatch}/> */}
                            </Switch>
                        </Layout>   
                    }/>
                </App>
            </HashRouter>
        )
    }
}

export default IRouter;