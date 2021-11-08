import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './App';

import store from './store/store';

import Layout from './Layout';
import Home from './pages/home';
import TodoList from './pages/todoList';
import Basicform from './pages/form';
// import Dynamicform from './pages/dynamicform';
// import Componentform from './pages/componetform'

import Moreform from './pages/moreform';

import Formtest from './pages/formtest';

import PageCom from './pages/pagination1';

import PageNews from './pages/pagination2';

import Toggle from './pages/toggle';

import Navtest from './pages/navtest'


class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <ConfigProvider locale={zhCN}>
            <App>
              <Route render={() =>
                <Layout>
                  <Switch>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/home/index' component={Home} />
                    <Route path='/home/todoList' component={TodoList} />
                    <Route path="/home/form" component={Basicform} />
                    <Route path="/home/dialogform" component={Moreform} />
                    <Route path="/home/formtest" component={Formtest} />
                    <Route path="/home/pagination1" component={PageCom} />
                    <Route path="/home/paginationnews" component={PageNews} />
                    <Route path="/home/toggleChange" component={Toggle} />
                    <Route path="/home/navTest" component={Navtest} />

                    {/* <Route path="/home/dynamicform" component={Dynamicform}/>   
                    <Route path="/home/componentform" component={Componentform}/>
                    <Route path="/home/dialogform" component={Dialogform}/>
                    <Route path="/home/comdialogform" component={Comformtest}/>
                    <Route path="/home/parenttoson" component={Parenttoson}/>
                    <Route path="/home/sontoparent1" component={Sontoparent1}/>
                    <Route path="/home/sontoparent2" component={Sontoparent2}/>
                    <Route path="/home/container" component={Container}/> */}

                    {/* <Route  component={NoMatch}/> */}
                  </Switch>
                </Layout>
              } />
            </App>
          </ConfigProvider>
        </Provider>
      </HashRouter>
    )
  }
}

export default IRouter;