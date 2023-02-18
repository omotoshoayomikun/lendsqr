import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UsersView from '../../PageViews/UsersView'

function Users() {

  const navigate = useNavigate()

  const [details, setDetails] = useState(JSON.parse(localStorage.getItem('details')))
  const [show, setShow] = useState({ id: '', show: false })
  const [filter, setFilter] = useState(false)
  const [spinner, setSpinner] = useState(true)


  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = details.slice(indexOfFirstPost, indexOfLastPost)
  
  const [pageNumLimit, setPageNumLimit] = useState(5)
  const [maxPageNumLimit, setmaxPageNumLimit] = useState(5)
  const [minPageNumLimit, setminPageNumLimit] = useState(0)



  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
        localStorage.setItem('details', JSON.stringify(res.data))
        // setDetails(res.data)
        setSpinner(false)
      } catch (err) {
        setSpinner(false)
        console.log(err)
      }

    }

    getDetails()
  }, [])

  const handleComDetails = (id) => {
    setShow({
      id: id,
      show: !show.show
    })
  }

  const status = (date) => {
    return Number(date.split('-').shift())
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handlePagNext = (pageNumbers) => {
    if (currentPage !== pageNumbers[pageNumbers.length - 1]) {

      setCurrentPage(currentPage + 1)

      if (currentPage + 1 > maxPageNumLimit) {
        setmaxPageNumLimit(maxPageNumLimit + pageNumLimit)
        setminPageNumLimit(minPageNumLimit + pageNumLimit)
      }
    }
  }

  const handlePagPrev = (pageNumbers) => {

    if (currentPage !== pageNumbers[0]) {

      setCurrentPage(currentPage - 1)

      if ((currentPage - 1) % pageNumLimit == 0) {
        setmaxPageNumLimit(maxPageNumLimit - pageNumLimit)
        setminPageNumLimit(minPageNumLimit - pageNumLimit)
      }
    }
  }



  // (details.map(d => { return console.log(d.lastActiveDate) }))

  let userProps = {
    setFilter,
    spinner,
    currentPosts,
    status,
    handleComDetails,
    show,
    filter,
    postPerPage,
    details,
    paginate,
    currentPage,
    maxPageNumLimit,
    minPageNumLimit,
    handlePagNext,
    handlePagPrev
  }


  return (
    <>
      <UsersView userProps={userProps} />
    </>
  )
}

export default Users