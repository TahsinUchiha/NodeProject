const axios = require('axios')

// const getBreeds = () => {
//   try {
//  //   return axios.get('https://dog.ceo/api/breeds/list/all')
//  return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

//   } catch (error) {
//     console.error(error)
//   }
// }

// const countBreeds = async () => {
//   const breeds = get()
//     .then(response => {
//       if (response.data.message) {
//         console.log(
//           `Got ${Object.entries(response.data.message).length} breeds`
//         )
//       }
//     })
//     .catch(error => {
//       console.log(error)
 
//     })
// }

//countBreeds()


// axios.get('https://dog.ceo/api/breeds/list/all')
// .then(function (response) {
//   console.log(response);
//   console.log(`Got ${Object.entries(response.data.message).length} breeds`);
// })
// .catch(function (error) {
//   console.log(error);   
// });


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(function (response) {
  console.log(response);
  console.log(`Got ${Object.entries(response.data.message).length}`);
})
.catch(function (error) {
  console.log(error);   
});



