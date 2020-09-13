import React from 'react'
import Register from './Register'
import SignUpCompleted from './SignUpCompleted'
import Login from './Login'
import Welecome from './Welcome'
import Payment from './Payment'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Folder from './images/Folder.svg'
import Schedule from './images/Schedule.svg'
import Question from './images/Question.svg'
import Chat from './images/Chat.svg'
import Activity from './images/Activity.svg'
import Achievement from './images/Achievement.svg'
import Feedback from './images/Feedback.svg'
import Payments from './images/Payments.svg'
import Setting from './images/Setting.png'

const Home = () => {
    return (
        <div className="home">
            <div className="sidebar">
                <div className="all-center">
                    <li>
                        <img className="small" src={Folder} alt="Folder"/>
                        Courses
                    </li>
                    <li>
                        <img className="small" src={Schedule} alt="Schedule"/>  
                        Schedule
                    </li>
                    <li>
                    <img className="small" src={Question} alt="Question"/>
                        Ask a question
                    </li>
                    <li>
                    <img className="small" src={Chat} alt="Chat"/>
                        Materials
                    </li>
                    <li>
                    <img className="small" src={Activity} alt="Activity"/>
                        Chat
                    </li>
                    <li>
                    <img className="small" src={Activity} alt="Activity"/>
                        Activity Zone
                    </li>
                    <li>
                    <img className="small" src={Achievement} alt="Achievement"/>
                        Achievements
                    </li>
                    <li>
                    <img className="small" src={Feedback} alt="Feedback"/>
                        Reports
                    </li>
                    <li>
                    <img className="small" src={Payments} alt="Payment"/>
                        Payments
                    </li>
                    <li>
                    <img className="small" src={Setting} alt="settings"/>
                        Settings
                    </li>
                </div>
                <div className="line"></div>
            </div>
            <div className="mainContent">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Register}></Route>
                        <Route exact path="/signUpSuccess" component={SignUpCompleted}/>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/welcome" component={Welecome}></Route>
                        <Route exact path="/payment" component={Payment}></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default Home
