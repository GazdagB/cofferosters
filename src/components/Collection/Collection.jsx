/* eslint-disable react/prop-types */
import "./Collection.css"

const Collection = ({children}) => {
  return (
    <section>
        <div className="container flex flex-col justify-center items-center mb-[120px]">
            <h2 className="u-h2 text-center">Our Collection</h2>
            {children}
        </div>
    </section>
  )
}

export default Collection