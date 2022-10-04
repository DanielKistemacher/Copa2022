import arrowLeft from './svgs/arrowLeft.svg'

const icons = {
    arrowLeft
}

export const Icon = ({name, ...props}) => {
    const Element = icons[name]
    return <Element {...props} />
}