import React, { useEffect, useState } from 'react'
import { omdb } from '../utils';

const Search = () => {

    const [list, setList] = useState([]);
    const [query, setQuery] = useState("marvel");
    const [isclicked, setIsClicked] = useState(false);

    useEffect(_ => {
        (async _ => {
            const response = await omdb.get(`?s=${query}`);
            setList(response.data.Search);
        })()
        // eslint-disable-next-line
    }, [isclicked])

    return (
        <>
            <div className='header'>
                <h1>HOOKED</h1>
            </div>
            <div className='input_item'>
              <div className='input_item_name'>
                <input onChange={(e) => { setQuery(e.target.value) }} type="text"></input>
                <button onClick={() => { setIsClicked((prevState) => !prevState) }}>SEARCH</button>
              </div>
                {list.map((e, idx) => {
                    return (
                        <div className='detail_container'>
                            <div className='detail_item'>

                                <p key={idx}>{e.Title}</p>
                                <img src={e.Poster} alt="poster" />
                                <div className='year'>
                                  <p>({e.Year})</p>
                                </div>  
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Search