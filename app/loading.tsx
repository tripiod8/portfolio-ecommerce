// import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader"

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };

const LoadingPage = () => {
    return (<div className="flex h-screen w-screen justify-center items-center"><BeatLoader /></div>)
}

export default LoadingPage