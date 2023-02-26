const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 42,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};

const container = document.getElementById('container');
const div = document.createElement('div');
div.className = 'border rounded border-gary-400 ml-8 mr-8';
div.innerHTML=`<div class="bg-gray-100 border ">
<p class="  pl-4">Person Name <span>${person.result[0].name.common}</span>
</p>
</div>
<p class=" pl-4">age: <span>${person.result[0].age}</span></p>
<p class=" pl-4 pr-8">Street: <span>${person.result[0].address.street}</span></p>`

container.appendChild(div)

