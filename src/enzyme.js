// eslint-disable-next-line import/no-extraneous-dependencies
import Enzyme, { configure, shallow, mount, render } from 'enzyme'
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })
export { shallow, mount, render }
export default Enzyme
