import React, {useState} from 'react';
import Battles from "./battles";

function Home() {
  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
      <>
        <div className='row home-search-header'>
          <div className='col-sm-6'>
            <h1>All Battles</h1>
          </div>
          <div className='col-sm-6'>
            <input type="text" className="form-control" placeholder="Search" aria-label="search"
                   aria-describedby="search" onChange={onChangeSearch}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <Battles search={search}/>
          </div>
        </div>
      </>
  )
}

export default Home
