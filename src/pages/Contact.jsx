import { useState } from "react";


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-red-300 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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

        <button
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
