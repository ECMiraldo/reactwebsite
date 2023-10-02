


const Separator = ({paddingX}) => {

    const className = 'w-full m-auto px-' + paddingX;

    return (
        <div className= {className}>
            <div className="w-full h-1 bg-color-light rounded-full"></div>
        </div>
    )

}

export default Separator;