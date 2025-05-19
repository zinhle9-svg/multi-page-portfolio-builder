import { useState } from "react";


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
if (!email.includes('@') && email.indexOf("@") > 0) {
  alert('Please enter a valid email address.');
  return;
}
    alert("THANK YOU!");
    setName('');
  setEmail('');
  setMessage('');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-red-300 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <form  className="flex flex-col space-y-4">
        <div>
          <label className="block text-lg font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 rounded border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Message</label>
          <textarea
            className="w-full p-2 rounded border"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button onClick={handleSubmit}
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
