import React from 'react'
import './SectionHome.css'
import { useNavigate } from "react-router-dom";

const SectionHome = () => {
  // NOTES: this is useNavigate hooks from react router dom, will explain later
  // docs: https://reactrouter.com/en/main/hooks/use-navigate
  const navigate = useNavigate();

  const handleNavigateToDetailPage = () => {
    navigate('/detail')
  }

  return (
    <section className='section-home'>
      <div>SectionHome</div>
      {/* NOTES: this button is example of how to navigate to other page from a button */}
      <button type='button' onClick={handleNavigateToDetailPage}>Click here to see detail page</button>
    </section>
  )
}

export default SectionHome