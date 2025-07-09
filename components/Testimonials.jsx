
import { testimonialsData } from "@/data/landing";
import Image from "next/image";

{testimonialsData.map((testimonial) => (
  <div key={testimonial.name}>
    <Image
      src={testimonial.image}
      alt={testimonial.name}
      width={80}
      height={80}
      className="rounded-full"
    />
    <p>{testimonial.name}</p>
    <p>{testimonial.role}</p>
    <p>{testimonial.quote}</p>
  </div>
))}