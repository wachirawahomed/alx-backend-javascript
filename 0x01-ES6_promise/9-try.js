export default function guardrail(mathFunction) {
  const queue = [];
  
  try {
    const result = mathFunction();
    queue.push(result);  // Add the result of the function to the queue
  } catch (error) {
    queue.push(error.message);  // Add the error message to the queue if the function throws an error
  }
  
  queue.push('Guardrail was processed');  // Add the final message
  return queue;
}
