import '../styles/Contact.css'

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault()

    alert("Message Sent Successfully 🚀")
  }

  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>

        <div className="input-row">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

        </div>

        <textarea
          placeholder="Write your message..."
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  )
}

export default Contact