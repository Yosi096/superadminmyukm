import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DetailNews from '../mainpages/detailNews/DetailNews'
import DetailAnnouns from '../mainpages/detailAnnoun/DetailAnnouns'
import DetailUkm from './ukm/DetailUkm'
import DeleteUkm from './ukm/DeleteUkm'
import Login from './auth/Login'
import News from './news/News'
import Announ from './announ/Announ'
import File from './file/File'
import UKM from './ukm/UKM'
import Register from './auth/Register'
import NewsAnnoun from './NewsAnnoun'
import NotFound from './utils/not_found/NotFound'
import ActivationEmail from './auth/ActivationEmail'
import { useSelector } from 'react-redux'

function Pages() {
  const { auth } = useSelector(state => state)

  return (
    <section>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/beranda" exact component={NewsAnnoun}/>
      <Route path="/detail/:id" exact component={DetailNews}/>
      <Route path="/details/:id" exact component={DetailAnnouns}/>
      <Route path="/more/:id" exact component={DetailUkm}/>
      <Route path="/delete/:id" exact component={DeleteUkm}/>
      <Route path="/news" exact component={News}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/user/activate/:activation_token" exact component={ActivationEmail}/>
      <Route path="/announ" exact component={Announ}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/ukm" exact component={UKM}/>
      <Route path="/file" exact component={File}/>
      <Route path="*" exact component={NotFound}/>
    </Switch>
    </section>
  )
}

export default Pages
