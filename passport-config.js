const localStrategy = require('passport-local').Strategy //local strategy
const bcrypt = require('bcrypt')


function initialize(passport, getUserByUsername, getUserById) {
    //call done when you're done authenticating user
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username)
        console.log(user)
        //if there is no username then return done with that message. Can't return error because
        //there is no error when it comes to the server
        if (user == null) {
            return done(null, false, {message:'No user with that username.'})
        }

        try {

            // compare the password that the user typed in with the hashed password
            // if true then return the user
            if (await bcrypt.compare(password, user.password)) {
                return done(null,user)
            } else {
                return done(null,false, {message: 'Password incorrect'})
            }
        } catch (error) {
            return done(error)
        }
    }
    passport.use(new localStrategy({usernameField: 'username'},
    authenticateUser)) //username field is defaulted to username
    //and password field is defaulted to passport


    // // serializeUser to store in session
    passport.serializeUser((user,done) => done(null,user))
    // passport.deserializeUser((id,done) =>{
    //     return done(null,getUserById(id))
    //  })
    passport.deserializeUser((user,done) => done(null,user))
}

// export so we can use this function
module.exports = initialize