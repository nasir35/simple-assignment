const testimonials = [
  {
    name: "Willians Jhone",
    title: "CEO & Co-Founder",
    image: "./assets/images/user.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.",
  },
  {
    name: "Jane Doe",
    title: "Marketing Head",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDU_TmMK9xYGD2Vhk7IkYO-9g5VOi4QHG0A&s",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "John Smith",
    title: "Product Manager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zh_fVzo_duap3kc9HIZSUHHO5wxO-uUu2Q&s",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

let currentTestimonialIndex = 0;

const clientImage = document.getElementById("client-image");
const clientName = document.getElementById("client-name");
const clientTitle = document.getElementById("client-title");
const testimonialText = document.getElementById("testimonial-text");

function updateTestimonial(index) {
  const testimonial = testimonials[index];
  clientImage.src = testimonial.image;
  clientName.textContent = testimonial.name;
  clientTitle.textContent = testimonial.title;
  testimonialText.textContent = `"${testimonial.text}"`;
}

document.getElementById("prev-btn").addEventListener("click", function () {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
});

document.getElementById("next-btn").addEventListener("click", function () {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonial(currentTestimonialIndex);
});
