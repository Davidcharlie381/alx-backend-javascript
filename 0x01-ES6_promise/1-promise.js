export default getFullResponseFromAPI(success) {
  return new Promise( (res, rej) => {
    if (success) {
      resolve({status: 200,
      body: 'Success'})
    }
    
    reject(new Error('The Fake API is not working currently')})
  } )
}
