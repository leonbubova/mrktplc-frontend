import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('App Component Test Suite', () => {
    it('should render the App component', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.exists('.app')).toBe(true)
    })
})
