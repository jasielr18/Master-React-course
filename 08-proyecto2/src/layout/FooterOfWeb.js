import React from 'react'

export const FooterOfWeb = () => {

  const year = new Date().getUTCFullYear(); 

  return (
    <div>
        <footer> Jasiel Ramirez Porfolio &copy; - {year} </footer>
    </div>
  )
}
