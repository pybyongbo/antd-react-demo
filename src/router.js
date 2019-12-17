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