import cn from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ children, className, disabled, onClick }) => {
    return (
        <button
            className={cn(
                className,
                'flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'
            )}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
}

export default Button
