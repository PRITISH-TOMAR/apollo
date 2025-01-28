const faqs = [
  {
    question: "What are the visiting hours for patients at Apollo Hospitals?",
    answer: {
      paragraph: "The visiting hours at Apollo Hospitals are designed to ensure that patients receive adequate rest and care while allowing family and friends to visit them. We encourage visitors to follow the guidelines for a smooth experience.",
      list: [
        "General wards: 4:00 PM - 7:00 PM.",
        "ICU/critical care units: Visits are limited and require prior permission from the medical team.",
        "Please avoid visiting outside designated hours to ensure patient privacy and recovery."
      ]
    }
  },
  {
    question: "How can I book an appointment at Apollo Hospitals?",
    answer: {
      paragraph: "Booking an appointment at Apollo Hospitals is a simple and streamlined process. We provide multiple options to suit your convenience and preferences.",
      list: [
        "Visit our website and use the 'Book Appointment' feature for online scheduling.",
        "Call our helpline to speak with a representative and schedule an appointment.",
        "Walk into the hospital and approach the appointment desk for on-the-spot scheduling."
      ]
    }
  },
  {
    question: "What facilities are available for international patients?",
    answer: {
      paragraph: "Apollo Hospitals offers a comprehensive range of facilities and services to ensure international patients feel comfortable and cared for during their stay.",
      list: [
        "Dedicated International Patient Services team for assistance with medical queries and logistics.",
        "Support for visa processing, airport transfers, and accommodation arrangements.",
        "Multilingual staff and interpreters to overcome language barriers."
      ]
    }
  }
];



const faq = document.getElementById('faq')

faqs.forEach((item, index) => {
  // const question = item.question
  // const answer = item.answer
  // const paragraph = answer.paragraph
  // const list = answer.list


  const faqItem = document.createElement('div')
  faqItem.classList.add('faq-item')
  


  // const ques = document.createElement('div')
  // ques.classList.add('question')

  const number = document.createElement('span')
  number.classList.add('number')
  number.textContent = index + 1
  faqItem.appendChild(number)

  const title = document.createElement('p')
  title.classList.add('title')
  title.textContent = item.question
  faqItem.appendChild(title)

  const arrow = document.createElement('span')
  arrow.classList.add('arrow')
  arrow.innerHTML = '\u2B9F'
  faqItem.appendChild(arrow)

  // faqItem.appendChild(ques)



  const ansPara = document.createElement('p')
  ansPara.classList.add('ans-para')
  ansPara.textContent = item.answer.paragraph
  // ansPara.style.display = 'none'
  faqItem.appendChild(ansPara)

  const ansList = document.createElement('ul')
  ansList.classList.add('ans-list')
  // ansList.style.display = 'none'

  item.answer.list.forEach((listItem, listIndex) => {
    const li = document.createElement('li')
    li.textContent = listItem
    ansList.appendChild(li)

  })

  faqItem.appendChild(ansList)


  faq.appendChild(faqItem)


  faqItem.addEventListener('click', function (){
    if (ansPara.classList.contains('show')) {
      ansPara.classList.remove('show')
      ansList.classList.remove('show')
    }
    else {
      ansPara.classList.add('show')
      ansList.classList.add('show')
      }
  })
})



