import React from 'react'
import Code from '../assets/code.svg'
import { string } from 'prop-types'

const SkillListItem = ({ itemText }) => {
  return (
    <li>
      <Code className="h-6 w-6 fill-current inline-block mr-2" />
      <span className="inline-block">{itemText}</span>
    </li>
  )
}

SkillListItem.propTypes = {
  skillListItem: string,
}

export default SkillListItem
