import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Landingpage from './Landingpage'

Enzyme.configure({ adapter: new Adapter() })

describe('App Component Test Suite', () => {
    it('should render the App component', () => {
        const wrapper = shallow(<Landingpage />)

        expect(wrapper.exists('.landingpage')).toBe(true)
    })
})
