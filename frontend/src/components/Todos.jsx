
/**
 * 
 * @param {todos} param0 
 * @returns 
 * todos=[
 * title:"Go to Gym",
 * description: "go to gym"
 * ]
 */



// function Todos({ todos }) {
//   const handleToggle = (index) => {
//     // Assuming you have a function to handle completion toggling
//     // Update the state or perform any action accordingly
//     console.log(`Toggling completion for todo at index ${index}`);
//   };

//   return (
//     <div>
//       {todos.map((todo, index) => (
//         <div key={index}>
//           <h1>{todo.title}</h1>
//           <h2>{todo.description}</h2>
//           <button onClick={() => handleToggle(index)}>
//             {todo.completed ? 'Completed' : 'Mark as completed'}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Todos;


/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}