document.getElementById('student-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const studentClass = document.getElementById('class').value;

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = `Name: ${name}, Age: ${age}, Class: ${studentClass}`;
  
  // Append to the list
  document.getElementById('students-list').appendChild(li);

  // Clear form
  document.getElementById('student-form').reset();
});
