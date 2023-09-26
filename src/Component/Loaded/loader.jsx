import loader from "../../assets/Dual.gif"

const Loader = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <img src={loader} alt="loader" />
      </div>
    </>

  )
}

export default Loader

