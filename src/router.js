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

import Moreform from './pages/moreform';

import Formtest from './pages/formtest';

import PageCom from './pages/pagination1';

import PageNews from './pages/pagination2';

import Toggle from './pages/toggle';

import Navtest from './pages/navtest';

import Preoptest from './pages/preoptimzation';

import Modaltest from './pages/modalTest';

import FormTable from './pages/formTable';

import DeepComponentsData from './pages/deepComponentsData/index';

import RefTest from './components/RefTest';

import UseEffectTest from './components/UseEffectTest/index-reducer.js'

import FormProvider from './components/FormProvider';


import RadioForm from './pages/radioFormTest';
import CourseList from './pages/courseTab';


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
                    <Route path="/home/formtable" component={FormTable} />
                    <Route path="/home/paginationnews" component={PageNews} />
                    <Route path="/home/toggleChange" component={Toggle} />
                    <Route path="/home/preoptimzation" component={Preoptest} />
                    <Route path="/home/modalTest" component={Modaltest} />

                    <Route path="/home/navTest" component={Navtest} />
                    <Route path="/home/radioFormTest" component={RadioForm} />

                    <Route path="/home/deepComponentsData" component={DeepComponentsData} />

                    <Route path="/home/courselist" component={CourseList} />

                    <Route path ="/home/reftest" component={RefTest}/>

                    <Route path ="/home/useEffectTest" component={UseEffectTest}/>

                    <Route path="/home/formProvidertest" component={FormProvider}/>

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