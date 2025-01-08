export default function createIteratorObject(report) {
	const employees = [];
	for (const department of Object.values(report.allEmployees)){
		employees.push(...department);
	}
	
	let index = 0;
	return {
		next() {
			if (index < employees.length) {
				return { value: employees[index++], done: false }; // Increment handled here
			}
			
			return { done: true };
		},
		[Symbol.iterator]() {
			return this; // Allow use in a for...of loop
		},
	};
}
