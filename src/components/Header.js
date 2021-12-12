import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddTask }) => {

    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <Button color={!showAddTask ? 'green' : 'red'} text={!showAddTask ? 'Add' : 'Close'} onClick={onAdd} show />
        </header>
    );
}

Header.defaultProps = {
    title : 'Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string
}

// CSS in JS
// const headingStyle = {
//     color : "aqua",
//     backgroundColor : "black",
//     textAlign : "center"
// }

export default Header;