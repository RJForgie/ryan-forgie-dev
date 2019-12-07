import React from 'react'
import Layout from '../components/layout'
import SkillListItem from '../components/skillListItem'

export default () => {
  const skillList = [
    'React',
    'Modern JavaScript / TypeScript',
    'State Management (Redux / Context)',
    'Mobile First Design (SCSS and Tailwind CSS)',
    'Static Sites (Gatbsy)',
    'Unit Testing (Jest / React Testing Library)',
    'UI Test Automation (Cypress / Selenium)',
  ]
  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="text-2xl pb-8">
            I build web applications with these technologies:
          </div>
          <ul>
            {skillList.map(skill => {
              return <SkillListItem key={skill} itemText={skill} />
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
