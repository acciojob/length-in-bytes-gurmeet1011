const byteSize = (str) => {
  // write your code her
	  const blob = new Blob([str]);

    // Return the size of the Blob, which is the size of the string in bytes
    return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
