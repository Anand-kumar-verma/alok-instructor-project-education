import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/index'
import { useParams } from 'react-router-dom'
import Index from '../../components/admin-dashview'
// import { Data } from '../../dates/jummy'

const AdminDashboard = () => {

  const { category } = useParams()
  //let cat = Data.find((categ) => categ.url === parseInt(category))

  let { state, dispatch } = useContext(Context)
  let [size, setSize] = useState(1000)
  window.addEventListener('resize', (e) => {
    setSize(e.currentTarget.innerWidth)
  })
  useEffect(() => {
    size < 768 ? dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: false }) : dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: true })
  }, [size])
  return (
    <div className='bg-slate-50'>
      <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
        {/* <Sidebar />
        <div className={`main ${state.toggle ? ` ${state.toggleNavbar ? 'md:ml-[310px]' : 'ml-0'}` : ` ${state.toggleNavbar ? 'md:ml-[90px]' : 'ml-0'}`} overflow-auto w-full h-full z-10`}>
          {
            category === 'dashboard' && <Main />
          }
          {
            category === 'marketing' && <Marketing />
          }
          {
            category === 'feedback' && <Feedback heading = {"Feedback"} />
          }
          {
            category === 'add-course' && <AddCourse />
          }
          {
            category === 'allcourses' && <Feedback heading={"All Courses"}/>
          }
          {
            category === 'pending-in-review' && <Feedback heading={"Courses in Review"} />
          } */}
          <Index name = {category} heading="Course Feedback"/>
        </div>
      </div>
  )
}

export default AdminDashboard