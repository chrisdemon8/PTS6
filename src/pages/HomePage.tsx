import React from 'react';
const HomePage = () => {

  console.log(process.env)

  return (
    <>
      <p>
        Buil en cours :
        {process.env.REACT_APP_BUILD_TYPE}</p>
      <p>HomePage</p>

    </>
  )
}
export default HomePage