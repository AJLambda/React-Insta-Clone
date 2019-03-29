import React from 'react'


const withAuthenticate = FirstComponent => SecondComponent =>
    class extends React.Component {
            constructor(props) {
                super(props) 
                this.state = {
                    loggedIn: false,
                }
            }
            
        
        componentDidMount() {
            if (localStorage.username) {
                return this.setState ({ loggedIn: true })
            }
        }


        render () {
            if (localStorage.username) {
            return <FirstComponent />
            }
            return <SecondComponent />
        }
    }



export default withAuthenticate;