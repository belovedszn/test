import PropTypes from 'prop-types'

function Card({children, reverse}) {
    // this is a conditional class
 // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

 return (
    <div className="card" style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', 
        color: reverse ? '#fff' : '#000',
    }}>
        {children}
    </div>
 )
}

// default props

Card.defaultProps = {
    reverse: false,
}

Card.prototype = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card;
