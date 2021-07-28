import React from 'react';
import Card from './Card'; 

// Method 1
// consCardListt CardList = ({ robots }) => {
//     return(
//         <div>
//             <Card id={robots[0].id} name={robots[0].name}  email={robots[0].email}/>
//             <Card id={robots[1].id} name={robots[1].name}  email={robots[1].email}/>
//             <Card id={robots[2].id} name={robots[2].name}  email={robots[2].email}/>
//         </div>
//     );
// }

// // Method 2 JSX
// //This method alows us to loop through al 10 robot and is better than method 1
// const CardList = ({ robots }) => {
//     const cardsArray = robots.map((user,i) => { //.map is javascript to return mulitple arrays that at in {}
//         //Key ={} must be used with loops to minimise the work we do to the dom.
//         return (
//             <Card 
//                 key={i} 
//                 id={robots[i].id} 
//                 name={robots[i].name}  
//                 email={robots[i].email}
//             /> 
//         );
//     })
//     return(
//         <div>
//             {cardsArray}
//         </div>
//     );
// }

// export default CardList;

// Method 3 Javascript - This is even cleaner than method 2
// This method alows us to loop through al 10 robot and is better than method 1
// React allows us to use either JSX or Javascript, use the code that is cleaner
const CardList = ({ robots }) => {
    return(
        <div>
            {
                robots.map((user,i) => { //.map is javascript to return mulitple arrays that at in {}
                    //Key ={} must be used with loops to minimise the work we do to the dom.
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name}  
                            email={robots[i].email}
                        /> 
                    );
                })
            }
        </div>
    );
}

export default CardList;