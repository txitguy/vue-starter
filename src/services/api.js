import $http from 'axios'

function test () {
  $http.get('./').then(res => {
    console.log(res)
  })
}

export default {
  test
}
