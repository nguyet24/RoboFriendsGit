//React is needed to be import so we can use te below JSX syntax
import React from 'react';

// //Method 1 - Original method
// //Cards need to accept parameters
// const Card = (props) => {
//     //Remember can only return 1 elements
//     return (
//         //Remember tachin cannot use class, it has to be className
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             {/* ${props.id} - random picks the robot pic to make it dymanic */}
//             <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} /> 
//             <div>
//                 {/* This is jsx not js so need to wrap {} */}
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

// //Method 2 is called destructoring, which is a better method than 1
// //Cards need to accept parameters
// const Card = (props) => {
//     //Remember can only return 1 elements
//     const { name, email, id} = props;
//     return (
//         //Remember tachin cannot use class, it has to be className
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             {/* ${props.id} - random picks the robot pic to make it dymanic */}
//             <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> 
//             <div>
//                 {/* This is jsx not js so need to wrap {} */}
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// }

//Method 3 is also de-structoring, which is a better method than 1 & 2
//Cards need to accept parameters
const Card = ({name, email, id}) => {
    //Remember can only return 1 element from a component. However Fragment will solve this.
    return (
        //Remember tachin cannot use class, it has to be className
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* ${props.id} - random picks the robot pic to make it dymanic */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> 
            <div>
                {/* This is jsx not js so need to wrap {} */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;