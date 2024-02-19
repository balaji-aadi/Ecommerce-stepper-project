import React, { useEffect, useState } from 'react'
import './pagination.css'
import axios from 'axios'

const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    async function fetchingApi() {
        try {
            const res = await axios.get("https://dummyjson.com/products?limit=100")
            setData(res.data.products)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchingApi()
    }, [])

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= data.length / 10 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }

    return (
        <div>
            {
                data.length > 0 && <div className='products'>
                    {
                        data.slice(page * 10 - 10, page * 10).map((prod) => {
                            return <span key={prod.id} className='products__single'>
                                <img src={prod.images[0]} alt={prod.title} />
                                <span>{prod.title}</span>
                            </span>
                        })
                    }
                </div>
            }
            {
                data.length > 0 && <div className='pagination'>
                    <span onClick={() => selectPageHandler(1)}>◀◀</span>
                    <span className={page > 1 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page - 1)}>◀</span>
                    {
                        [...Array(data.length / 10)].map((_, i) => {
                            return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1} </span>
                        })
                    }
                    <span className={page < data.length / 10 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page + 1)}>▶</span>
                    <span onClick={() => selectPageHandler(data.length / 10)}>▶▶</span>
                </div>
            }
        </div>
    )
}

export default Pagination
