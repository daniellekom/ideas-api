const {initializeApp, cert, getApps} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')
const credentials = require('../credentials.json')

exports.connectDb = () => {
if(!getApps().length) {
    //are we already conencted to our back end? if not u need to initializeAPP
    initializeApp({
        credential: cert(credentials)
    })

}
return getFirestore()

}