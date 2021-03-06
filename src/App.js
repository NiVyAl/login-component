import React from 'react';
import './style.less';
import LoginComponent from './components/LoginComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import MainComponent from './components/MainComponent.jsx'
import CategoriesComponent from './components/CategoriesComponent.jsx'
import AddArticle1Component from './components/AddArticle1Component.jsx'
import AddArticle2Component from './components/AddArticle2Component.jsx'
import RegistrationConfirmComponent from './components/RegistrationConfirmComponent.jsx'
import RegistrationComponent from './components/RegistrationComponent.jsx'
import AddUserComponent from './components/AddUserComponent.jsx'
import ProfileComponent from './components/ProfileComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import AddReviewComponent from './components/AddReviewComponent.jsx'
import AllReviewerComponent from './components/AllReviewerComponent.jsx'
import MyArticlesComponent from './components/MyArticlesComponent.jsx'
import AllArticlesComponent from './components/AllArticlesComponent.jsx'
import ArticlesByIdComponent from './components/ArticlesByIdComponent.jsx'
import ArticlesForReviewComponent from './components/ArticlesForReviewComponent.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Language from './components/service/LanguageContext'

class App extends React.Component {
  render() {
    return (
      <Language.Provider>
        <div>
          <Router>
            <HeaderComponent/>
            <LoginComponent/>
            
            <div className="main">
              <CategoriesComponent/>
              <div className="main__content">
                <Switch>
                  <Route path="/" exact component={MainComponent}/>
                  <Route path="/registration" component={RegistrationComponent}/>
                  <Route path="/addUser" component={AddUserComponent}/>
                  <Route path="/registrationConfirm" component={RegistrationConfirmComponent}/>
                  <Route path="/addArticle/step1" component={AddArticle1Component}/>
                  <Route path="/addArticle/step2" component={AddArticle2Component}/>
                  <Route path="/profile" component={ProfileComponent}/>
                  <Route path="/addReview" component={AddReviewComponent}/>
                  <Route path="/allReviewer" component={AllReviewerComponent}/>

                  <Route path="/myArticles" component={MyArticlesComponent}/>
                  <Route path="/allArticles" component={AllArticlesComponent}/>
                  <Route path="/articlesForReview" component={ArticlesForReviewComponent}/>
                  <Route path="/articles" component={ArticlesByIdComponent}/>
                </Switch>
              </div>
            </div>
    
            <FooterComponent/>
          </Router>
        </div>
      </Language.Provider>
    );
  }
  
}

export default App;
