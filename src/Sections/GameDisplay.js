export const GameDisplay = (props) => {
    return(
        <div>
            {props.currentLevel.map((key, index) => {
                return(
                    <div key={index} onClick={props.handleImageClick}>
                        {console.log(key)}
                        <img alt ="pokemon" src={Object.values(key)[0]}/>
                    </div>
                )
            })}
        </div>
    )
}