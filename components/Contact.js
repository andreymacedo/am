import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact">
        <div className="col a" data-aos="example-anim3">
          <h1>Ready to talk about your project?</h1>
        </div>

        <div className="col b" data-aos="example-anim3">
          <ul>
            <li><a href="mailto:andrey.rm@gmail.com">andrey.rm@gmail.com</a></li>
            <li><a href="tel:+5511959122402">+5511959122402</a></li>
          </ul>
        </div>
      </section>
  )
}
