import React from 'react'
import { Features } from '../../components'
import './IntroJRS.css'

const IntroJRS = () => {
  return (
    <div className="jarvis__introjrs section__margin" id="Ijarvis">
      <div className="jarvis__introjrs-features">
        <Features title="What is J.A.R.V.I.S.?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl risus id nisi. Sed auctor, nunc ac cursus lacinia, nisl eros pellentesque quam, a faucibus nisl risus id nisi." />
      </div>
      <div className="jarvis__introjrs-headings">
        <h1 className="gradient__text">Features inside are beyond your Imagination</h1>
        <p>Explore J.A.R.V.I.S.</p>
      </div>
      <div className="jarvis__introjrs-container">
        <Features title="Ai Assitant" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <Features title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <Features title="Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      </div>
    </div>
  )
}

export default IntroJRS
